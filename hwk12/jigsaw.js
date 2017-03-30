/* Shuffle function */
function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
 	}
}

/* Photo index */
var index = Math.floor (Math.random() * 3);
index = index + 1;

/* Initialize and shuffle photos array */
var photos = new Array();
for (var i=1; i<13; i++) {
	photos [i-1] = "./images" + index + "/img" + index + "-" + i + ".jpg";
}

shuffle(photos);

$(document).ready( function() {
	for (var j=0; j < photos.length; j++) {
		$('#pics').append('<div id="draggable' + j + '" class="picimg"><img src="' + photos[j] + '"></div>');
		$( "#draggable" + j ).draggable({ snap: "td", snapMode: "inner", snapTolerance: 25});
	}

	var h1 = document.getElementsByTagName('h1')[0],
    stop = document.getElementById('stop'),
    seconds = 0, minutes = 0, hours = 0,
    t;

	function add() {
	    seconds++;
	    if (seconds >= 60) {
	        seconds = 0;
	        minutes++;
	        if (minutes >= 60) {
	            minutes = 0;
	            hours++;
	        }
	    }
	    
	    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

	    timer();
	}
	function timer() {
	    t = setTimeout(add, 1000);
	}
	timer();

	/* Stop button */
	stop.onclick = function() {
	    clearTimeout(t);
	}
});




