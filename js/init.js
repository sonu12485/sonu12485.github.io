$(document).ready(function(){
      $('.parallax').parallax();
});

(function($){
  // variables
  elementWidth = $('ul').width(),
  containerWidth = $('nav').width(),
  difference = elementWidth-containerWidth,
  finalWidth = difference * 1.5,
  element = $('ul');

  // active on click
  $('li').on('click', function(){
    $('li').removeClass('active');
    $(this).addClass('active');
  });

})(jQuery);

var string = "K.SAI KISHAN";
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',100);

}
frameLooper();

var string1 = "WEB DEVELOPER & DESIGNER";
var array1 = string1.split("");
var timer1;

function frameLooper1 () {
	if (array1.length > 0) {
		document.getElementById("text1").innerHTML += array1.shift();
	} else {
		clearTimeout(timer1);
			}
	loopTimer = setTimeout('frameLooper1()',80);

}

setTimeout(frameLooper1,1300);
