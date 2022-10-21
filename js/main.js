$(function (){

  $(".menu a, .footer__logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

  $('.menu__burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  var mixer = mixitup('.portfolio__content');


// Initialise Carousel
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  infinite: false,
  Navigation: false,
});

// Initialise Fancybox
Fancybox.bind('[data-fancybox="portfolio"]', {
  Carousel: {
    on: {
      change: (carousel, to) => {
        // Sync Carousel slide
        // ===
        const $el = Fancybox.getInstance()
          .getSlide()
          .$trigger.closest(".carousel__slide");

        const slide = mainCarousel.slides.find((slide) => {
          return slide.$el === $el;
        });

        mainCarousel.slideTo(slide.index, {
          friction: 0,
        });
      },
    },
  },
});
