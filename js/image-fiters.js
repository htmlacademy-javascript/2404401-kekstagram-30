import { createPosts } from './get-picture';
import { debounce } from './util';
const filterContainer = document.querySelector('.img-filters');
const filterBtnDefault = filterContainer.querySelector('#filter-default');
const filterBtnRandom = filterContainer.querySelector('#filter-random');
const filterBtnDiscussed = filterContainer.querySelector('#filter-discussed');

const RANDOM_MAX_POSTS = 10;

const filters = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed',
};

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min));
}

const filterHandler = {
  [filters.DEFAULT] : function (data) {
    return data;
  },
  [filters.RANDOM] : function (data) {
    const randomIndexList = [];
    const max = Math.min(RANDOM_MAX_POSTS, data.length);
    while (randomIndexList.length < max) {
      const index = getRandomIndex(0, data.length);
      if (!randomIndexList.includes(index)){
        randomIndexList.push(index);
      }
    }
    return randomIndexList.map((index) => data[index]);
  },
  [filters.DISCUSSED] : function (data) {
    return [...data].sort((item1, item2) => item2.comments.length - item1.comments.length);
  },
};
let currentFilter = filters.DEFAULT;

function repaint(event, filter, data) {
  if (currentFilter !== filter) {
    const filteredData = filterHandler[filter](data);
    const pictures = document.querySelectorAll('.picture');
    pictures.forEach((picture) => picture.remove());
    createPosts(filteredData);
    const activeBtn = filterContainer.querySelector('.img-filters__button--active');
    activeBtn.classList.remove('img-filters__button--active');
    event.target.classList.add('img-filters__button--active');
    currentFilter = filter;
  }
}

const debauncedRepaint = debounce(repaint);

function initFilter(data) {
  filterContainer.classList.remove('img-filters--inactive');
  filterBtnDefault.addEventListener('click', (event) => {
    debauncedRepaint(event, filters.DEFAULT, data);
  });
  filterBtnRandom.addEventListener('click', (event) => {
    debauncedRepaint(event, filters.RANDOM, data);
  });
  filterBtnDiscussed.addEventListener('click', (event) => {
    debauncedRepaint(event, filters.DISCUSSED, data);
  });
}

export { initFilter };
