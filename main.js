// Java script, for the first div to create the parallax affect. 

const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    //console.log('Offset: ' + offset);
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})