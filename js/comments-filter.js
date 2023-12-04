
const COMMENT_COUNT = 5;
const commentsContainer = document.querySelector('.social__comments');
const closeModalButton = document.querySelector('.big-picture__cancel');
const modalBigPicture = document.querySelector('.big-picture');
const count = document.querySelector('.social__comment-shown-count');
const btnLoader = document.querySelector('.comments-loader');
let showCount = 5;

function commentFilterDefault() {
  if (commentsContainer.querySelectorAll('.social__comment').length > COMMENT_COUNT) {
    for (let i = 5; i < commentsContainer.children.length; i++) {
      commentsContainer.children[i].classList.add('hidden');
    }
  } else {
    count.textContent = commentsContainer.querySelectorAll('.social__comment').length;
    btnLoader.classList.add('hidden');
  }
}
function closeModalBigPicture() {
  modalBigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

function createCommentsList() {
  for (let i = showCount; i < showCount + COMMENT_COUNT; i++) {
    commentsContainer.children[i].classList.remove('hidden');
    count.innerHTML = i + 1;
    if (i === commentsContainer.querySelectorAll('.social__comment').length - 1) {
      count.textContent = commentsContainer.querySelectorAll('.social__comment').length;
      btnLoader.classList.add('hidden');
      return count;
    }
  }
  showCount += COMMENT_COUNT;
  return showCount;
}
closeModalButton.addEventListener('click', () => {
  showCount = 5;
  count.innerHTML = COMMENT_COUNT;
  closeModalBigPicture();
});

export { createCommentsList, commentFilterDefault, closeModalBigPicture };
