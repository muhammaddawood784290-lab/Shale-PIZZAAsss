// ===== HOME ANIMATION =====
function homeAnimation() {
  // Smooth fade-in without bottom jump
  gsap.from(".fade-in", {
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  });

  // Smooth card animations
  gsap.from(".glass-card", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.15,
    delay: 0.3,
    ease: "power2.out"
  });

  revealOnScroll();
  $(window).off("scroll.homeReveal").on("scroll.homeReveal", revealOnScroll);
}


// ===== SCROLL REVEAL =====
function revealOnScroll() {
  $(".reveal").each(function () {
    let windowHeight = $(window).height();
    let elementTop = $(this).offset().top;
    let scrollTop = $(window).scrollTop();

    if (elementTop < scrollTop + windowHeight - 100) {
      $(this).addClass("active");
    }
  });
};
