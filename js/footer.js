// Newsletter Form Handler
$(document).ready(function () {
  $(document).on("submit", "#newsletterForm", function (e) {
    e.preventDefault();
    
    const email = $(this).find("input[type='email']").val();
    
    if (email) {
      Swal.fire({
        icon: "success",
        title: "Subscribed! 🍕",
        text: `${email} added to our newsletter!`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        backdrop: "rgba(0,0,0,0.6)"
      });
      
      this.reset();
    }
  });
});
