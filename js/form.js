import { onModalEscapeKeydown } from './util.js';
import { hashtagInput, commentsInput, pristine, isValidType } from './form-validation.js';
import { init as initEffect} from './filter.js';
import { resetScale } from './scale.js';

const openUploadPicture = document.querySelector('.img-upload__input');
const overlayPicture = document.querySelector('.img-upload__overlay');
const closeUploadPictureBtn = document.querySelector('.img-upload__cancel');
const previewPhoto = document.querySelector('.img-upload__preview img');
const previewEffects = document.querySelectorAll('.effects__label span');

initEffect();

function uploadModalPicture() {
  const file = openUploadPicture.files[0];
  if (file && isValidType(file)) {
    document.querySelector('body').classList.add('modal-open');
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
  previewPhoto.removeAttribute('class');
  previewPhoto.removeAttribute('style');
}

onModalEscapeKeydown(hashtagInput);
onModalEscapeKeydown(commentsInput);


function openModalUpload() {
  overlayPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.removeEventListener('keydown', onModalEscapeKeydown(closeModalUpload));
}

function openUploadPictureModal() {
  openUploadPicture.addEventListener('change', () => {
    openModalUpload();
    uploadModalPicture();
  });
}
closeUploadPictureBtn.addEventListener('click', closeModalUpload);
export { openUploadPictureModal, closeModalUpload };
