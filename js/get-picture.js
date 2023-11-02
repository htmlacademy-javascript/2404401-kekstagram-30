import { arrayObjectPosts } from './data.js';

const templatePicture = document.querySelector('#picture');
//const bla = templatePicture.querySelector('a');
const placePictures = document.querySelector('.picture');

const arrayPhoto = arrayObjectPosts;
console.log(templatePicture);

arrayPhoto.forEach(({url, description, likes, comments}) => {
  const picture = templatePicture.cloneNode(true);

});

export {bla};
