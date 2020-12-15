$(document).ready(function(){
    $('.carousel__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type="button" class="slick-prev"> </button>`,
        nextArrow: `<button type="button" class="slick-next"> </button>`


})
});
$(window).scroll(function () {
    if ($(this).scrollTop()>1000){
        $('.pageup').fadeIn()
    }else {
        $('.pageup').fadeOut()
    }
});