
// Create a timeline to run the animation in sequence
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        markers: true,
        delay: 0.5,
    },
})

tl.to("#fanta", {
    top: "110%",
    left: "5%",
},'orange')

tl.to("#orange-cut", {
    top: "160%",
    left: "25%",
    scale: 1.1,
    rotateZ:180,
},'orange')

tl.to("#orange", {
    top: "160%",
    right: "-10%",
    scale: 0.8,
},'orange')