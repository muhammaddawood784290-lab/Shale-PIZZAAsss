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

  // Cards animation
  gsap.from(".about-card", {
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.3,
    delay: 0.4,
    ease: "power3.out"
  });

}
