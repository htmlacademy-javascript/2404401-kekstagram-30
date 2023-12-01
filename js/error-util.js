import { onModalEscapeKeydown} from './util';

const errorMessageGetTemplate = document.querySelector('#data-error').content;
const successMessageTemplate = document.querySelector('#success').content;
const errorMessagePostTemplate = document.querySelector('#error').content;

const ALERT_SHOW_TIME = 5000;

const errorMessagesForGet = () => {
  const createErrorMessage = document.createDocumentFragment();
  const errorMessage = errorMessageGetTemplate.cloneNode(true);
  createErrorMessage.appendChild(errorMessage);
  document.body.appendChild(createErrorMessage);

  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, ALERT_SHOW_TIME);
};


function successMessages() {
  const createSuccessMessage = document.createDocumentFragment();
  const successMessage = successMessageTemplate.cloneNode(true);
  createSuccessMessage.appendChild(successMessage);
  document.body.appendChild(createSuccessMessage);

  function closeSuccessWindow() {
    document.querySelector('.success').remove();
  }
  document.addEventListener('keydown', onModalEscapeKeydown(closeSuccessWindow));
  document.querySelector('.success__button').addEventListener('click', (closeSuccessWindow));
  document.querySelector('.success').addEventListener('click', (closeSuccessWindow));
}
function errorMessageForPost() {

  const createErrorMessage = document.createDocumentFragment();
  const errorMessage = errorMessagePostTemplate.cloneNode(true);
  createErrorMessage.appendChild(errorMessage);
  document.body.appendChild(createErrorMessage);

  function closeErrorWindow() {
    document.querySelector('.error').remove();
  }
  document.addEventListener('keydown', onModalEscapeKeydown(closeErrorWindow));
  document.querySelector('.error__button').addEventListener('click', (closeErrorWindow));
  document.querySelector('.error').addEventListener('click', (closeErrorWindow));
}

export { successMessages };
export { errorMessagesForGet };
export { errorMessageForPost };
