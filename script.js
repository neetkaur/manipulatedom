let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
const title = document.getElementById('main-title')
title.textContent = "Welcome"

  // Part 2
//const varBody = document.getElementsByTagName('body')
const varBody = document.querySelector('body');
varBody.style.backgroundColor = 'purple';

  // Part 3
  var list = document.getElementById("favorite-things");
   // Get the <ul> element with id="myList"
   //console.log(list.childNodes[10])
  list.removeChild(list.childNodes[11]);
  console.log(list)
  // Part 4
const mainTitle = document.querySelector('.main')
console.log(mainTitle)
const specialTitle = mainTitle.getElementsByClassName('special-title')
console.log(specialTitle)
specialTitle.style.backgroundColor = 'red'
specialTitle.style.fontSize = '4rem'

  // Part 5


  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
