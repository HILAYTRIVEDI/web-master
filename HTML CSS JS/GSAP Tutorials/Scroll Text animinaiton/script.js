gsap.registerPlugin(ScrollTrigger);

window.addEventListener("wheel", function(e) {
    // If we are scrolling up
    if (e.deltaY < 0) {
        gsap.to(".marque", {
            transform: 'translateX(-200%)',
            duration: 4,
            repeat: -1,
            ease: "none"
        });
        gsap.to(".marque img", {
            rotate: 180,
        });
    } else {
        gsap.to(".marque", {
            transform: 'translateX(100%)',
            duration: 4,
            repeat: -1,
            ease: "none"
        });
        gsap.to(".marque img", {
            rotate: 360,
        });
    }
});

