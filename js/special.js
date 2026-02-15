function specialAnimation() {

  gsap.from(".glass-card", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });

}
