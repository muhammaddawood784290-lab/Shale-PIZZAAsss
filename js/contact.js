function contactAnimation() {

  // Hero animation
  gsap.from(".contact-hero .hero-title", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power3.out"
  });

  gsap.from(".contact-hero .hero-subtitle, .contact-hero .hero-desc", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.1,
    ease: "power3.out"
  });

  // Quick contact methods
  gsap.from(".contact-method", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.3,
    ease: "power3.out"
  });

  // Form title
  gsap.from(".contact-form-title", {
    opacity: 0,
    x: -30,
    duration: 0.5,
    delay: 0.6,
    ease: "power2.out"
  });

  // Form box and inputs
  gsap.from(".contact-form-box", {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    delay: 0.7,
    ease: "back.out(1.5)"
  });

  gsap.from(".form-group", {
    opacity: 0,
    x: -20,
    duration: 0.4,
    stagger: 0.08,
    delay: 0.9,
    ease: "power2.out"
  });

  // Form button
  gsap.from(".contact-form-box button", {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    delay: 1.3,
    ease: "back.out(1.7)"
  });

  // Info boxes on right
  gsap.from(".info-box", {
    opacity: 0,
    x: 30,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.8,
    ease: "power2.out"
  });

  // Why choose section
  gsap.from(".section-title", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 1.5,
    ease: "power3.out"
  });

  gsap.from(".feature-card", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.1,
    delay: 1.7,
    ease: "power3.out"
  });

  // Final CTA
  gsap.from(".final-cta h2, .final-cta p", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    delay: 2.1,
    ease: "power3.out"
  });

  gsap.from(".final-cta .btn", {
    opacity: 0,
    scale: 0.8,
    duration: 0.4,
    stagger: 0.1,
    delay: 2.4,
    ease: "back.out(1.7)"
  });

}

// 👇 IMPORTANT — Event delegation (works even after Barba reload)
$(document).on("input", "#name", function () {
  let value = $(this).val();
  let cleanValue = value.replace(/[^a-zA-Z\s]/g, "");

  if (value !== cleanValue) {
    $(this).val(cleanValue);
  }
});


$(document).on("submit", "#contactForm", function (e) {
  e.preventDefault();

  const name = $("#name").val().trim();
  const email = $("#email").val().trim();
  const message = $("#message").val().trim();

  // Validation
  if (!name || !email || !message) {
    Swal.fire({
      icon: "warning",
      title: "Please Fill All Fields",
      text: "Name, Email, and Message are required!",
      backdrop: "rgba(0,0,0,0.6)"
    });
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please enter a valid email address!",
      backdrop: "rgba(0,0,0,0.6)"
    });
    return;
  }

  // Success message
  Swal.fire({
    icon: "success",
    title: "Message Sent! 🍕",
    text: "Thank you! We'll contact you shortly. Appreciate your interest!",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    backdrop: "rgba(0,0,0,0.6)"
  });

  this.reset();
});

// Smooth focus effects on form inputs
$(document).on("focus", ".input-custom", function() {
  gsap.to(this, {
    duration: 0.3,
    boxShadow: "0 0 20px rgba(230, 57, 70, 0.3)",
    ease: "power2.out"
  });
});

$(document).on("blur", ".input-custom", function() {
  gsap.to(this, {
    duration: 0.3,
    boxShadow: "0 0 0px rgba(230, 57, 70, 0)",
    ease: "power2.out"
  });
});
