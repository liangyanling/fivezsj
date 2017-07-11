 var num=$(".banner-span span").length;
    var i_num=0;
    var timer_banner=null;
    $(".banner-ul li:gt(0)").hide();/*让大于0的图隐藏*/
    /*小圆点切换*/
    $('.banner-span span').click(function(){
        $(this).addClass("active").siblings('span').removeClass('active');
        var i_num1=$('.banner-span span').index(this);
        /*图片显示*/
        $(".banner-ul li").eq(i_num1).fadeIn('slow').siblings('li').fadeOut('slow');
        i_num=i_num1;
    });
    /*左边和右边的按钮*/
    $(".banner").hover(function(){
        $(".banner-left").show();
        $(".banner-right").show();
    },function(){
        $(".banner-left").hide();
        $(".banner-right").hide();
    });
    /*左箭头点击*/
    $(".banner-left").click(function(){
        if(i_num==0){
            i_num=num;
        }
        /*图片切换*/
        $(".banner-ul li").eq(i_num-1).fadeIn('slow').siblings('li').fadeOut('slow');
        /*小圆点*/
        $(".banner-span span").eq(i_num-1).addClass("active").siblings('span').removeClass('active');
        i_num--;
    });
    /*  右箭头切换时*/
    $(".banner-right").click(function(){
        move_banner();
    });
    //自动播放函数
    function bannerMoveks(){
        timer_banner=setInterval(function(){
            move_banner();
        },2000)
    }
    bannerMoveks();
    //鼠标移动到banner上时停止播放
    $('.banner').mouseover(function(){
        clearInterval(timer_banner);
    });
    //鼠标离开 banner 弢�启定时播�?
    $('.banner').mouseout(function(){
        bannerMoveks();
    });
    //banner 右边点击执行函数
    function move_banner(){
        if(i_num==num-1){
            i_num=-1;
        }
        //大图切换
        $('.banner-ul li').eq(i_num+1).fadeIn('slow')
            .siblings('li').fadeOut('slow');
        //小图切换
        $('.banner-span span').eq(i_num+1).addClass('active')
            .siblings('span').removeClass('active');

        i_num++;

    }
    
    /*左右轮播*/
var clone=$(".Carousel .carrousel_ul li").first().clone();
$(".Carousel .images").append(clone);
var i=0;
var size=$(".Carousel .carrousel_ul li").size();
//            点击向左轮播
$(".Carousel .btn_l").click(function () {
    i--;
    if(i==-1){
        $(".Carousel .carrousel_ul").css({left:-(size-1)*($(".imgeleleft").width())});

        i=size-1;
    }
    $(".Carousel .carrousel_ul").stop().animate({left:-i*($(".imgeleleft").width())}, 500);
  /*  $(".Carousel .num li").eq(i).addClass("on").siblings().removeClass("on");*/
});
//            点击向右轮播
$(".Carousel .btn_r").click(function () {
    moveR();
});
//            向右轮播函数
function moveR() {
    i++;
    if(i==size){
        $(".Carousel .carrousel_ul").css({left:0});
        i=1;
    }
    $(".Carousel .carrousel_ul").animate({left:-i*($(".imgeleleft").width())}, 500);
    if(i==size-1){
        $(".nav .num li").eq(0).addClass("on").siblings().removeClass("on");
    }else {
        $(".nav .num li").eq(i).addClass("on").siblings().removeClass("on");
    }
}
//            鼠标滑过圆点
$(".nav .num li").hover(function () {
    var index=$(this).index();
    i=index;
    $(".nav .images").stop().animate({left:-i*500}, 500);
    $(this).addClass("on").siblings().removeClass("on");
});
//            定时自动轮播
var t=setInterval(function () {
    moveR();
},1500);
//            鼠标滑过图片停止自动轮播
$(".carrousel").hover(function(){
        clearInterval(t);},
    function(){
        t=setInterval(function () {
            moveR();
        },1500)
    });

