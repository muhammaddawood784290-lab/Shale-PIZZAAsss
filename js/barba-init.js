document.addEventListener("DOMContentLoaded", () => {

  // Make sure barba AND gsap are loaded
  if (typeof barba === "undefined" || typeof gsap === "undefined") {
    console.warn("Barba or GSAP not loaded ❌");
    return;
  }

  barba.init({
    transitions: [{
      name: "fade-transition",

      async leave(data) {
        await gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.4,
          ease: "power1.out"
        });
      },

      async enter(data) {
        await gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.4,
          ease: "power1.out"
        });
      }

    }]
  });

});
