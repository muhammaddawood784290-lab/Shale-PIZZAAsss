function specialAnimation() {

  // Hero animation
  gsap.from(".special-hero .hero-title", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power3.out"
  });

  gsap.from(".special-hero .hero-subtitle", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.1,
    ease: "power3.out"
  });

  gsap.from(".countdown-badge", {
    opacity: 0,
    scale: 0.5,
    duration: 0.6,
    delay: 0.2,
    ease: "back.out(1.7)"
  });

  // Filter buttons animation
  gsap.from(".filter-btn", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.05,
    delay: 0.3,
    ease: "power3.out"
  });

  // Featured deals section
  gsap.from(".section-title", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.4,
    ease: "power3.out"
  });

  // Deal cards animation
  gsap.from(".deal-card", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.12,
    delay: 0.6,
    ease: "power3.out"
  });

  // Horizontal deal cards
  gsap.from(".deal-card-horizontal", {
    opacity: 0,
    x: -50,
    duration: 0.7,
    stagger: 0.1,
    delay: 1.0,
    ease: "power2.out"
  });

  // Why special section
  gsap.from(".special-point", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.1,
    delay: 1.4,
    ease: "power3.out"
  });

  // CTA section
  gsap.from(".cta-title", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 1.7,
    ease: "power3.out"
  });

  gsap.from(".cta-buttons .btn", {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    stagger: 0.1,
    delay: 1.9,
    ease: "back.out(1.7)"
  });

}

// Filter functionality
$(document).on('click', '.filter-btn', function(e) {
  e.preventDefault();

  const filterValue = $(this).data('filter');

  // Update active button
  $('.filter-btn').removeClass('active');
  $(this).addClass('active');

  // Animate deals
  if (filterValue === 'all') {
    gsap.to(".deal-item", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      display: 'block'
    });
  } else {
    gsap.to(".deal-item", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power1.out",
      onComplete: function() {
        $('.deal-item').hide();
        $('.deal-item[data-filter="' + filterValue + '"]').show();
        
        gsap.to('.deal-item[data-filter="' + filterValue + '"]', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    });
  }
});

// Hover effect for deal cards
$(document).on('mouseenter', '.deal-card, .deal-card-horizontal', function() {
  gsap.to(this, {
    overwrite: 'auto',
    duration: 0.3,
    ease: "power2.out"
  });
});
