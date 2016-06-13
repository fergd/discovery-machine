$('.toggle').click(function(){
	$(this).toggleClass('active');
});

// var waypoint = new Waypoint({
//   element: document.getElementById('waypoint'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//   }
// });

var sticky = new Waypoint.Sticky({
	element: $('.header-wrapper')[0]
});