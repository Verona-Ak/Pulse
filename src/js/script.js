$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/catalog/left_arrow.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/catalog/right_arrow.png"></img></button>',
        responsive: [
            {
              breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                },
            },
        ],
        
    });
});