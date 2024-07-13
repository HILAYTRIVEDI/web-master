gsap.registerPlugin(ScrollTrigger);

gsap.to('#page2 h1', {
    transform: 'translateX(-150%)',
    scrollTrigger: {
        trigger:'#page2',
        scroller:'body',
        start:'top 0%',
        end:'top -100%',
        markers: true,
        scrub: 2,
        pin:true
    }
});