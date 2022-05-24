$(document).ready(function() {
    AOS.init();

    $(".btn-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $('.cart').hover(function() {
        $('.cart-list').slideToggle(500);
    })

    //header
    $(window).scroll(function() {
        //var height = any value
        var height = 200;
        if ($(this).scrollTop() >= height) {
            $(".btn-to-top").css("display", "block");
            $(".logo").css("width", "9%");
            $(".main-menu").css("margin", "10px auto 0");
            $(".header-top").css("display", "none");
        } else {
            $(".btn-to-top").css("display", "none");
            $(".logo").css("width", "13.5%");
            $(".main-menu").css("margin", "25px auto");
            $(".header-top").css("display", "block");
        }
    });

    $(".dropdown").hover(function() {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
    $('.drop-btn').on('click', function() {
            $('.mobile-drop-menu ul').slideToggle();
        })
        // ...header


    // brand-area
    $('.brand-area').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    // brand-area end

    // features-wrapper
    $('.features-wrapper').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    // features-wrapper end

    // customersreview

    $('.customersreview-wrapper').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
        // customersreview end

});