let swiper1, swiper2;
widthChanges();






window.matchMedia('(min-width: 640px)').addEventListener('change', (e) => {
  widthChanges()
})
window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
  widthChanges()
})
window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
  widthChanges()
})
window.matchMedia('(min-width: 1280px)').addEventListener('change', (e) => {
  widthChanges()
})
window.matchMedia('(min-width: 1280px)').addEventListener('change', (e) => {
  widthChanges()
})
window.matchMedia('(min-width: 1450px)').addEventListener('change', (e) => {
  widthChanges()
})


function widthChanges() {
  const width = window.innerWidth || document.documentElement.clientWidth ||
  document.body.clientWidth;
  // 'sm': {'min': '640px', 'max': '767px'},
  // 'md': {'min': '768px', 'max': '1023px'},
  // 'lg': {'min': '1024px', 'max': '1279px'},
  // 'xl': {'min': '1280px'},
  switch (true) {
    case (width < 639):
      swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 2,
        spaceBetween: 1,
        loop: true,
        cssMode: true,
        // speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 1,
        loop: true,
        cssMode: true,
        // speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });
      break;

    case (width < 767):
      swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 1,
        loop: true,
        cssMode: true,
        // speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 1,
        loop: true,
        cssMode: true,
        // speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });
      break;

    case (width < 1023):
      swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 4,
        spaceBetween: 1,
        loop: true,
        cssMode: true,
        // speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        spaceBetween: 1,
        loop: true,
        cssMode: true,
        // speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });
      break;

    case (width < 1279):
      swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 5,
        spaceBetween: 1,
        loop: true,
        cssMode: true,
        // speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 5,
        spaceBetween: 1,
        loop: true,
        cssMode: true,
        // speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });
      break;

    case (width < 1450):
      swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 6,
        spaceBetween: 1,
        loop: true,
        cssMode: true,
        // speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 6,
        spaceBetween: 1,
        loop: true,
        cssMode: true,
        // speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });
      break;
  }
}