var	windowsWidth;
var	windowsHeight;
var abstsissa;
var ordinate;
var range = 15;
var IE;
// ########################################
// Проверка браузера
(function(){
	if ( navigator.userAgent.search('Trident') > 0 || navigator.userAgent.search('AppleWebKit') > 0){
		return IE = 1; 
	}
	else {
		return IE = 0;
	}
})()
// ############################################
window.onresize = function(){
	windowsWidth = window.innerWidth;
	windowsHeight = window.innerHeight;
	console.log(windowsHeight);
};

function move(elem, k1, k2) {
	var beta;
	var gor;
	var ver;
	document.querySelector('body').addEventListener("mousemove", function(){
		if (abstsissa > windowsWidth/2){
			gor = (abstsissa/windowsWidth - 0.5) * range;
		};
		if (abstsissa < windowsWidth/2){
			gor = - ((windowsWidth - abstsissa)/windowsWidth - 0.5) * range
		};
		if (ordinate > windowsHeight/2){
			ver = (ordinate/windowsHeight - 0.5) * range;
		};
		if (ordinate < windowsHeight/2){
			ver = - ((windowsHeight - ordinate)/windowsHeight - 0.5) * range
		};
		elem.style.transform = 'translate(' + gor * k1 +'%, ' + ver * k2 +'%)';
	})
};

window.onload = function (){
		windowsWidth = window.innerWidth;
		windowsHeight = window.innerHeight;

		// mainWrapper.style.perspective = 'none';
		document.querySelector('body').addEventListener("mousemove", function(event){
			event = event || window.event;
			abstsissa = event.clientX;
			ordinate = event.clientY;
		});
		move(layer0, 0.05, 0.05);
		// move(layer1, 0.2, -0.7);
		// move(layer2, -0.7, 0.7);
		// move(layer3, -0.3, 0.3);
};