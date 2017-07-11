/* 浠ｇ爜鏁寸悊锛氭噿浜轰箣瀹� www.lanrenzhijia.com */

	var mainOnNum = 1;
	var timer;
	var topIndex = 1;
	var width = $(window).width();

	function onTimer() {
		if (mainOnNum > 3) {
			mainOnNum = 1;
		} else {
			mainOnNum++;
		}

		$(".control li").eq(mainOnNum-1).trigger("click");
	}

	function changeSceneSelector($num) {
		mainOnNum = $num+1;

		changeScene(mainOnNum);
	}
/* 浠ｇ爜鏁寸悊锛氭噿浜轰箣瀹� www.lanrenzhijia.com */
	function changeScene($num) {
		clearInterval(timer);

		mainOnNum = $num;

		topIndex++;

		switch($num) {
			case 1:
				timer = setInterval(onTimer,3000);

				$("#scene1").css({"z-index":topIndex});

				motion($num);
			break;
			
			case 2:
				timer = setInterval(onTimer,3000);

				$("#scene2").css({"z-index":topIndex});

				motion($num);
			break;

			case 3:
				timer = setInterval(onTimer,3000);

				$("#scene3").css({"z-index":topIndex});

				motion($num);
			break;
			case 4:
				timer = setInterval(onTimer,3000);

				$("#scene4").css({"z-index":topIndex});

				motion($num);
			break;
		}
	}

	function clearFunctions(){
		$("li").clearQueue();
		$("li").stop();

		$("p").clearQueue();
		$("p").stop();

		$("h2").clearQueue();
		$("h2").stop();

		$("ul").clearQueue();
		$("ul").stop();
	}/* 浠ｇ爜鏁寸悊锛氭噿浜轰箣瀹� www.lanrenzhijia.com */

	function motion($mc) {
		clearFunctions();
/* 浠ｇ爜鏁寸悊锛氭噿浜轰箣瀹� www.lanrenzhijia.com */
		$("#scene1").stop().css("left",width);
		$("#scene1 h2").stop().css("top","-400px");
		$("#scene1 .link").stop().css("top","-400px");
		$("#scene1 .pointer1").stop().css("top","500px");
		$("#scene1 .pointer2").stop().css("top","500px");
		$("#scene1 .pointer3").stop().css("top","500px");

		$("#scene2").stop().css("left",width);
		$("#scene2 h2").stop().css("top","-1000px");
		$("#scene2 .link").stop().css("top","-400px");
		$("#scene2 .pointer1").stop().css("top","-600px");
		$("#scene2 .pointer2").stop().css("top","-600px");
		$("#scene2 .pointer3").stop().css("top","-600px");
		$("#scene2 .pointer4").stop().css("top","-600px");

		$("#scene3").stop().css("left",width);
		$("#scene3 h2").stop().css("top","-400px");
		$("#scene3 .link").stop().css("top","-400px");
		$("#scene3 .pointer1").stop().css("top","550px");
		$("#scene3 .pointer2").stop().css("top","550px");
		$("#scene3 .pointer3").stop().css("top","550px");
		$("#scene3 .pointer4").stop().css("top","550px");
		
			$("#scene4").stop().css("left",width);
		$("#scene4 h2").stop().css("top","-400px");
		$("#scene4 .link").stop().css("top","-400px");
		$("#scene4 .pointer1").stop().css("top","550px");
		$("#scene4 .pointer2").stop().css("top","550px");
		$("#scene4 .pointer3").stop().css("top","550px");
		$("#scene4 .pointer4").stop().css("top","550px");

		if($mc == 1) {
			$("#scene1").animate({"left":"0"},{duration:700, easing:"easeOutExpo"});
			$("#scene1 h2").delay(300).animate({"top":"35px"},{duration:1000, easing:"easeInOutCirc"});
			$("#scene1 .link").delay(100).animate({"top":"175px"},{duration:1000, easing:"easeInOutCirc"});
			$("#scene1 .pointer1").delay(2000).animate({"top":"195px"},{duration:300, easing:"easeOutBack"});
			$("#scene1 .pointer2").delay(2100).animate({"top":"225px"},{duration:300, easing:"easeOutBack"});
			$("#scene1 .pointer3").delay(2200).animate({"top":"175px"},{duration:300, easing:"easeOutBack"});

		} else if($mc == 2) {
			$("#scene2").animate({"left":"0"},{duration:700, easing:"easeOutExpo"});
			$("#scene2 h2").delay(300).animate({"top:"400px"},{duration:1000, easing:"easeInOutCirc"});
			$("#scene2 .link").delay(100).animate({"top":"175px"},{duration:1000, easing:"easeInOutCirc"});
			$("#scene2 .pointer1").delay(2000).animate({"top":"500px"},{duration:300, easing:"easeOutBack"});
			$("#scene2 .pointer2").delay(2100).animate({"top":"500px"},{duration:300, easing:"easeOutBack"});
			$("#scene2 .pointer3").delay(2200).animate({"top":"500px"},{duration:300, easing:"easeOutBack"});
			$("#scene2 .pointer4").delay(2300).animate({"top":"500px"},{duration:300, easing:"easeOutBack"});
		}else if($mc == 3) {
			$("#scene3").animate({"left":"0"},{duration:700, easing:"easeOutExpo"});
			$("#scene3 h2").delay(300).animate({"top":"35px"},{duration:1000, easing:"easeInOutCirc"});
			$("#scene3 .link").delay(100).animate({"top":"175px"},{duration:1000, easing:"easeInOutCirc"});
			$("#scene3 .pointer1").delay(2000).animate({"top":"146px"},{duration:300, easing:"easeOutBack"});
			$("#scene3 .pointer2").delay(2100).animate({"top":"188px"},{duration:300, easing:"easeOutBack"});
			$("#scene3 .pointer3").delay(2200).animate({"top":"222px"},{duration:300, easing:"easeOutBack"});
			$("#scene3 .pointer4").delay(2300).animate({"top":"36px"},{duration:300, easing:"easeOutBack"});
		}
		else {
			$("#scene4").animate({"left":"0"},{duration:700, easing:"easeOutExpo"});
			$("#scene4 h2").delay(300).animate({"top":"35px"},{duration:1000, easing:"easeInOutCirc"});
			$("#scene4 .link").delay(100).animate({"top":"175px"},{duration:1000, easing:"easeInOutCirc"});
			$("#scene4 .pointer1").delay(2000).animate({"top":"226px"},{duration:300, easing:"easeOutBack"});
			$("#scene4 .pointer2").delay(2100).animate({"top":"241px"},{duration:300, easing:"easeOutBack"});
			$("#scene4 .pointer3").delay(2200).animate({"top":"223px"},{duration:300, easing:"easeOutBack"});
			$("#scene4 .pointer4").delay(2300).animate({"top":"113px"},{duration:300, easing:"easeOutBack"});
		}
	}
/* 浠ｇ爜鏁寸悊锛氭噿浜轰箣瀹� www.lanrenzhijia.com */
	function init() { 
		var $btns = $(".control li"),
			$motionC = $(".control #btnPlay");

		$btns.bind("click", function() {
			clearInterval(timer);
			timer = setInterval(onTimer,7000);
			var $this = $(this),
				index = $btns.index($this);
			
			if(window.console) {console.log("clicked : " + mainOnNum);}
			$btns.removeClass("on"); 
			$this.addClass("on");
			
			changeSceneSelector(index);
			return false;
		});
/* 浠ｇ爜鏁寸悊锛氭噿浜轰箣瀹� www.lanrenzhijia.com */
		$motionC.bind("click", function() {
			var $this = $(this);
			if($this.hasClass("on")) {
				$this.text("鑷姩鎾斁");
				$this.attr("title","鑷姩鎾斁");
				$this.removeClass("on");
				clearInterval(timer);
			} else {
				$this.text("鑷姩鎾斁 鍋滄");
				$this.attr("title","鑷姩鎾斁 鍋滄");
				$this.addClass("on");
				clearInterval(timer);
				timer = setInterval(onTimer,3000);
			}
			return false;
		});

		changeScene(1);
	}

	var goInit = setTimeout(function() {
		init();
	}, 10);

	$(".scene").css("display","block");
	$(".scene").css("left",width);


/* 浠ｇ爜鏁寸悊锛氭噿浜轰箣瀹� www.lanrenzhijia.com */