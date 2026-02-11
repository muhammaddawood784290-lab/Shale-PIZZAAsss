barba.init({
  transitions: [{
    async leave(data) {
      await gsap.to(".page-transition", {
        duration: 0.5,
        scaleY: 1,
        ease: "power2.inOut"
      });
    },

    async enter(data) {
      await gsap.to(".page-transition", {
        duration: 0.5,
        scaleY: 0,
        ease: "power2.inOut"
      });
    }
  }]
});
