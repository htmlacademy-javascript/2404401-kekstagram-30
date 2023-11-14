const COMMENT_COUNT = 5;
const commentsContainer = document.querySelector('.social__comments');
let showCommentsCount = 5;

function filterDefault() {
  if (commentsContainer.querySelectorAll('.social__comment').length > COMMENT_COUNT) {
    for (let i = 5; i < commentsContainer.children.length; i++) {
      commentsContainer.children[i].classList.add('hidden');
    }
  }
}


function commentsHandler() {
  for (let i = showCommentsCount; i < showCommentsCount + COMMENT_COUNT; i++) {
    commentsContainer.children[i].classList.remove('hidden');
  }
}

export { filterDefault, commentsHandler };
