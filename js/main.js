/* eslint-disable no-unused-vars */
import { placePictures } from './get-picture';
import { miniaturePictures } from './big-picture';
import { openUploadPicture } from './form.js';
import { checksFormValidation } from './form-validation.js';

openUploadPicture();
checksFormValidation();
openUploadPicture();


//TODO: esc не работает в инпуте при загрузке изобр. Проверить Листенеры(накопление) 9.13, scale уходит больше 100%
