/* eslint-disable no-unused-vars */
import { getDataFromServer } from './api';
import { getBigPictures } from './big-picture';
import { openUploadPictureModal, closeModalUpload } from './form.js';
import { checksFormValidator } from './form-validation.js';
import { initFilter } from './image-fiters.js';
import { createPosts } from './get-picture.js';

getDataFromServer((createContent) => {
  createPosts(createContent);
  getBigPictures(createContent);
  initFilter(createContent);
});
openUploadPictureModal();
checksFormValidator(closeModalUpload);

//TODO: esc не работает в инпуте при загрузке изобр. Проверить Листенеры(накопление) 9.13
//TODO: ошибка ЮАЙ слайдера при отправке изображения (повторной отправки)
//TODO: При закрытии модального окна формы, изображение остается с темже зумом
//TODO: При убавлении зума в форме, невозможно увеличить заного картинку
//TODO: форма ограничение комментария 140
