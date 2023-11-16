import { arrayObjectPosts } from './data.js';

const templatePicture = document.querySelector('#picture').content;
const placePictures = document.querySelector('.pictures');

const arrayPhoto = arrayObjectPosts;
const picturesFragment = document.createDocumentFragment();

arrayPhoto.forEach(({url, description, likes, comments, id}) => {
  const picture = templatePicture.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__img').id = id;
  picturesFragment.appendChild(picture);
});

placePictures.appendChild(picturesFragment);
export {placePictures};
