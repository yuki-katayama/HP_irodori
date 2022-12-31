function scrollToTop() {
	let speed = 500;
	jQuery("html, body").animate({scrollTop:0}, speed, "swing");
	jQuery("header").animate({scrollTop:0}, speed, "swing");
}


// 免許証、保険証