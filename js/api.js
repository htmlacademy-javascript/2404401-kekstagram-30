import { showErrorMessageForGet, showSuccessMessage } from './error-util.js';
const ACADEMY_LINK = 'https://30.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};


function getDataFromServer(createContent) {
  fetch(`${ACADEMY_LINK}${Route.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((pictures) => createContent(pictures))
    .catch(() => showErrorMessageForGet());
}
const sendDataForServer = (body) => fetch(
  `${ACADEMY_LINK}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    showSuccessMessage();
  });
export {getDataFromServer, sendDataForServer };
