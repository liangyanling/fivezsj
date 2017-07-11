$(function() {
	//导航菜单
	var nav = $('.nav-list');
	var navMenu = $('.nav-list>li');
	var navMenuCurrent = $('.nav-list>li.current');
	var slidingShoe = $('.sliding-shoe');
	slidingShoe.css({
		'left': navMenuCurrent.position().left + 'px'
	});
	navMenu.stop(true, true).mouseenter(function() {
		var $this = $(this);
		var $idx = $this.index();
		if(slidingShoe.css("visibility") == "hidden") {
			slidingShoe.addClass('show').css("visibility", "visible");
		}
		slidingShoe.stop(true, true).animate({
			'left': $this.position().left + 'px'
		}, 100);
	});
	nav.stop(true, true).mouseleave(function() {
		var $this = $(this);
		if(slidingShoe.css("visibility") == "visible" && slidingShoe.hasClass('show')) {
			slidingShoe.removeClass('show').css("visibility", "hidden");
		}
		slidingShoe.stop(true, true).animate({
			'left': navMenuCurrent.position().left + 'px'
		}, 300);
	});
	//banner
	(function(banner) {
		if(!banner.length) return;
		var linkA = banner.children("a");
		var firstli = linkA.eq(0);
		var currli = firstli;
		var nextli = currli.next("a");
		var currLeft = 0;
		var imgWidth = 0;
		var winWidth = $(window).width();

		function autoResize(speed) {
			var currWidth = 0;
			if(winWidth <= 1000) {
				currWidth = 1000;
				currLeft = (1000 - imgWidth) / 2;
			} else if(winWidth >= imgWidth) {
				currWidth = imgWidth;
				currLeft = 0;
			} else {
				currWidth = winWidth;
				currLeft = (winWidth - imgWidth) / 2;
			}

			TweenLite.to(linkA, speed, {
				"left": currLeft
			});

			banner.add(linkA).width(currWidth);
		}

		var timer = null;

		function winResize() {
			winWidth = $(window).width();
			if(timer) {
				clearTimeout(timer);
				timer = null;
			}

			timer = setTimeout(function() {
				autoResize(0.2);
			}, 200)
		}

		var autoTimer = null;
		var isRun = false;

		function imgLoad() {
			winWidth = $(window).width();
			imgWidth = img.width;
			autoResize(0);
			$(window).on("resize", winResize);
			linkA.eq(0).show();
		}

		var img = new Image();
		$(img).on("load", imgLoad);
		img.src = linkA.children("img")[0].src;
	})($(".banner-container"));
	
});