var elem = document.querySelectorAll(".page5 .elem")

elem.forEach(function(e) {
  var img = e.querySelector('img')
  // img.style.opacity = 0 // hide the image initially
  // img.style.position = 'absolute' // add this to make the image absolute positioned

  e.addEventListener("mouseenter", function() {
    img.style.opacity = 1
  })

  e.addEventListener("mouseleave", function() {
    img.style.opacity = 0
  

  })




  e.addEventListener("mousemove", function(dets) {
    var rect = e.getBoundingClientRect() // get the bounding rectangle of the element
    img.style.left = (dets.clientX - rect.left) + "px" // adjust the left position
    img.style.top = (dets.clientY - rect.top) + "px" // adjust the top position
  })
})







var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
var img = document.querySelector("video")

var mouseX = 0;
var mouseY = 0;

// Function to update the cursor position
function updateCursorPosition() {
    gsap.to(cursor, {
        x: mouseX + window.scrollX,
        y: mouseY + window.scrollY,
        duration: 0.9, // Duration for smooth effect
        ease: "back.out(3)",
    });
}

// Handle mousemove event
main.addEventListener("mousemove", function(dets) {
    mouseX = dets.clientX;
    mouseY = dets.clientY;
    updateCursorPosition();
});

// Handle scroll event
window.addEventListener("scroll", function() {
    updateCursorPosition();
});

