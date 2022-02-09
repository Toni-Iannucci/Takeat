let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');


toggle.addEventListener('click', function () {
	body.classList.toggle('open');
});



//video thumbnail
let thumbnail = document.querySelector(".thumbnail");
let player = document.querySelector(".player");


document.querySelector(".thumbnail").addEventListener('click', (e) => {
	thumbnail.style.display = "none";
	player.style.display = "block";
});

let mobilevideo = document.querySelector(".mobilevideo");
let playerMobile = document.querySelector(".playerMobile");


document.querySelector(".mobilevideo").addEventListener('click', (e) => {
	mobilevideo.style.display = "none";
	playerMobile.style.display = "block";
});