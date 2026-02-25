/* ===============================
   MENU PAGE ANIMATION
================================ */

function menuAnimation() {
  if (typeof gsap === "undefined") return;

  gsap.from(".menu-hero .hero-title", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power3.out"
  });

  gsap.from(".menu-hero .hero-subtitle", {
    opacity: 0,
    y: 20,
    duration: 0.7,
    delay: 0.1,
    ease: "power3.out"
  });

  gsap.from(".filter-btn", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.07,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from(".menu-card", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.12,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from(".deal-card-horizontal", {
    opacity: 0,
    x: -50,
    duration: 0.8,
    delay: 1,
    ease: "power2.out"
  });

  gsap.from(".cta-title", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 1.2,
    ease: "power3.out"
  });

  gsap.from(".cta-buttons .btn", {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    stagger: 0.1,
    delay: 1.4,
    ease: "back.out(1.7)"
  });
}

function ensureMenuVisible() {
  $(".menu-item").show();
  $(".menu-card, .deal-card-horizontal, .filter-btn, .cta-title, .cta-buttons .btn, .menu-hero .hero-title, .menu-hero .hero-subtitle")
    .css({ opacity: 1, visibility: "visible" });
}

/* ===============================
   FILTER FUNCTIONALITY
================================ */

$(document).on("click", ".filter-btn", function (e) {
  e.preventDefault();

  const filterValue = $(this).data("filter");
  $(".filter-btn").removeClass("active");
  $(this).addClass("active");

  if (filterValue === "all") {
    $(".menu-item").show();
    return;
  }

  $(".menu-item").hide();
  $('.menu-item[data-filter="' + filterValue + '"]').show();
});

/* ===============================
   INIT
================================ */

$(document).ready(function () {
  ensureMenuVisible();
  $(".filter-btn").removeClass("active");
  $('.filter-btn[data-filter="all"]').addClass("active");

  const fallbackCandidates = [
    "../Assets/Gemini_Generated_Image_6z1o0w6z1o0w6z1o.png",
    "/Assets/Gemini_Generated_Image_6z1o0w6z1o0w6z1o.png",
    "Assets/Gemini_Generated_Image_6z1o0w6z1o0w6z1o.png",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='100%25' height='100%25' fill='%23212121'/%3E%3Ctext x='50%25' y='50%25' fill='%23ffffff' font-size='36' text-anchor='middle' dominant-baseline='middle'%3EMenu Image%3C/text%3E%3C/svg%3E"
  ];

  $(".menu-card img, .deal-card-horizontal img").on("error", function () {
    const nextFallback = fallbackCandidates.find((candidate) => !this.src.includes(candidate));
    if (nextFallback) {
      this.src = nextFallback;
    }
  });

  menuAnimation();
  setTimeout(ensureMenuVisible, 900);
});

$(window).on("load", function () {
  ensureMenuVisible();
});
