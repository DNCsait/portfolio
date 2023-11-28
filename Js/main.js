
//message = "Welcome to My Webpage!";
//alert(message)

/*I disabled the above alert message ("Welcome to My Webpage!"
because it gets a little annoying the first few times it 
pops up or whenever I refresh my page.*/

console.log("Hello World")

document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
   });

 
   function lastnote() {
    document.getElementById("btn-alert") .innerHTML = "One Last Note"
   }

   function bye() {
    document.getElementById("btn-alert") .innerHTML = "Before You Go"
   }

   function thanks() {
   alert("Thanks for Checking Out My Webpage!") 
   }

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

/*Little additions to put in as easter eggs and to use as practice*/

let txt = "Dana can drink coffee all day";
console.log(txt)  

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
