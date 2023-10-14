window.onload = function(){
	console.log("Hola!.This page is loaded!")


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

// Get a reference to the element you want to monitor for horizontal scroll (e.g., the window or a specific div).

// Add a scroll event listener to the element.
scrollElement.addEventListener('scroll', function () {
  // This function will be called when the scroll event occurs. 
  // You can access the horizontal scroll position like this:
  const horizontalScrollPosition = scrollElement.scrollLeft;
  // Now you can do something with the scroll position, for example:
//   console.log('Horizontal Scroll Position:', horizontalScrollPosition);
  console.log('window.ourterWidth:', winWidth);
  console.log('Total Width ', totalWidth )
  console.log('Scroll Left ', scrollElement.scrollLeft )
  var actsec = scrollElement.scrollLeft / winWidth
  console.log('active section:', actsec)
  console.log(pics)
//   pics[actsec-1].classList.add('jspic')


// Animation Section 2 =============================
	if(actsec > 1.9 && actsec < 2.1){
		console.log('ok - 2')
		// document.getElementById('soap3').classList.add('jspic')
		// document.getElementById('soap3').classList.remove('imgsoap')
		anime({
			targets: '.imgsoap',
			translateY: 250
		  });
	}





});

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

        anime({
            targets: '.moving',
            translateX: 1000,
        });

// Section 13 ==Animation L'amore fa belle tutte le cose
const masks = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']
masks.forEach((mask, index, el) => {
  const id = `#mask-${mask}` // Prepend #mask- to each mask element name
  let path = document.querySelector(id)
  const length = path.getTotalLength() // Calculate the length of a path
  path.style.strokeDasharray = length; // Set the length to stroke-dasharray in the styles
  path.style.strokeDashoffset = length; // Set the length to stroke-dashoffset in the styles
})





const moving = document.getElementById('moving')
console.log(moving)


	for (let i = 0; i < items.length; i++){
		items[i].style.background = randomColor({luminosity: 'light'});
	}
	cssScrollSnapPolyfill()

}
init();

};
