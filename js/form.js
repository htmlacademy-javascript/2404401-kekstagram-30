import { stopIsEscapeKey } from './util.js';
import { onModalEscapeKeydown } from './util.js';
import { hashtagInput, commentsInput, pristine, isValidType } from './form-validation.js';
import { init } from './filter.js';
import { resetScale } from './scale.js';

const openUploadPicture = document.querySelector('.img-upload__input');
const overlayPicture = document.querySelector('.img-upload__overlay');
const closeUploadPictureBtn = document.querySelector('.img-upload__cancel');
const previewPhoto = document.querySelector('.img-upload__preview img');
const previewEffects = document.querySelectorAll('.effects__label span');

function uploadModalPicture() {
  const file = openUploadPicture.files[0];
  if (file && isValidType(file)) {
    previewPhoto.src = URL.createObjectURL(file);
    previewEffects.forEach((element) => {
      element.style.backgroundImage = `url(${previewPhoto.src})`;
    });
  }
}
function closeModalUpload() {
  overlayPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  openUploadPicture.value = '';
  hashtagInput.value = '';
  commentsInput.value = '';
  pristine.reset();
  resetScale();
}

hashtagInput.addEventListener('blur', () => {
  onModalEscapeKeydown(closeModalUpload);
});
stopIsEscapeKey(hashtagInput);
stopIsEscapeKey(commentsInput);

function openModalUpload() {
  overlayPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  init();
  onModalEscapeKeydown(closeModalUpload);
}

function openUploadPictureModal() {
  openUploadPicture.addEventListener('change', () => {
    openModalUpload();
    uploadModalPicture();
  });
  closeUploadPictureBtn.addEventListener('click', closeModalUpload);
}


export { openUploadPictureModal, closeModalUpload };
