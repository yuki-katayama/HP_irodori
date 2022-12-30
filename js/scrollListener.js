document.addEventListener('scroll', function (e) {
	const scrollToTop = document.getElementById("scroll-to-top");
	if (window.scrollY < 350) {
		scrollToTop.style.opacity = 0;
	} else {
		scrollToTop.style.opacity = 1;
	}
})