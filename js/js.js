$(document).ready(function(){
	$('#home .container > *, .navbar').addClass('step-1');
	setTimeout(function(){
		$('.preloader div img:first-child').css('opacity','1');
		$('.preloader-icon').css('bottom','-25%');
	},500);
	setTimeout(function(){
		$('.preloader').addClass('preloader-hidden')
		$('.preloader div').addClass('preloader-img-hidden')
		setTimeout(function(){
			$('.preloader').css('display','none')
		},1000)
		$('#home .container > *, .navbar').removeClass('step-1');
		$('#home .container > *, .navbar').addClass('step-2');
		setTimeout(function(){
			$('#home .container > *, .navbar').removeClass('step-2');
		},1000)
	},2000);
});
(function(){
	var strMass = [];
			strMass[0] = "More than $1 Year`s$ Experience ";
			strMass[1] = "$Javascript$ Front End Developer";
			strMass[2] = "Layout of sites on the $Bootstrap$ and other frameworks";
	var ticker = $('.ticker');
	var tickerSpan = $('.ticker span')
	var number = 0;
	
	function tickerGo(){
		var i = 0;
		str = strMass[number];
		var startSpan = str.indexOf('$');
		var endSpan = str.lastIndexOf('$');
		var timer = setInterval(function(){
			if(i > startSpan && i < endSpan){
				$('.ticker span').append(str[i])
			} else if(i == startSpan){
				ticker.append('<span></span>')
			} else if(i == endSpan){
			} else if(i < startSpan || i > endSpan && i <= str.length){
				ticker.append(str[i]);
			} else if(i >= str.length) {			
				clearInterval(timer);
				setTimeout(function(){
				var openSpan = ticker.html().indexOf('<');
				var closeSpan = ticker.html().lastIndexOf('>');
				var strLength = ticker.html().length;
				var numberСharacters = strLength - 1;
				var timer1 = setInterval(function(){
					if(numberСharacters > closeSpan){
						ticker.html(ticker.html().slice(0, numberСharacters))
					} else if(numberСharacters <= closeSpan && numberСharacters >= openSpan){
						ticker.html(ticker.html().slice(0, numberСharacters - 6));
						if(numberСharacters	== openSpan + 5){
							numberСharacters = openSpan; 
						}
					} else if (numberСharacters < openSpan && numberСharacters >= 0){
						$('.ticker span').remove();
						ticker.html(ticker.html().slice(0, numberСharacters));
					} else {
						clearInterval(timer1);
						if(number == strMass.length-1){
							number = 0
						} else {
						number++;
						};
						tickerGo();
					};
					numberСharacters--;
				},50);
			},500)};
			i++;
		}, 150)};
	tickerGo();
})();

$('#main-menu li').click(function(){
	if(!($(this).hasClass('active'))){
		if($('.navbar').hasClass('menu-in-home')){
			$('.navbar').addClass('escape-menu-home');
		} else {
			$('.navbar').addClass('escape-menu');
		};
		if($(window).width() > 992){
			setTimeout(function(){
				if($('#home').hasClass('active')){
				  $('.navbar').removeClass('default-menu');   
				  $('.navbar').addClass('menu-in-home');   
				} else {
					$('.navbar').removeClass('menu-in-home');
					$('.navbar').addClass('default-menu');
				}
				$('.navbar').removeClass('escape-menu');
				$('.navbar').removeClass('escape-menu-home');
			}, 800)
		};
	};
	if(!($(this).hasClass('active'))){
		$('#main-menu li').removeClass('active');
		$(this).addClass('active');
	};
});
$(document).ready(function(){
	if($('#home').hasClass('active')){
		if($(window).width() < 992){
			$('.navbar').removeClass('menu-in-home')
		}
	};
});
$(window).resize(function(){
	if($('#home').hasClass('active')){
		if($(window).width() < 992){
			$('.navbar').removeClass('menu-in-home')
		} else {
			$('.navbar').addClass('menu-in-home')
		};
	};
});
