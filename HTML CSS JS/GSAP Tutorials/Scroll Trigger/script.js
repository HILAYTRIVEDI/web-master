gsap.registerPlugin(ScrollTrigger);


gsap.from('#page1 .box', {
    scale: 0,
    duration: 1,
    rotate: 360,
});

gsap.from('#page2 .box', {
    scale: 0,
    delay: 1,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: '#page2 .box',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onEnter: function() {
            gsap.from('#page2 .box', {
                scale: 1,
                duration: 1,
                rotate: 0,
            });
        },
        onLeave: function() {
            gsap.from('#page2 .box', {
                scale: 0,
                duration: 1,
                rotate: 360,
            });
        }
    }
});

gsap.from('#page3 .box', {
    scale: 0,
    duration: 1,
    rotate: 360,
});