/* eslint-disable no-unused-vars */
import { getDataFromServer } from './api';
import { getPictures } from './big-picture';
import { openUploadPicture, closeModalUpload } from './form.js';
import { checksFormValidation } from './form-validation.js';


getDataFromServer(getPictures);
openUploadPicture();
checksFormValidation(closeModalUpload);

//TODO: esc не работает в инпуте при загрузке изобр. Проверить Листенеры(накопление) 9.13
