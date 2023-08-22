$(document).ready(function () {
        $(".a").click(function () {
        $(".c").slideToggle();
    });

    $(".a").click(function () {
        $("header").hide();
        $("#slider").hide();
        $("section").hide();
        $("footer").hide();
    });

    $(".d").click(function () {
        $(".c").hide();
    });

    $(".d").click(function () {
        $("header").show();
        $("#slider").show();
        $("section").show();
        $("footer").show();
    });
});
