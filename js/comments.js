import { arrayObjectPosts } from './data';

const bigPictureCommentsContainer = document.querySelector('.social__comments');
const bigPictureCommentItem = bigPictureCommentsContainer.querySelector('.social__comment');


function getCommentsList(current) {
  bigPictureCommentsContainer.innerHTML = '';
  const createCommentsList = document.createDocumentFragment();

  arrayObjectPosts[current].comments.forEach((value) => {
    const commentIteration = bigPictureCommentItem.cloneNode(true);
    commentIteration.querySelector('.social__text').textContent = value.message;
    commentIteration.querySelector('.social__picture').textContent = value.avatar;
    commentIteration.querySelector('.social__picture').alt = value.name;
    createCommentsList.appendChild(commentIteration);
  });

  bigPictureCommentsContainer.appendChild(createCommentsList);
}

export { getCommentsList };
