﻿document.addEventListener("DOMContentLoaded", function(){
	//scroll menu 
	var trangthai = 'duoi200';
	var doituongmenu = document.querySelector('.menu');
	var phantuload = document.querySelector('.project');
	var trangthai_title = 'duoi';
	var vitri = phantuload.offsetTop - 400;
	console.log(doituongmenu);
	window.addEventListener('scroll',function(){
	console.log(window.pageYOffset);
	if(window.pageYOffset > 200){
		if(trangthai == 'duoi200'){
			trangthai = 'tren200';
			doituongmenu.classList.add('bg');
		}
	}
	else if(window.pageYOffset<=200){
		if(trangthai == 'tren200'){
			trangthai = 'duoi200';
			doituongmenu.classList.remove('bg');
		}
			}
})	
})

$(function(){
	new WOW().init();
})
