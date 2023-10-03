const init = function(){
	let items = document.querySelectorAll('section');
	let coor = document.getElementById('coor');	
	const scrollElement = document.getElementById('slider');
	const pics = document.getElementsByClassName('imgsoap')
	winWidth = window.outerWidth
	winX = window.screenX + window.outerWidth;
	totalWidth = winWidth * items.length
	// coor.innerHTML = winX;
	// document.getElementById('coor').innerHTML += '<br>Some new content!';
	console.log(coor)

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
});

	for (let i = 0; i < items.length; i++){
		items[i].style.background = randomColor({luminosity: 'light'});
	}
	cssScrollSnapPolyfill()

}
init();


