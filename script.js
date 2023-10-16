window.onload = function(){
	console.log("Hola!.This page is loaded!")

	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

var anisec1 = true
var anisec2 = true
var anisec3 = true
var anisec4 = true
var anisec5 = true
var anisec6 = true
var anisec7 = true
var anisec8 = true
var anisec9 = true
var anisec10 = true
var anisec11 = true
var anisec12 = true
var anisec13 = true
var anisec14 = true


const init = function(){
	let items = document.querySelectorAll('section');
	// let coor = document.getElementById('coor');	
	const scrollElement = document.getElementById('slider');
	const pics = document.getElementsByClassName('imgsoap')
	winWidth = window.outerWidth
	winX = window.screenX + window.outerWidth;
	totalWidth = winWidth * items.length
	// coor.innerHTML = winX;
	// document.getElementById('coor').innerHTML += '<br>Some new content!';
	// console.log(coor)


// Animation Section 1 ==== Out of the scroll listener

	// Logo animation
	anime({
		targets: '.fpart',
		opacity: 1,
		duration: 10000,
		delay: anime.stagger(100) // increase delay by 100ms for each elements.
	});
	// Animation text rugiada
	anime({
	targets: '.anchor',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutCubic',
	duration: 4000,
	delay: 5000,
	})


// Add a scroll event listener to the element.
scrollElement.addEventListener('scroll', function () {
  const horizontalScrollPosition = scrollElement.scrollLeft;
  var actsec = scrollElement.scrollLeft / winWidth

// Animation Section 2 =============================
if(actsec > 0.9 && actsec < 1.1 && anisec2){
	anisec2 = false
	anime({
		targets: '#img1_sec2',
		scale: 1.1
	});
}
// Animation Section 3 =============================
if(actsec > 1.9 && actsec < 2.1 && anisec3){
	anisec3 = false
	var ts3 = anime.timeline({
		easing: 'easeOutElastic(1, .6)',
		duration: 3000
	  });
	  // Add children
	  ts3
	  .add({
		  targets: '.imgpos3a',
		  translateY: '100vh',
		  opacity: 1
		})
		.add({
			targets: '.imgpos3b',
			translateY: '100vh',
			opacity: 1
		}, '-=2000')
		.add({
			targets: '.imgpos3c',
			translateY: '100vh',
			opacity: 1
		}, '-=2000')	   
	}
// Animation Section 4 =============================
if(actsec > 2.9 && actsec < 3.1 && anisec4){
	anisec4 = false
	  var ts4 = anime.timeline({
		  duration: 1000
	  });
	  // Add children
	  ts4
	  .add({
		targets: '#img1_sec4',
		scale: 1.1
	})
	.add({
		targets: '#img1_sec4b',
		translateY: '-20vh'
	})
}
// Animation Section 5 =============================
if(actsec > 3.9 && actsec < 4.1 && anisec5){
	anisec5 = false
	anime({
		targets: '#img1_sec5',
		scale: 1.1
	  });
}
// Animation Section 6 =============================
if(actsec > 4.9 && actsec < 5.1 && anisec6){
	anisec6 = false
	anime({
		targets: '#img1_sec6',
		duration: 3000,
		scale: 1.1,
		opacity: 1
	});
}
// Animation Section 7 =============================
if(actsec > 5.9 && actsec < 6.1 && anisec7){
	anisec7 = false
	anime({
		targets: '#img1_sec7',
		duration: 3000,
		scale: 1.1,
		opacity: 1
	});
}
// Animation Section 8 =============================
if(actsec > 6.9 && actsec < 7.1 && anisec8){
	anisec8 = false
	anime({
		targets: '#img1_sec8',
		duration: 3000,
		scale: 1.1,
		opacity: 1
	});
}
// Animation Section 9 =============================
if(actsec > 7.9 && actsec < 8.1 && anisec9){
	anisec9 = false
	anime({
		targets: '#img1_sec9',
		duration: 3000,
		scale: 1.1,
		opacity: 1
	});
}
// Animation Section 10 =============================
if(actsec > 8.9 && actsec < 9.1 && anisec10){
	anisec10 = false
	anime({
		targets: '#img1_sec10',
		duration: 3000,
		scale: 1.1,
		opacity: 1
	});
}
// Animation Section 11 =============================
if(actsec > 9.9 && actsec < 10.1 && anisec11){
	anisec11 = false
	anime({
		targets: '#img1_sec11',
		duration: 3000,
		scale: 1.1,
		opacity: 1
	});
}
// Animation Section 12 =============================
if(actsec > 10.9 && actsec < 11.1 && anisec12){
	anisec12 = false
	anime({
		targets: '#img1_sec12',
		duration: 3000,
		scale: 1.1,
		opacity: 1
	  });
}
// Animation Section 13 =============================
if(actsec > 11.9 && actsec < 12.1 && anisec13){
	anisec13 = false
	document.getElementById('textbox').style.display = 'block' 
	// Animation L'amore fa belle tutte le cose
	const masks = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']
	masks.forEach((mask, index, el) => {
		const id = `#mask-${mask}` // Prepend #mask- to each mask element name
		let path = document.querySelector(id)
		const length = path.getTotalLength() // Calculate the length of a path
		path.style.strokeDasharray = length; // Set the length to stroke-dasharray in the styles
		path.style.strokeDashoffset = length; // Set the length to stroke-dashoffset in the styles
	})
}
// Animation Section 14 =============================
if(actsec > 12.9 && anisec14){
	anisec14 = false
	anime({
		targets: '#img1_sec14',
		duration: 3000,
		opacity: 1,
		scale: 6
	  });
}



}); // end of scroll listening

cssScrollSnapPolyfill()
}
init();

};

// document.getElementById('soap3').classList.add('jspic')
// document.getElementById('soap3').classList.remove('imgsoap')