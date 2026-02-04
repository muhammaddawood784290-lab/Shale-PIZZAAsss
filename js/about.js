// Smooth scroll reveal (simple)
$(window).on("scroll", function () {
  $(".glass-card").each(function () {
    let cardTop = $(this).offset().top;
    let windowBottom = $(window).scrollTop() + $(window).height();

    if (windowBottom > cardTop + 100) {
      $(this).addClass("fade-in");
    }
  });
});

// Debug
console.log("About page JS loaded ✅");
