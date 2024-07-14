// Get the d property of the path

var string = document.querySelector("#string");
var path = string.querySelector("path");
var initialPath = path.getAttribute("d");

string.addEventListener('mousemove', function(e) {
   path = `M 10 100 Q ${e.x} ${e.y} 990 100`;
    gsap.to('svg path', {
        attr: {
            d: path
        },
        duration: 0.5,
        ease: "power3.out"
    });

});

string.addEventListener('mouseleave', function() {
    
    gsap.to('svg path', {
        attr: {
            d: initialPath
        },
        duration: 1.5,
        ease:"elastic.out(1, 0.2)"
    });
});