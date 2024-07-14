const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");

main.addEventListener("mousemove", (e) => {
   gsap.to(cursor, {
       x: e.clientX,
       y: e.clientY,
       ease:"back.out(1.5)",
   });
});