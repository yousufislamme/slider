$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 30,
        loop:true,
        autoplay: true,
        autoplayTimeout: 2000,
        dotsEach: true,
        autoplayHoverPause: true,
        mergeFit: true,
        startPosition: true,
        responsiveRefreshRate: 300,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });


});