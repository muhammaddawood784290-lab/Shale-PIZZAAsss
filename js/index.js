// ===== HOME ANIMATION =====
function homeAnimation() {
  // Smooth fade-in without bottom jump
  gsap.from(".fade-in", {
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  });

  // CTA Button animation
  gsap.from(".cta-btn", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out"
  });

  // Welcome card animation
  gsap.from(".welcome-card", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
  });

  // Featured products animation
  gsap.from(".product-card", {
    opacity: 0,
    y: 60,
    duration: 0.7,
    stagger: 0.12,
    delay: 0.3,
    ease: "power2.out"
  });

  // Special cards animation
  gsap.from(".special-card", {
    opacity: 0,
    y: 60,
    duration: 0.7,
    stagger: 0.15,
    delay: 0.5,
    ease: "power2.out"
  });

  // Testimonials animation
  gsap.from(".testimonial", {
    opacity: 0,
    x: (i) => (i % 2 === 0 ? -60 : 60),
    duration: 0.7,
    stagger: 0.15,
    delay: 0.7,
    ease: "power2.out"
  });

  // Why us items animation
  gsap.from(".why-us-item", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.1,
    delay: 0.9,
    ease: "power2.out"
  });

  // CTA section animation
  gsap.from(".cta-section", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 1.1,
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
