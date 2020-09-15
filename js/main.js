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

  $("#result").on("show.bs.modal", function () {
    var videoSrc = $("#result iframe").attr("src");
    $("#result iframe").attr(
      "src",
      videoSrc +
        "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1"
    );
  });

  $("#result").on("hidden.bs.modal", function (e) {
    $("#result iframe").attr(
      "src",
      "https://www.youtube.com/embed/RZ4Z7PyLWb8"
    );
  });

  $("form").submit(function () {
    if ($(this).find("label").find("input[type=checkbox]").is(":checked")) {
      return true;
    } else {
      $(this).find("label").addClass("animate");
      setTimeout(function () {
        $("form label").removeClass("animate");
      }, 800);
      return false;
    }
  });

  $(".calculation__choice span").click(function () {
    $(".calculation__choice span").removeClass("active");
    $(this).addClass("active");
    var attr = $(this).attr("data-target");
    $(".calculation__tables").css("display", "none");
    $(".calculation__tables-" + attr).css("display", "flex");
  });

  $(".answer__list_main .item .item__title").click(function () {
    $(this).parent().toggleClass("active");
  });
});
