
//message = "Welcome to My Webpage!";
//alert(message)

//I disabled the above alert message ("Welcome to My Webpage!"
//because it gets a little annoying the first few times it 
//pops up or whenever I refresh my page.

console.log("Hello World")

//This is my copyright footer stating the current year. 

document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
   });

//Button Section! This is my hover button that changes text as you 
//mouseover. Also, the alert message is in this section for when you 
//actually click on the button. 

   function lastnote() {
    document.getElementById("btn-alert") .innerHTML = "One Last Note"
   }

   function bye() {
    document.getElementById("btn-alert") .innerHTML = "Before You Go"
   }

   function thanks() {
   alert("Thanks for Checking Out My Webpage!") 
   }

//The counter button section. This is my incremenet button, as well as
//my decrement button, and the text counter that displays the number (and
//shows the number color change according to odd and even values. I styled
//them all with some CSS to follow through with my color palette and just
//to add some style to make it look nicer with font consistent with my page).

   let count = 0
    document.getElementById("txt-counter")
  function increment() {
    count += 1
   const countEl = document.getElementById("txt-counter")
    countEl.textContent = count
if (count % 2===0) {
  countEl.style.color="blue"; 
}
else {
  countEl.style.color="purple";
   }
  }

  function decrement() {
   count -=1;
    document.getElementById("txt-counter").innerText = count;
    const countEl = document.getElementById("txt-counter")
    countEl.textContent = count
    if (count % 2===0) {
      countEl.style.color="blue"; 
    }
    else {
      countEl.style.color="purple";
       }
}

//This is my "danaloop" for showing the ordered list of odd and even 
//numbers from 1 to 100, both seen on the page itself and in the console. 

function danaloop(){
const numol = document.getElementById("numbers");
let i

for(i=1;i<=100;i=i+1 ) 
{
  console.log(i)
  let liElement = document.createElement("li");
  if (i % 2===0) {
    liElement.textContent="Even"; 
  }
  else {
    liElement.textContent="Odd";
     }
  
  document.getElementById("numbers").appendChild(liElement);
}
}

danaloop()

//Little additions to put in as easter eggs and to use as practice. 

let txt = "Dana can drink coffee all day";
console.log(txt)  
console.log('---')
console.log(txt.split(" ")[3])

let however = "...not Starbucks, though."
console.log(however)

myColor = ["Burnt Scarlet", " Dusty Rose", " Hemlock Green"];
console.log(myColor.toString());

let colors = "The above colors are my website's palette. I made the names up myself."
console.log(colors)

let dog = "Opie, my dog, is a mix between the following breeds:"
console.log(dog)

myDog = ["Husky ", " Retriever ", " Rottweiler"];
console.log(myDog.join('+'));

let words = "I am learning Javascript ";
let morewords = "and it is confusing.";
let sentence = words + morewords;
console.log(sentence)
console.log(typeof sentence);

//Time for some a bunch of random stuff to practice.
var num1 = 4;
var num2 = 59;
var total = num1 + num2;
console.log(total);
console.log(typeof total);

let num3 = 4;
let num4 = 59;
let remainder = num3 % num4;
console.log(remainder);
console.log(typeof remainder);

//let shoelace = "ABCDEFGHIJKLMNOP";
//let length = shoelace.length;
//console.log(length);
//console.log(typeof length);

let shoelace = "ABCDEFGHIJKLMNOP";
let length = shoelace.substring(3, 5);
console.log(length);
console.log(typeof length);

let message = "I'm dreaming of a white Christmas";
const hidden = message.split(" ", 2).join(" ");
console.log(hidden);
console.log(typeof hidden);

let a = Array(6);
a[0] = "September";
a[1] = "October";
a[2] = "November";
a[3] = "December";
a[4] = 25;
console.log(a[3], a[4]);
console.log(typeof a);

let b = new Array ("Jingle", "Bells", "Batman", "Smells", 1991, true);
console.log(b[2], b[3], b[5]);
console.log(typeof b);

