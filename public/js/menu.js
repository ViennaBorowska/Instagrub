$(document).ready(function () {
  $(".hamburger-container").click(function (event) {
    event.preventDefault();

    $(".menu").toggleClass("open");
  });

  $(".nav-links1").click(function (event) {
    $(".menu").removeClass("open");
  });

  $(".nav-links2").click(function (event) {
    $(".menu").removeClass("open");
  });

  $(".nav-links3").click(function (event) {
    $(".menu").removeClass("open");
  });

  $(".nav-links4").click(function (event) {
    $(".menu").removeClass("open");
  });
});
