import { arrayObjectPosts } from './data';
import { filterDefault, commentsHandler } from './comments-filter';

const bigPictureCommentsContainer = document.querySelector('.social__comments');
const bigPictureCommentItem = bigPictureCommentsContainer.querySelector('.social__comment');
const btnLoader = document.querySelector('.comments-loader');


function getCommentsList(current) {
  bigPictureCommentsContainer.innerHTML = '';
  const createCommentsList = document.createDocumentFragment();

  arrayObjectPosts[current].comments.forEach((value) => {
    const commentIteration = bigPictureCommentItem.cloneNode(true);
    commentIteration.querySelector('.social__text').textContent = value.message;
    commentIteration.querySelector('.social__picture').src = value.avatar;
    commentIteration.querySelector('.social__picture').alt = value.name;
    createCommentsList.appendChild(commentIteration);
  });
  bigPictureCommentsContainer.appendChild(createCommentsList);

  filterDefault();
}

btnLoader.addEventListener('click', commentsHandler);
export { getCommentsList };
