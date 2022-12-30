function hamburger(){
	const hamburger = document.getElementsByClassName("hamburger");
	const hamburger_nav = document.getElementsByClassName("hamburger_nav");
	hamburger[0].classList.toggle("active")
	hamburger_nav[0].classList.toggle("active")
}