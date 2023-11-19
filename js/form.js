const openUploadPictureBtn = document.querySelector('.img-upload__input');
const overlayPicture = document.querySelector('.img-upload__overlay');
const closeUploadPictureBtn = document.querySelector('.img-upload__cancel');

function closeModalUpload() {
  overlayPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

function openModalUpload() {
  overlayPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
}

function openUploadPicture() {
  openUploadPictureBtn.addEventListener('click', openModalUpload);
}

closeUploadPictureBtn.addEventListener('click', closeModalUpload);

export { openUploadPicture };
