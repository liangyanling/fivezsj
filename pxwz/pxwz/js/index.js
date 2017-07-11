/**
 * Created by samsung on 2017/3/17.
 */
$(function () {

     var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // �����Ҫ��ҳ��
        pagination: '.swiper-pagination',
        autoplay:3000,
        autoplayDisableOnInteraction : false
    })
    $(".hb_img").click(function(){
       /* $(".float").show();*/
      $(".float").slideDown(3000);
    });
    $(".float").click(function(){
        /*$(this).hide();*/
       $(this).slideUp(3000);
    });
   
});