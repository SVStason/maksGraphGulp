// Подключение свайпера
import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.trainers__content', {
  slidesPerView: 'auto',
  // slidesPerView: 4,
  spaceBetween: 40,
});
