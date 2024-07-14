const timeline = gsap.timeline();

const myname = document.querySelector('h1');

// Break the text into individual letters and create a function to animate each letter and add it in span
myname.innerHTML = myname.innerHTML.split('').map(letter => `<span>${letter}</span>`).join('');

// Create a timeline for each letter
myname.querySelectorAll('span').forEach(letter => {
    timeline.from(letter, {
        xPercent: -100,
        opacity: 0,
        delay:0.1,
        ease: 'bounce.out',
        yoyo: true,
        repeat: -1,
        stagger: -0.5
    });

});