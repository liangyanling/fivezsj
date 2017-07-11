$(function() {
	var tipH = [];
	$('.i div').each(function() {
		var $this = $(this);		
		var $index = $this.parents('.sta').index();
		var h = parseInt($this.height());
		if (h>=180) {
			$this.addClass('over');
			var _h = parseInt($this.outerHeight());
			$this.css({
				'top': '-80px'
			});			
		}else{
			var _h = parseInt($this.outerHeight());
			$this.css({
				'top':'-'+(_h/2-10)+ 'px'
			});
		}
		tipH.push(_h);
	});	
	$('.loadW').on('click','.i',function () {
		var $this = $(this);		
		var $index = $this.parent('.status .sta').index();
		var $tips=$this.find('div');
		var $par=$this.parents('.loadW');
		$par.addClass('active').siblings().removeClass('active');
		var tpH = tipH[$index];
		if ($par.hasClass('active')) {
			var sta=$par.find('.sta').eq($index);
			var staIdx=sta.index();
			sta.addClass('active').find('.i div, .i i').stop(true,true).fadeToggle().end().siblings().removeClass('active').find('.i div, .i i').stop(true,true).fadeOut().end();
			$par.siblings().removeClass('active').find('.i div, .i i').fadeOut();
		} 	
	});		
});