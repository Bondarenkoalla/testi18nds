import Splide from "@splidejs/splide";

export const sliderInit = (node) => {
    if (node !== null) {
        new Splide('.splide', {
            type: 'slide',
            rewind: true,
            autoplay: false,
            perPage: 3,
            arrows: false,
            pagination: false,
            pauseOnFocus: true,
            updateOnMove: true,
            drag: true,
            swipe: true,
            gap: 72,
            focus: "left",
            breakpoints: {
                1120: {
                    perPage: 2,
                },
                992: {
                    perPage: 1,
                },
            },
        }).mount();
    }
};




