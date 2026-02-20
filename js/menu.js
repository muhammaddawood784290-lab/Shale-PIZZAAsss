/* ===============================
   MENU PAGE ANIMATION
================================ */

function menuAnimation() {

  // Hero Animation
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

  // Hero content ready position before animation
gsap.set(".menu-hero .hero-title, .menu-hero .hero-subtitle", {opacity:0, y:30});
menuAnimation(); // triggers all animations

  // Filter Buttons
  gsap.from(".filter-btn", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.07,
    delay: 0.3,
    ease: "power3.out"
  });

  // Menu Cards
  gsap.from(".menu-card", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.12,
    delay: 0.3,
    ease: "power3.out"
  });

  // Horizontal Card
  gsap.from(".menu-card-horizontal", {
    opacity: 0,
    x: -50,
    duration: 0.8,
    delay: 1,
    ease: "power2.out"
  });

  // CTA Section
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


/* ===============================
   FILTER FUNCTIONALITY
================================ */

$(document).on('click', '.filter-btn', function(e) {
  e.preventDefault();

  const filterValue = $(this).data('filter');

  $('.filter-btn').removeClass('active');
  $(this).addClass('active');

  if (filterValue === 'all') {
    $('.menu-item').show();
  } else {
    $('.menu-item').hide();
    $('.menu-item[data-filter="' + filterValue + '"]').show();
  }

});

/* ===============================
   HOVER EFFECT
================================ */

$(document).on('mouseenter', '.menu-card, .menu-card-horizontal', function() {
  gsap.to(this, {
    duration: 0.3,
    ease: "power2.out"
  });
});


/* ===============================
   INIT ON LOAD
================================ */

$(document).ready(function() {
  menuAnimation();
});

/* ===============================
   SPECIAL PAGE ANIMATION
================================ */ 
function specialAnimation() {
    // Hero Animation
    gsap.from(".special-hero .hero-title", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power3.out"
  });
}

gsap.from(".special-hero .hero-subtitle", {
    opacity: 0,
    y: 20,
    duration: 0.7,
    delay: 0.1,
    ease: "power3.out"
  });

    // Special Cards    
    gsap.from(".special-card", {
    opacity: 0,
     y: 50,
     duration: 0.7, 
        stagger: 0.12,
        delay: 0.3,
    ease: "power3.out"
  });

    // Horizontal Card
    gsap.from(".special-card-horizontal", {
    opacity: 0,
    x: -50,
    duration: 0.8,
    delay: 1,
    ease: "power2.out"
  });

    // Countdown Badge
    gsap.from(".countdown-badge", {
    opacity: 0,
    scale: 0.5,
    duration: 0.6,
    delay: 0.2,
    ease: "back.out(1.7)"
  });

    // Filter Buttons
    gsap.from(".filter-btn", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.05,
    delay: 0.3,
    ease: "power3.out"
  });

    // Featured Deals Section
    gsap.from(".section-title", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.4,
    ease: "power3.out"
  });

    // Deal Cards
    gsap.from(".deal-card", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.5,
    ease: "power3.out"
  });

    // Horizontal Deal Cards
    gsap.from(".deal-card-horizontal", {
    opacity: 0,
    x: -50,
    duration: 0.7,
    stagger: 0.1,
    delay: 1.0,
    ease: "power2.out"
  });

/* ===============================
   BARBA.JS PAGE TRANSITION
================================ */
$(document).ready(function() {
  menuAnimation();
});

barba.init({
  transitions: [
    {
      name: 'fade',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.5
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.5
        });
      }
    }
  ]
});

