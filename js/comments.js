import { getRandomInteger, getRandomArrayElement } from './util.js';
import { COMMENT_MESSAGES, COMMENT_NAMES } from './data.js';

const usedCommentIds = new Set();

const getUniqueCommentId = () => {
  let id;
  do {
    id = getRandomInteger(1, 10000);
  } while (usedCommentIds.has(id));
  usedCommentIds.add(id);
  return id;
};

const getCommentMessage = () => {
  const count = getRandomInteger(1, 2);
  const selected = [];
  const available = COMMENT_MESSAGES.slice();

  for (let i = 0; i < count; i++) {
    const index = getRandomInteger(0, available.length - 1);
    selected.push(available[index]);
    available.splice(index, 1);
  }

  return selected.join(' ');
};


const createComment = () => ({
  id: getUniqueCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getCommentMessage(),
  name: getRandomArrayElement(COMMENT_NAMES),
});


const createComments = () => {
  const count = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(createComment());
  }
  return comments;
};

export {createComments};
