document.addEventListener('scroll', function (e) {
	const scrollToTop = document.getElementById("scroll-to-top");
	if (window.scrollY < 350) {
		scrollToTop.style.opacity = 0;
		scrollToTop.style['pointer-events'] = 'none';
	} else {
		scrollToTop.style['pointer-events'] = 'unset';
		scrollToTop.style.opacity = 1;
	}
})