$(document).ready(function () {
  "use strict";

  $(".header__nav_btn").click(function () {
    $(this).toggleClass("active");
    $(".header__mobile_nav").toggleClass("active");

    if ($(".header__mobile_nav").hasClass("active")) {
      $(".header__fake-modal").css("display", "block");
    } else {
      $(".header__fake-modal").css("display", "none");
    }
  });

  $(".header__fake-modal").click(function () {
    $(this).css("display", "none");
    $(".header__mobile_nav").removeClass("active");
    $(".header__nav_btn").removeClass("active");
  });

  $(".space__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $(".space__arrows-prev"),
    nextArrow: $(".space__arrows-next"),
    customPaging: function (slider, i) {
      return '<button class="tab"></button>';
    },

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".partner__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: $(".text__header_prev"),
    nextArrow: $(".text__header_next"),
    customPaging: function (slider, i) {
      return '<button class="tab"></button>';
    },
  });

  $(".slider .slider__item").each(function () {
    var slider = $(this);
    slider.slick({
      dots: false,
      accessibility: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(".professor__slider_prev"),
      nextArrow: $(".professor__slider_next"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    var sLightbox = $(this);
    sLightbox.slickLightbox({
      src: "src",
      itemSelector: ".image img",
      caption: function (element, info) {
        return $(element).attr("title");
      },
    });
  });
});
