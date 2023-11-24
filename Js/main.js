
message = "Welcome to My Webpage!";
alert(message)

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

