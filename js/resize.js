$(document).ready(function () {
    $(window).resize(function () {
        if (window.innerWidth >= 879) {
            $(".b").show();
        }
    });

    $(window).resize(function () {
        if (window.innerWidth <= 880) {
            $(".b").hide();
        }
    });

    $(window).resize(function () {
        if (window.innerWidth >= 879) {
            $(".ft-b1-5").show();
        }
    });

    $(window).resize(function () {
        if (window.innerWidth <= 880) {
            $(".ft-b1-5").hide();
        }
    });

    $(window).resize(function () {
        if (window.innerWidth <= 599) {
            $(".sec-bk-li").show();
        }
    });

    $(window).resize(function () {
        if (window.innerWidth >= 600) {
            $(".sec-bk-li").hide();
        }
    });

    $(window).resize(function () {
        if (window.innerWidth >= 1000) {
            $(".sec-bk-li").show();
        }
    });
});