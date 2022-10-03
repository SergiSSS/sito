var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
     // $('.panel').animate({height:'0px'})
    } else {
      panel.style.display = "block";
     // $('.panel').animate({height:'100px'})
    }
  });
} 
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("mySidenav").style.padding = '5px'
  console.log(screen.width)
  if(
    screen.width < 650
  ){
  document.getElementById("mySidenav").style.width = "auto";
  document.getElementById("mySidenav").style.padding = '0px'
}}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.padding = '0px'
  if(
    screen.width < 650
  ){
  document.getElementById("mySidenav").style.display = "none"
}}
