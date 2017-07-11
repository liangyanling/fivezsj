/**
 * Created by samsung on 2017/3/17.
 */
$(function () {
/*    var mySwiper1 = new Swiper ('#swiper-container1', {
        loop: true,
        autoplay:3000,
        pagination: '.swiper-pagination'
    });
    var mySwiper2 = new Swiper ('#swiper-container2', {
        loop: true,
        autoplay:2000
    });
    */
    $(".hb_img").click(function(){
        $(".float").show();
    });
    $(".float").click(function(){
        $(this).hide();
    });
   
});