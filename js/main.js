$(document).ready(function(){
    $('.reviews-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

});