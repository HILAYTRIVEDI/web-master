// Manual Approch

// gsap.from(
//     "header",
//     {
//         duration: 1,
//         y: "-100%",
//         opacity: 0,
//         ease: "bounce.out"
//     }
// )

// gsap.from(
//     ".link",
//     {
//         duration: 1,
//         opacity: 0,
//         delay: 0.5,
//         ease: "bounce.out",
//         stagger: 0.5
//     }
// )

// gsap.from(
//     ".content",
//     {
//         duration: 1,
//         x: "-100%",
//         opacity: 0,
//         ease: "bounce.out"
//     }
// )

// gsap.from(
//     ".right-sidebar",
//     {
//         duration: 1,
//         x: "-100%",
//         opacity: 0,
//         ease: "bounce.out"
//     }
// )

// gsap.from(
//     ".left-sidebar",
//     {
//         duration: 1,
//         x: "100%",
//         opacity: 0,
//         ease: "bounce.out"
//     }
// )

// gsap.from(
//     ".reverse",
//     {
//         duration: 1,
//         x: "-100%",
//         opacity: 0,
//         ease: "bounce.out"
//     }
// )

// Timeline Approach
const timeline = gsap.timeline(
    {
        defaults: {
            duration: 1,
            ease: "bounce.out"
        }
    }
)

timeline.from(
    "header",
    {
        y: "-100%",
        opacity: 0,
    }
)

timeline.from(
    ".link",
    {
        opacity: 0,
        delay: 0.5,
        stagger: 0.5
    }
)

timeline.from(
    ".content",
    {
        x: "-100%",
        opacity: 0,
    }
)

timeline.from(
    ".right-sidebar",
    {
        x: "-100%",
        opacity: 0,
    }
)

timeline.from(
    ".left-sidebar",
    {
        x: "100%",
        opacity: 0,
    }
)

timeline.from(
    ".reverse",
    {
        x: "-100%",
        opacity: 0,
    }
)

const button = document.querySelector(".reverse")

button.addEventListener("click", function () {
    timeline.reverse()
})