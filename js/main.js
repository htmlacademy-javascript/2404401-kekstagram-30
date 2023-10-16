const COMMENTS_NAME = ['Артём', 'Олег', 'Антон', 'Вадим', 'Саша', 'Никита', 'Алина', 'Оксана', 'Игорь', 'Вика', 'Лиза', 'Мария', 'Ольга'];
const DESCRIPTION = ['Великолепные пейзажи', 'Фото на память', 'Mood', 'Без слов', 'Как пить дать', 'Во всей красе'];
let commentsIdIndicate = 1;
const COMMENTS_MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];
const result = [];
const ARRAY_URL = [];
const ARRAY_ID = [];
function getRandomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const number = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(number);
}

function createObjectCard() {
  const obj = {
    id: createObjId(1, 25),
    url: createObjUrl(1, 25),
    description: createObjDescription(0, 5),
    likes: createObjLikes(15, 200),
    comments: createObjComments(0, 30),
  };
  commentsIdIndicate = 1;
  result.push(obj);
}

function createObjId(min, max) {
  let num = getRandomNumber(min, max);
  while (ARRAY_ID.includes(num)){
    num = getRandomNumber(1, 25);
  }
  ARRAY_ID.push(num);
  return num;
}

function createObjUrl(min, max) {
  let num = getRandomNumber(min, max);
  while (ARRAY_URL.includes(num)){
    num = getRandomNumber(1, 25);
  }
  ARRAY_URL.push(num);
  return `photos/${num}.jpg`;
}

function createObjDescription(min, max) {
  return DESCRIPTION[getRandomNumber(min,max)];
}

function createObjLikes(min, max) {
  return getRandomNumber(min, max);
}

function createObjComments(min, max) {
  const arrayComments = [];

  for (let i = 0; i <= getRandomNumber(min, max); i++) {
    arrayComments.push({
      id: commentsIdIndicate,
      avatar: `img/avatar-${getAvatarNumber()}.svg`,
      message: getMessage(),
      name: getName(),
    });
    commentsIdIndicate += 1;
  }

  //avatar generation
  function getAvatarNumber() {
    return getRandomNumber(1, 6);
  }

  //message generation
  function getMessage() {
    return COMMENTS_MESSAGE[getRandomNumber(0, COMMENTS_MESSAGE.length - 1)];
  }

  //name generation
  function getName() {
    return COMMENTS_NAME[getRandomNumber(0, COMMENTS_MESSAGE.length - 1)];
  }

  return arrayComments;
}

for (let i = 0; i < 25; i++) {
  createObjectCard();
}
