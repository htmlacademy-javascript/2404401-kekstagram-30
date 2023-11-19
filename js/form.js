import { stopIsEscapeKey } from './util.js';
import { onModalEscapeKeydown } from './util.js';
import { hashtagInput, commentsInput, pristine } from './form-validation.js';

const openUploadPictureBtn = document.querySelector('.img-upload__input');
const overlayPicture = document.querySelector('.img-upload__overlay');
const closeUploadPictureBtn = document.querySelector('.img-upload__cancel');

function closeModalUpload() {
  overlayPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  openUploadPictureBtn.value = '';
  hashtagInput.value = '';
  commentsInput.value = '';
  pristine.reset();
}

hashtagInput.addEventListener('blur', () => {
  onModalEscapeKeydown(closeModalUpload);
});
stopIsEscapeKey(hashtagInput);
stopIsEscapeKey(commentsInput);

function openModalUpload() {
  overlayPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  onModalEscapeKeydown(closeModalUpload);
}

function openUploadPicture() {
  openUploadPictureBtn.addEventListener('change', openModalUpload);
}

closeUploadPictureBtn.addEventListener('click', closeModalUpload);

export { openUploadPicture };
