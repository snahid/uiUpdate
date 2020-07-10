$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 50) {
            $('.header-menu').addClass('navbar-fixed');
        } else {
            $('.header-menu').removeClass('navbar-fixed');
        }
    });
});