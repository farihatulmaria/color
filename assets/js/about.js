(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".menu-trigger").on("click", function () {
      $(".offcanvas-menu").addClass("show-menu");
      $(".offcanvas-shade").addClass("shade-active");
    });
    $(".menu-close").on("click", function () {
      $(".offcanvas-menu").removeClass("show-menu");
      $(".offcanvas-shade").removeClass("shade-active");
    });
    $(".sliders").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    $(".comment-slider").slick({
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".scrollToTop").fadeIn();
      } else {
        $(".scrollToTop").fadeOut();
      }
    });

    $(".scrollToTop").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });
})(jQuery);
