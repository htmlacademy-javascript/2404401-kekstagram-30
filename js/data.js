import {getRandomNumber, generatesUniqueId} from './util.js';
const COMMENTS_NAME = ['Артём', 'Олег', 'Антон', 'Вадим', 'Саша', 'Никита', 'Алина', 'Оксана', 'Игорь', 'Вика', 'Лиза', 'Мария', 'Ольга'];
const DESCRIPTION = ['Великолепные пейзажи', 'Фото на память', 'Mood', 'Без слов', 'Как пить дать', 'Во всей красе'];
const COMMENTS_MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];
const POSTS_COUNT = 25;
const uniqueId = generatesUniqueId(1, 25);
const uniqueIdPic = generatesUniqueId(1, 25);
let uniqueIdComments = 1;


function createObjComments() {
  return {
    id: uniqueIdComments++,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS_MESSAGE[getRandomNumber(0, COMMENTS_MESSAGE.length - 1)],
    name: COMMENTS_NAME[getRandomNumber(0, COMMENTS_NAME.length - 1)],
  };
}

function generatesPostsObject() {
  return {
    id: uniqueId(),
    url: `photos/${uniqueIdPic(1, 25)}.jpg`,
    description: DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)],
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, 30)}, createObjComments),
  };
}
// eslint-disable-next-line no-unused-vars
const arrayObjectPosts = Array.from({ length: POSTS_COUNT }, generatesPostsObject);
console.log(arrayObjectPosts)
export { arrayObjectPosts };
