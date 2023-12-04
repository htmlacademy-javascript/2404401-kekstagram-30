/* eslint-disable no-unused-vars */
import { getDataFromServer } from './api';
import { getBigPictures } from './big-picture';
import { openUploadPictureModal, closeModalPictureUploadHandler } from './form.js';
import { checksFormValidator } from './form-validation.js';
import { initFilter } from './image-filters.js';
import { createPosts } from './get-picture.js';

getDataFromServer((createContent) => {
  createPosts(createContent);
  getBigPictures(createContent);
  initFilter(createContent);
});
openUploadPictureModal();
checksFormValidator(closeModalPictureUploadHandler);
