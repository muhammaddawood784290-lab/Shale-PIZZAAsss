console.log("Contact page loaded ✅");


// Name field validation
$("#name").on("input", function () {
  let value = $(this).val();

  // sirf letters + space allow
  let cleanValue = value.replace(/[^a-zA-Z\s]/g, "");

  if (value !== cleanValue) {
    $(this).val(cleanValue);
  }
});


// Fake submit (project demo)
$("#contactForm").on("submit", function (e) {
  e.preventDefault();

  Swal.fire({
    icon: "success",
    title: "Message Sent 🍕",
    text: "We’ll contact you shortly!",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,

    // SweetAlert2 built-in animations
    showClass: {
      popup: "swal2-show"
    },
    hideClass: {
      popup: "swal2-hide"
    },

    backdrop: "rgba(0,0,0,0.6)"
  });

  this.reset();
});