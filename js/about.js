function aboutAnimation() {

  // Hero animation
  gsap.from(".about-title", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".about-subtitle", {
    opacity: 0,
    y: 50,
    delay: 0.2,
    duration: 0.8,
    ease: "power3.out"
  });

  // Stats animation with counter effect
  gsap.from(".stat-card", {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.15,
    delay: 0.4,
    ease: "power3.out"
  });

  // Count up animation for stat numbers
  $(".stat-number").each(function () {
    let finalValue = $(this).text();
    let isNumber = /^\d+/.test(finalValue);
    
    if (isNumber) {
      let numValue = parseInt(finalValue);
      gsap.to(
        { value: 0 },
        {
          value: numValue,
          duration: 2,
          delay: 0.6,
          onUpdate: function () {
            $(this.targets()[0]).text(Math.floor(this.targets()[0].value) + "+");
          }
        }
      );
    }
  });

  // Cards animation
  gsap.from(".about-card", {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out"
  });

  // Values animation
  gsap.from(".value-card", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.15,
    delay: 0.8,
    ease: "power3.out"
  });

  // Timeline animation
  gsap.from(".timeline-item", {
    opacity: 0,
    x: (i) => (i % 2 === 0 ? -80 : 80),
    duration: 0.7,
    stagger: 0.2,
    delay: 1,
    ease: "power3.out"
  });

}
