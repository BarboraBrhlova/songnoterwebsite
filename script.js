$(document).ready(function () {
    $("#icon").click(function () {
        $("ul").toggleClass("show");
        $("i").toggleClass("fa-xmark", "fa-bars");
    });
});
