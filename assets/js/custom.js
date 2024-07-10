
$('.slimmenu').slimmenu(
    {
        resizeWidth: '70000',
        collapserTitle: 'Main Menu',
        animSpeed: 'medium',
        indentChildren: true,
        childrenIndenter: '&raquo;'
    });


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $(".headersec").addClass("fixed");
    } else {
        $(".headersec").removeClass("fixed");
    }
});

$(document).ready(function () {
    $(".collapse-button, .crossmnu").click(function () {
        $("body").toggleClass("openpush");
    });
});


$(document).ready(function () {
    $(".collapse-button, .crossmnu").click(function () {
        $("body").toggleClass("remveovrly");
    });
});

$(document).ready(function () {
    $(".collapse-button").click(function () {
        $(".headersec").toggleClass("fxdhdr");
    });
});

$(document).ready(function () {
    $(".pushmenu li a").click(function () {
        $("body").removeClass("remveovrly");
    });
});

$(document).ready(function () {
    $(".pushmenu li a").click(function () {
        $("body").removeClass("openpush");
    });
});



$(document).ready(function () {
    $('.collapse-button').click(function () {
        $('.navbarclose').toggleClass('closeactive');
        $('.collapse-button').toggleClass('showtoggle');
    });

});

$(document).ready(function () {
    $(".pushmenu li a").click(function () {
        $(".collapse-button").removeClass("showtoggle");
    });
});


// Init Lazy
$(function () {
    $('.lazy').Lazy();
});

// Init WOW.js and get instance
var wow = new WOW();
wow.init();



