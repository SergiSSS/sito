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