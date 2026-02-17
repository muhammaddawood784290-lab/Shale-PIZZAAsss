barba.init({
    transitions: [
        {
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0,
                    y: -50,
                    duration: 0.5
                });
            },
            enter(data) {
                return gsap.from(data.next.container, {
                    opacity: 0,
                    y: 50,
                    duration: 0.5
                });
            }
        }
    ]
});
