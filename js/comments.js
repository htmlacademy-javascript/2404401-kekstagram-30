import { createCommentsList, commentFilterDefault } from './comments-filter';

const bigPictureCommentsContainer = document.querySelector('.social__comments');
const templateComment = document.querySelector('#comment').content;
const btnLoader = document.querySelector('.comments-loader');

function getCommentsList(current, data) {
  bigPictureCommentsContainer.innerHTML = '';
  const commentsList = document.createDocumentFragment();

  data[current].comments.forEach((value) => {
    const comment = templateComment.cloneNode(true);
    comment.querySelector('.social__text').textContent = value.message;
    comment.querySelector('.social__picture').src = value.avatar;
    comment.querySelector('.social__picture').alt = value.name;
    commentsList.appendChild(comment);
    bigPictureCommentsContainer.appendChild(commentsList);
  });

  commentFilterDefault();
}
btnLoader.addEventListener('click', createCommentsList);

export { getCommentsList };
