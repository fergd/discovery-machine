var sticky = new Waypoint.Sticky({
	element: $('.header-wrapper')[0]
});

$('.action-button').click(function(){
	$(this).toggleClass('active');
});