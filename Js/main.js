
//message = "Welcome to My Webpage!";
//alert(message)

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
