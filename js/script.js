'use strict'

const btn = document.querySelector('#btn')

function myAnimation(){
const car = document.querySelector('.car')
let pos = 0;

const timerId = setInterval(frem, 15)

function frem(){
  if(pos == 700){
    clearInterval(timerId)
  }else{
    console.log(pos);
    pos++
    car.style.left = pos + 'px';
  }
}
}
btn.addEventListener('click', myAnimation)