const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const shuffle = (array) => {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};


const PHOTOS_COUNT = 25;

const DESCRIPTIONS = [
  'Красивый закат на море',
  'Моя любимая кошка',
  'Прогулка по городу',
  'Вкусный завтрак',
  'Горный пейзаж',
  'Весёлая вечеринка',
  'Уютный вечер дома',
  'Путешествие в горы',
  'Цветы в саду',
  'Смешной момент с друзьями',
  'Ночной город',
  'Летний пикник',
  'Мой новый проект',
  'Отдых на природе',
  'Встреча с друзьями',
  'Красивая архитектура',
  'Любимая книга',
  'Спортивные достижения',
  'Домашний питомец',
  'Закат в парке',
  'Зимняя прогулка',
  'Морской бриз',
  'Осенний лес',
  'Утренний кофе',
  'Семейный отдых',
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENT_NAMES = [
  'Артём',
  'Ирина',
  'Дмитрий',
  'Ольга',
  'Сергей',
  'Анна',
  'Максим',
  'Екатерина',
  'Алексей',
  'Мария',
  'Павел',
  'Наталья',
];

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

const generatePhotos = () => {
  const ids = shuffle(Array.from({ length: PHOTOS_COUNT }, (_, i) => i + 1));
  const urlIndexes = shuffle(Array.from({ length: PHOTOS_COUNT }, (_, i) => i + 1));

  const generatedPhoto = [];

  for (let i = 0; i < PHOTOS_COUNT; i++) {
    generatedPhoto.push({
      id: ids[i],
      url: `photos/${urlIndexes[i]}.jpg`,
      description: DESCRIPTIONS[i],
      likes: getRandomInteger(15, 200),
      comments: createComments(),
    });
  }

  return generatedPhoto;
};

const photos = generatePhotos();
export { photos };
