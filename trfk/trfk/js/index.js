/*轮播图*/
var Itme=0;
var num=$(".origin_ul .origin_li").length;
$(".banner_ul li:gt(0)").hide();
$(".origin_ul .origin_li").click(function(){
    $(this).addClass("active").siblings(".origin_li").removeClass("active");
    var item1=$(".origin_ul .origin_li").index(this);
    $(".banner_ul li").eq(item1).fadeIn("slow").siblings("li").fadeOut("slow");
    Itme=item1;
})
timerTime();
/*左右按钮*/
$(".bannerbox").hover(function(){
    $(".banner_left").show();
    $(".banner_right").show();
},function(){
    $(".banner_left").hide();
    $(".banner_right").hide();
})
/*点击左箭头*/
$(".banner_left").click(function(){
    if(Itme==0){
        Itme=num;
    }
    /*图片切换*/
    $(".banner_ul li").eq(Itme-1).fadeIn("slow").siblings("li").fadeOut("slow");
    /*小圆点*/
    $(".origin_ul .origin_li").eq(Itme-1).addClass("active").siblings(".origin_li").removeClass("active");
    Itme--;

})
$(".banner_right").click(function(){
    bannerRight();
})
function bannerRight(){
    if(Itme==num-1){
        Itme=-1
    }
    /*图片切换*/
    $(".banner_ul li").eq(Itme+1).fadeIn("slow").siblings("li").fadeOut("slow");
    /*小圆点*/
    $(".origin_ul .origin_li").eq(Itme+1).addClass("active").siblings(".origin_li").removeClass("active");
    Itme++;
}
var timer;
/*自动播放*/
function timerTime(){
    timer=setInterval(function(){
        bannerRight();
    },2000);
}
/*当鼠标划上去*/
$(".bannerbox").mouseover(function(){
    clearInterval(timer);
})
$(".bannerbox").mouseout(function(){
    timerTime();
})
/* <!--banner部分列表-->*/

$(".bannerboxleft").hover(function(){
    var index=$(".bannerboxleft").index(this);
    $(".bannerboxleft2").eq(index).css({display:"block"});
},function(){
    $(".bannerboxleft2").css({"display":"none"});
})

/*动态文字*/
$(".b1,.b2,.b3").addClass("animated fadeInUp");
$(".bb1,.bb2,.bb3,.bb4").addClass("animated bounceInDown");
$(".bbb1,.bbb2,.bbb3").addClass("animated bounceInRight");
$(".s1,.s2,.s3,.s4").addClass("animated zoomIn");
$(".text_s5").addClass("animated rollIn");
$(".text_s6,.text_s7").addClass("animated bounceInDown");
$(".cuo").click(function(){
	$(".tc").css("display","none");
})

