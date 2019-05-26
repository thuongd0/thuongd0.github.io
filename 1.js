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

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:10,
        nav:true,
        navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>"
          ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
})
