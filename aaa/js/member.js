$(function() {
	//单选按钮
	$('.member-intro').on('click','.rdo div',function() {
		var $this = $(this);
		var $index=$this.index();
		var ico=$this.find('.icon');
		ico.addClass('on').parent().siblings().find('.icon').removeClass('on');
	});
	/*div模拟select*/
	/*$('.divSelect').click(function() {
		var $this = $(this);
		var $s = $this.children('.s');
		if($s.css("display") == "none") {
			$s.slideDown("fast");
			return false;
		} else {
			$s.slideUp("fast");
		}
	});
	$('.s').on('click', 'div', function() {
		var $this = $(this);
		var txt = $this.text();
		var value = $this.attr("selectId");
		$this.parent().siblings('.slct').text(txt);
		//隐形input存放选中下拉div的value
		$this.parent().siblings('.inputselect').val(value);
	});

	$(document).click(function() {
		$('.s').slideUp("fast");
	});*/
});