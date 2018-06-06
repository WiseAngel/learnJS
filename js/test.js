$(document).ready(function () {
  updateContainer();
  $(window).resize(function () {
    updateContainer();
  });
});

function updateContainer() {
  var $containerHeight = $(window).width();

  $(window).resize(function () {
    if ($(window).width() <= 568) {
      // less than
      $('.slider-arrow').click(function () {
        if ($(this).hasClass('show')) {
          $(".slider-arrow, .panel").animate({
            left: "+=300"
          }, 700, function () {
            // Animation complete.
          });
          $(".panel .summer-buble").animate({
            left: "-=270"
          }, 1700, function () {
            // Animation complete.
          });
          $(this).removeClass('show').addClass('hide');
        } else {
          $(".slider-arrow, .panel").animate({
            left: "-=300"
          }, 700, function () {
            // Animation complete.
          });
          $(".panel .summer-buble").animate({
            left: "+=270"
          }, 500, function () {
            // Animation complete.
          });
          $(this).removeClass('hide').addClass('show');
        }
      });
    }
  });

  $(window).resize(function () {
    if ($(window).width() > 568) {
      // more than 
      $('.slider-arrow').click(function () {
        if ($(this).hasClass('show')) {
          $(".slider-arrow, .panel").animate({
            left: "+=300"
          }, 700, function () {
            // Animation complete.
          });
          $(".panel .summer-buble").animate({
            left: "-=307"
          }, 1700, function () {
            // Animation complete.
          });
          $(this).removeClass('show').addClass('hide');
        } else {
          $(".slider-arrow, .panel").animate({
            left: "-=300"
          }, 700, function () {
            // Animation complete.
          });
          $(".panel .summer-buble").animate({
            left: "+=307"
          }, 1700, function () {
            // Animation complete.
          });
          $(this).removeClass('hide').addClass('show');
        }
      });
    }
  });
}