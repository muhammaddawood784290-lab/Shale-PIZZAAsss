document.addEventListener("DOMContentLoaded", () => {

  // Make sure barba AND gsap are loaded
  if (typeof barba === "undefined" || typeof gsap === "undefined") {
    console.warn("Barba or GSAP not loaded ❌");
    return;
  }

 barba.init({
  transitions: [{
    async leave(data) {
      await gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.4
      });
    },

    async enter(data) {
      gsap.from(data.next.container, {
        opacity: 0,
        duration: 0.4
      });

      // 👇 Ye line important hai
      window.scrollTo(0, 0);

      // About page animation call
      if (data.next.namespace === "about") {
        aboutAnimation();
      }

      // Special page animation call
      if (data.next.namespace === "special") {
        specialAnimation();
      }

      // Contact page animation call
      if (data.next.namespace === "contact") {
        contactAnimation();
      }

      // Home page animation call
      if (data.next.namespace === "home") {
        homeAnimation();
      }
    }
  }]
}
  )
    }
  )
