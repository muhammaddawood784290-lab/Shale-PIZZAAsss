document.addEventListener("DOMContentLoaded", () => {
  if (typeof barba === "undefined" || typeof gsap === "undefined") {
    console.warn("Barba or GSAP not loaded");
    return;
  }

  const pageNames = {
    home: "Home",
    about: "About",
    menu: "Menu",
    special: "Special",
    contact: "Contact"
  };

  function showPageOverlay(namespace) {
    const overlay = document.querySelector(".page-transition-overlay");
    const pageName = document.querySelector(".page-name");

    if (overlay && pageName) {
      pageName.textContent = pageNames[namespace] || "Loading";
      overlay.classList.add("active");
    }
  }

  function hidePageOverlay() {
    const overlay = document.querySelector(".page-transition-overlay");
    if (overlay) overlay.classList.remove("active");
  }

  function runPageAnimation(namespace) {
    if (namespace === "about" && typeof window.aboutAnimation === "function") {
      window.aboutAnimation();
    }
    if (namespace === "menu" && typeof window.menuAnimation === "function") {
      window.menuAnimation();
    }
    if (namespace === "special" && typeof window.specialAnimation === "function") {
      window.specialAnimation();
    }
    if (namespace === "contact" && typeof window.contactAnimation === "function") {
      window.contactAnimation();
    }
    if (namespace === "home" && typeof window.homeAnimation === "function") {
      window.homeAnimation();
    }
  }

  barba.init({
    transitions: [
      {
        async leave(data) {
          if (data.next && data.next.namespace) {
            showPageOverlay(data.next.namespace);
          }
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

          await new Promise((resolve) => setTimeout(resolve, 600));
          hidePageOverlay();
          window.scrollTo(0, 0);
          runPageAnimation(data.next.namespace);
        }
      }
    ]
  });
});
