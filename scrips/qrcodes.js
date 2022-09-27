$(function () {
    $("#linkedin").on("mouseover", function () {
        $("#linked_qr").fadeIn();
    });
    $("#linkedin").on("mouseleave", function () {
        $("#linked_qr").fadeOut();
    });

    $("#gmail").on("mouseover", function () {
        $("#gmail_qr").fadeIn();
    });
    $("#gmail").on("mouseleave", function () {
        $("#gmail_qr").fadeOut();
    });

    $("#github").on("mouseover", function () {
        $("#github_qr").fadeIn();
    });
    $("#github").on("mouseleave", function () {
        $("#github_qr").fadeOut();
    });

})