let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
	menu.classList.toggle('active');
}

Window.onscroll = () =>{
	menu.classList.remove('fa-times');
	menu.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
	document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
	document.querySelector('#search-form').classList.remove('active');
}
