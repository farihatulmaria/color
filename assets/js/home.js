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
    $(".main-menu").on("scroll", function () {
      $(".main-meun").addClass("sticky");
    });
    $(".sliders").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    $(".project-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
    });
    $(".comment-slider").slick({
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
    });
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scroll-to-top").fadeIn("slow");
    } else {
      $("#scroll-to-top").fadeOut("slow");
    }

    if ($(this).scrollTop() > $(document).height() - screen.height) {
      $("#scroll-to-bottom").fadeOut("slow");
    } else {
      $("#scroll-to-bottom").fadeIn("slow");
    }
  });

  $(".scroll-to-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
  $(".scroll-to-bottom").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(document).height(),
      },
      600
    );
    return false;
  });
})(jQuery);
