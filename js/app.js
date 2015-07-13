$(document).ready(function() {
  $('.ryu').mouseenter(function() { //when mouse enters the .ryu then....
    $('.ryu-still').hide(); //hide ryu still gif
    $('.ryu-ready').show(); //show ryu ready gif
    $('.ryu-cool').hide();// hide ryu cool gif
 })
  .mouseleave(function() { //when mouse leaves area- do this funtion: 
    $('.ryu-ready').hide(); //hide ryu ready gif 
    $('.ryu-cool').hide(); //hide ryu cool gif 
	  $('.ryu-still').show(); //show try still gif 
 })
  .mousedown(function() { //when ryu is clicked...  
  	playHadouken(); //playHoadouken funtion (see below)
    $('.ryu-ready').hide(); // hide ryu ready  gif 
    $('.ryu-throwing').show(); //show ryu gif throwing 
    $('.ryu-cool').hide(); //hide ryu cool
    $('.hadouken').finish().show().animate( //find hadouken, stop animation, hide hadouken, and perform animation according to css properties
  	{'left': '300px'},
  	500,
  	function() {
    $(this).hide(); // hide this? the hadouken? 
    $(this).css('left', '-212px'); //find css for this? the hadouken? 
  }
 );
})
   .mouseup(function() { //when mouse is released.. 
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
    $('.ryu-cool').hide();
  });
  $(document).keydown(function(event){ //when x is pressed 
   	if (event.which===88) {
   		console.log('x')
   		$('.ryu-cool').show();
   		$('.ryu-ready').hide();
   		$('.ryu-still').hide();
   		$('ryu-throwing').hide();
   	};
   });
});
function playHadouken () { //playHadouken function is defined
  $('#hadouken-sound')[0].volume = 0.5; 
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

 