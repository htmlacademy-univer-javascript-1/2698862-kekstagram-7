import { createPhotos } from './data.js'; // Имя функции и файла могут отличаться в вашем проекте
import { renderThumbnails } from './thumbnails.js';

const photos = createPhotos();

renderThumbnails(photos);
