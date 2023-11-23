
name = "Dana";
alert(name)

document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
   });

   function myFunction() {
    alert("Thanks for checking out my website!")
   }

   function click() {
    document.getElementById("btn-alert").innerHTML = "Fact"
   }
   
   function lastnote() {
    document.getElementById("btn-alert").innerHTML = "One Last Note"
   }
