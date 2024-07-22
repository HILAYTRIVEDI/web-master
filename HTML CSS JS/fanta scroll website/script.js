
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


const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        markers: true,
    },
})

tl2.from("#lemon",{
    rotate: "-90%",
    left: "100%",
    top: "-110%",
},'ca')

tl2.to("#fanta",{
    top:"200%",
    left:"30%",
},'ca')

tl2.to("#orange-cut",{
    top:"200%",
    left:"42%",
    scale:1.5,
    rotateZ:180,
},'ca')