// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navigation").style.left = "0%";
        document.getElementById("navigation").style.width = "100%";
        document.getElementById("navigation").style.top = "0%";
        document.getElementById("navigation").style.borderRadius = "0px";
    } else {
        document.getElementById("navigation").style.left = "5%";
        document.getElementById("navigation").style.width = "90%";
        document.getElementById("navigation").style.top = "1%";
        document.getElementById("navigation").style.borderRadius = "16px";

    }

    console.log(String(document.documentElement.scrollTop))
    let strength = .2;
    let x = (document.documentElement.scrollTop - 50) * strength;
    let y = (document.documentElement.scrollTop - 50) * strength;
    document.getElementById("parallax1_text").style.textShadow = String(x) + "px " + String(-y) + "px 0px azure, " + String(x * 2) + "px " + String(-y * 2) + "px 0px azure";
}