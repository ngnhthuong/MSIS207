$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    $('.scroll-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 700);
        return false;
    });
    $('.skill p').hover(
        function () {
            $(this).siblings('.rating').slideDown();
        },
        function () {
            $(this).siblings('.rating').slideUp();
        }
    );
    $('.menu-item').click(function () {
        var target = $(this).data('target');
        var targetSection = $('.' + target);

        if (targetSection.length) {
            $('html, body').animate({
                scrollTop: targetSection.offset().top
            }, 700);
        }
    });
});