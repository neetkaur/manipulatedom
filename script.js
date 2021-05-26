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
varBody.style.backgroundColor = 'pink';

  // Part 3
  var list = document.getElementById("favorite-things");
   // Get the <ul> element with id="myList"
   //console.log(list.childNodes[10])
  list.removeChild(list.childNodes[11]);
  console.log(list)
  // Part 4
const specialTitle = document.querySelectorAll('.special-title')
for(let eachitem of specialTitle){
  eachitem.style.fontSize = '2rem'
}

  // Part 5
const pastraces = document.getElementById('past-races')
pastraces.removeChild(pastraces.children[3])
 // Part 6
const newLi = document.createElement('li')
newLi.textContent = "Austin"
pastraces.appendChild(newLi)

  // Part 7
const firstParent = document.querySelector('.main')
const newBlogPost = document.createElement('div')
newBlogPost.classList.add('blog-post','purple')
firstParent.appendChild(newBlogPost)
const newH1 = document.createElement('h1')
newH1.textContent = "Austin"
newBlogPost.appendChild(newH1)
newP = document.createElement('p')
newP.textContent='I did Whatever'
newBlogPost.appendChild(newP)


  // Part 8
 const quoteTitle = document.getElementById('quote-title')
 //console.log(quoteTitle)
 quoteTitle.addEventListener("click", randomQuote)

  // Part 9

const blogPostClassElements = document.querySelectorAll(".blog-post")
for(let each of blogPostClassElements){
each.addEventListener("mouseenter",() => {each.classList.toggle("red")})
each.addEventListener("mouseout",() => {each.classList.toggle("purple")})
}
});
