$(document).ready(function () {

  function revealOnScroll() {
    $(".reveal").each(function () {
      let windowHeight = $(window).height();
      let elementTop = $(this).offset().top;
      let scrollTop = $(window).scrollTop();

      if (elementTop < scrollTop + windowHeight - 100) {
        $(this).addClass("active");
      }
    });
  }

  $(window).on("scroll", revealOnScroll);
  revealOnScroll();

});
