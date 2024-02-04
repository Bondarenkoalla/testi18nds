import Splide from "@splidejs/splide";

export const sliderInit = (node) => {
  if (node !== null) {
    new Splide(node,  {
      type: 'slide',
      rewind: true,
      autoplay: true,
      perPage: 5,
      arrows: false,
      pagination: false,
      pauseOnFocus: true,
      updateOnMove: true,
      drag: true,
      swipe: true,
      gap: 72,
      focus: "center",
      breakpoints: {
        1120: {
          perPage: 5,
        },
        992: {
          perPage: 3,
        },
      },
    }).mount();
  }
};

