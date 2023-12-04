import { onModalEscapeKeydown } from './util.js';
import { getCommentsList } from './comments.js';

const modalBigPicture = document.querySelector('.big-picture');
const infoModalBigPicture = document.querySelector('.big-picture__social');
const closeModalButton = modalBigPicture.querySelector('.big-picture__cancel');
const inputCommentBigPicture = document.querySelector('.social__footer-text');
const btnLoader = document.querySelector('.comments-loader');

function closeBigPictureHandler() {
  modalBigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}
function openBigPictureHandler() {
  modalBigPicture.classList.remove('hidden');
  btnLoader.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
}
inputCommentBigPicture.addEventListener('blur', () => {
  onModalEscapeKeydown(closeBigPictureHandler);
});

function getBigPictures(data) {
  const miniaturePictures = document.querySelectorAll('.picture');
  miniaturePictures.forEach((miniaturePicture) => {
    miniaturePicture.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPictureHandler();
      onModalEscapeKeydown(closeBigPictureHandler);

      modalBigPicture.querySelector('img').src = miniaturePicture.querySelector('.picture__img').src;
      infoModalBigPicture.querySelector('.likes-count').textContent = miniaturePicture.querySelector('.picture__likes').textContent;
      infoModalBigPicture.querySelector('.social__caption').textContent = miniaturePicture.querySelector('.picture__img').alt;
      infoModalBigPicture.querySelector('.social__comment-total-count').textContent = miniaturePicture.querySelector('.picture__comments').textContent;

      const currentId = miniaturePicture.querySelector('.picture__img').id;
      getCommentsList(currentId, data);
    });
  });
}
closeModalButton.addEventListener('click', closeBigPictureHandler);
export { getBigPictures };
