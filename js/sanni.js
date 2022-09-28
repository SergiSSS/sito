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
function sendEmail(){
$.ajax({
  type: 'POST',
  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
  data: {
    key: "fez8C3-YBAmJDb94nYoZNg",
    from_email: $('#email').val(),
    message: {
      "to":[
          { 
            "email": "sergiy.sannicandro@outlook.it",
            "name": "RECIPIENT NAME (OPTIONAL)",
            "type": "to"
          }],
      "autotext": true,
      "html": $('#email').val() 
    }
  }
 }).done(function(response) {
   console.log(response); // if you're into that sorta thing
 })
 .catch(console.error())
 ;}