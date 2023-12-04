const errorMessageGetTemplate = document.querySelector('#data-error').content;
const successMessageTemplate = document.querySelector('#success').content;
const errorMessagePostTemplate = document.querySelector('#error').content;
const ALERT_SHOW_TIME = 5000;

function showErrorMessageForGet() {
  const createErrorMessage = document.createDocumentFragment();
  const errorMessage = errorMessageGetTemplate.cloneNode(true);
  createErrorMessage.appendChild(errorMessage);
  document.body.appendChild(createErrorMessage);

  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, ALERT_SHOW_TIME);
}


function showSuccessMessage() {
  const createSuccessMessage = document.createDocumentFragment();
  const successMessage = successMessageTemplate.cloneNode(true);
  createSuccessMessage.appendChild(successMessage);
  document.body.appendChild(createSuccessMessage);

  function closeSuccessWindowHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.success').remove();
  }
  document.addEventListener('keydown', closeSuccessWindowHandler);
  document.querySelector('.success__button').addEventListener('click', closeSuccessWindowHandler);
  document.querySelector('.success').addEventListener('click', closeSuccessWindowHandler);
}
function showErrorMessageForPost() {

  const createErrorMessage = document.createDocumentFragment();
  const errorMessage = errorMessagePostTemplate.cloneNode(true);
  createErrorMessage.appendChild(errorMessage);
  document.body.appendChild(createErrorMessage);

  function closeErrorWindowHandler(event) {
    event.stopPropagation();
    document.querySelector('.error').remove();
  }
  document.addEventListener('keydown', closeErrorWindowHandler);
  document.querySelector('.error__button').addEventListener('click', closeErrorWindowHandler);
  document.querySelector('.error').addEventListener('click', closeErrorWindowHandler);
}

export { showSuccessMessage };
export { showErrorMessageForGet };
export { showErrorMessageForPost };
