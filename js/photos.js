import { getRandomInteger, shuffle } from './util.js';
import { PHOTOS_COUNT, DESCRIPTIONS } from './data.js';
import { createComments } from './comment.js';

const generatePhotos = () => {
  const ids = shuffle(Array.from({ length: PHOTOS_COUNT }, (_, i) => i + 1));
  const urlIndexes = shuffle(Array.from({ length: PHOTOS_COUNT }, (_, i) => i + 1));

  const generatedPhotos = [];

  for (let i = 0; i < PHOTOS_COUNT; i++) {
    generatedPhotos.push({
      id: ids[i],
      url: `photos/${urlIndexes[i]}.jpg`,
      description: DESCRIPTIONS[i],
      likes: getRandomInteger(15, 200),
      comments: createComments(),
    });
  }

  return generatedPhotos;
};

export { generatePhotos };
