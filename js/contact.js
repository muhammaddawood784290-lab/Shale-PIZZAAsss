function contactAnimation() {

  // Page animation
  gsap.from(".contact-form-box, .glass-card", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
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

  Swal.fire({
    icon: "success",
    title: "Message Sent 🍕",
    text: "We’ll contact you shortly!",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    backdrop: "rgba(0,0,0,0.6)"
  });

  this.reset();
});
