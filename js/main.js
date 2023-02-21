const wrapper = document.querySelector(".wrapper");
const menu_mobile = document.querySelector(".menu-mobile");
const menu_list = document.querySelector(".menu-list");

menu_mobile.onclick = function () {
  wrapper.classList.toggle("open");
  menu_mobile.classList.toggle("open");
  menu_list.classList.toggle("open");
};

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],
  items: 1,
});

$(".gallery-image .gallery-venobox").venobox();

// menu-mini-slider
$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    loop: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
    loop: true,
    focusOnSelect: true,
    prevArrow: '<i class="icofont-thin-up"></i>',
    nextArrow: '<i class="icofont-thin-down"></i>',
    asNavFor: ".slider-for",
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          arrows: false,
          vertical: false,
        },
      },
      {
        breakpoint: 426,
        settings: {
          arrows: false,
          vertical: false,
          slidesToShow: 2,
        },
      },
    ],
  });
});
