"use strict"

let box = document.querySelector('.box');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let images = [
	'image1.png', 'image2.png', 'image3.png','image4.png'
];
let i = 0;

box.style.background =`url(./images/${images[0]})`;
	
	left.addEventListener('click', function(){
		i--;
	
	if(i < 0){
		i = images.length-1;
	}
		box.style.background = `url(./images/${images[i]})`;
	});
	
	
	right.addEventListener('click', function(){
		i++;
	
	if(i >= images.length){
		i = 0;
	}
		box.style.background = `url(./images/${images[i]})`;
	});