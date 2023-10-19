const COMMENTS_NAME = ['Артём', 'Олег', 'Антон', 'Вадим', 'Саша', 'Никита', 'Алина', 'Оксана', 'Игорь', 'Вика', 'Лиза', 'Мария', 'Ольга'];
const DESCRIPTION = ['Великолепные пейзажи', 'Фото на память', 'Mood', 'Без слов', 'Как пить дать', 'Во всей красе'];
const COMMENTS_MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];
const POSTS_COUNT = 25;
function getRandomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const number = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(number);
}
function generatesUniqueId(min, max) {
  const ARRAY_ID = [];
  return function () {
    let num = getRandomNumber(min, max);
    while (ARRAY_ID.includes(num)){
      num = getRandomNumber(min, max);
    }
    ARRAY_ID.push(num);
    return num;
  };
}
function createObjComments(min, max) {
  const arrayComments = [];
  for (let i = 0; i <= getRandomNumber(min, max); i++) {
    arrayComments.push({
      id: i + 1,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: COMMENTS_MESSAGE[getRandomNumber(0, COMMENTS_MESSAGE.length - 1)],
      name: COMMENTS_NAME[getRandomNumber(0, COMMENTS_MESSAGE.length - 1)],
    });
  }
  return arrayComments;
}
const uniqueId = generatesUniqueId(1, 25);
function generatesPostsObject() {
  return {
    id: uniqueId(),
    url: `photos/${getRandomNumber(1, 25)}.jpg`,
    description: DESCRIPTION[getRandomNumber(1,6)],
    likes: getRandomNumber(15, 200),
    comments: createObjComments(0, 30),
  };
}
// eslint-disable-next-line no-unused-vars
const arrayObjectPosts = Array.from({ length: POSTS_COUNT }, generatesPostsObject);
