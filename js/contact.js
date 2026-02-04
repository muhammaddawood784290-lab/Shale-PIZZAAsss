// Fake submit (project demo ke liye)
$("#contactForm").on("submit", function (e) {
  e.preventDefault();
  $("#successMsg").removeClass("d-none");
  this.reset();
});

console.log("Contact page loaded ✅");
