document.addEventListener("DOMContentLoaded", () => {

  // Make sure barba AND gsap are loaded
  if (typeof barba === "undefined" || typeof gsap === "undefined") {
    console.warn("Barba or GSAP not loaded ❌");
    return;
  }

  // Page name mapping
  const pageNames = {
    "home": "Home",
    "about": "About",
    "special": "Special",
    "contact": "Contact"
  };

  // Show page transition overlay
  function showPageOverlay(namespace) {
    const overlay = document.querySelector(".page-transition-overlay");
    const pageName = document.querySelector(".page-name");
    
    if (overlay && pageName) {
      pageName.textContent = pageNames[namespace] || "Loading";
      overlay.classList.add("active");
    }
  }

  // Hide page transition overlay
  function hidePageOverlay() {
    const overlay = document.querySelector(".page-transition-overlay");
    if (overlay) {
      overlay.classList.remove("active");
    }
  }

 barba.init({
  transitions: [{
    async leave(data) {
      // Show overlay before fading out
      showPageOverlay(data.next.namespace);
      
      await gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.4
      });
    },

    async enter(data) {
      // Wait a bit before hiding overlay
      await gsap.delayedCall(0.6, () => {
        hidePageOverlay();
      });

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
