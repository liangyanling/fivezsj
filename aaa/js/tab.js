$(function() {
	var tab=$('.tab');
	var awardLi = $('.tab .menu').find('li');
	var awardContent = $('.tab .intro').find('ul');
	var tabH = parseInt($('.tab .intro').find('ul.active').outerHeight());
	tab.height(tabH);
	awardLi.click(function() {
		var $this = $(this);
		var $index = $this.index();
		$this.addClass('active').siblings().removeClass('active');
		awardContent.eq($index).addClass('active').show().siblings('ul').removeClass('active').hide();
		tabH = parseInt(awardContent.eq($index).outerHeight());
		tab.height(tabH);
	});
});