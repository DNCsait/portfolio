
//message = "Welcome to My Webpage!";
//alert(message)

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
    countEl = document.getElementById("txt-counter")
    countEl.textContent = count

    if (count %2===0) (
      countEL.style.color="red";)
      else (
        countEl.style.color="blue";
      )

   }  

/*
let count = 0;
const el = document.getElementById("incrementer");
el.addEventListener("click", handleIncrement);
function handleIncrement() {
  count += 1;
  if(count % 2 ===0) {
    //style when even
    el.style.backgroundColor="red";
  } else {
    //style when odd
    el.style.backgroundColor="blue"
  }

  }


   /*Attempt at Color Change based on even/odd

   function incrementCounter() {
    counter+=1;
    countElement = document.getElementById("txt-counter");
    countElement.textContent = counter;

    if (counter % 2 === 0) {
      countElement.style.color = "blue";
    } else {
      countElement.style.color = "red";
    }
  }
*/

/*Attempt at ordered list. 
var orderedList = document.getElementById("numbers")
for (var i = 1; i <= 100; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = "text" + i;
    orderedList.appendChild(listItem);
}
*/