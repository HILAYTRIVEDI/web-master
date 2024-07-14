const timeline = gsap.timeline();

const nav = document.querySelector('#nav');
const full = document.querySelector('#full');

// Get the menu icon
const menuIcon = document.querySelector('#nav i');

// Get the close icon
const closeIcon = document.querySelector('#full i');

// When the menu icon is clicked
menuIcon.addEventListener('click', () => {
    timeline.play();
})

// When the close icon is clicked
closeIcon.addEventListener('click', () => {
    timeline.reverse();
})

timeline.to(full , {
    duration: 1,
    right: '0%',
    ease: 'power2.inOut',
    stagger: 0.1,
})

timeline.pause();