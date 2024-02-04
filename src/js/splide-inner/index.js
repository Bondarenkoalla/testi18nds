import { sliderInit } from './splide';

document.addEventListener('DOMContentLoaded', async function () {

  const splideList2 = document.getElementById('splide-list-payments');
  const splideList = document.getElementById('splide-list-partners');

  if (splideList2) {
    sliderInit(splideList2);
  }

  if (splideList) {
    sliderInit(splideList);
  }

});
