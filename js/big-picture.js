import { placePictures } from './get-picture.js';
import { onModalEscapeKeydown } from './util.js';
import { getCommentsList } from './comments.js';

const modalBigPicture = document.querySelector('.big-picture');
const infoModalBigPicture = document.querySelector('.big-picture__social');
const miniaturePictures = placePictures.querySelectorAll('.picture');
const closeModalButton = modalBigPicture.querySelector('.big-picture__cancel');
const inputCommentBigPicture = document.querySelector('.social__footer-text');
const btnLoader = document.querySelector('.comments-loader');

function closeModalBigPicture() {
  modalBigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}
function openModalBigPicture() {
  modalBigPicture.classList.remove('hidden');
  btnLoader.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
}


inputCommentBigPicture.addEventListener('blur', () => {
  onModalEscapeKeydown(closeModalBigPicture);
});

miniaturePictures.forEach((miniaturePicture) => {
  miniaturePicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModalBigPicture();
    onModalEscapeKeydown(closeModalBigPicture);

    modalBigPicture.querySelector('img').src = miniaturePicture.querySelector('.picture__img').src;
    infoModalBigPicture.querySelector('.likes-count').textContent = miniaturePicture.querySelector('.picture__likes').textContent;
    infoModalBigPicture.querySelector('.social__caption').textContent = miniaturePicture.querySelector('.picture__img').alt;
    infoModalBigPicture.querySelector('.social__comment-total-count').textContent = miniaturePicture.querySelector('.picture__comments').textContent;

    const currentId = miniaturePicture.querySelector('.picture__img').id;
    getCommentsList(currentId);
  });
});
closeModalButton.addEventListener('click', closeModalBigPicture);

export { miniaturePictures };
