import { arrayObjectPosts } from './data';
import { getComment, commentFilterDefault } from './comments-filter';

const bigPictureCommentsContainer = document.querySelector('.social__comments');
const templateComment = document.querySelector('#comment').content;
const btnLoader = document.querySelector('.comments-loader');

function getCommentsList(current) {
  bigPictureCommentsContainer.innerHTML = '';
  const createCommentsList = document.createDocumentFragment();
  let commentArray = [];

  arrayObjectPosts.forEach(({id, comments}) => {
    // eslint-disable-next-line eqeqeq
    if (id == current) {
      commentArray = comments;
    }
  });

  commentArray.forEach((value) => {
    const comment = templateComment.cloneNode(true);
    comment.querySelector('.social__text').textContent = value.message;
    comment.querySelector('.social__picture').src = value.avatar;
    comment.querySelector('.social__picture').alt = value.name;
    createCommentsList.appendChild(comment);
    bigPictureCommentsContainer.appendChild(createCommentsList);
  });

  commentFilterDefault();
}
btnLoader.addEventListener('click', getComment);

export { getCommentsList };
