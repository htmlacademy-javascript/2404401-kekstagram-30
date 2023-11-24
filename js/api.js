import { errorMessagesForGet } from './error-util.js';
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
    // eslint-disable-next-line no-undef
    .catch(() => errorMessagesForGet());
}
const sendDataForServer = (body, success) => fetch(
  `${ACADEMY_LINK}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    success();
  });
export {getDataFromServer, sendDataForServer };
