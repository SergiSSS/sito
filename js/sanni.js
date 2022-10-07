
onresize = (event) => {
  if ( screen.width < 650) {
    document.getElementById("mySidenav").style.width = "auto";
    document.getElementById("mySidenav").style.padding = '0px'
  }
};

function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("mySidenav").style.padding = '5px'
  console.log(screen.width)
  if (screen.width < 650) {
    document.getElementById("mySidenav").style.width = "auto";
    document.getElementById("mySidenav").style.padding = '0px'
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.padding = '0px'
  if (screen.width < 650) {
    document.getElementById("mySidenav").style.display = "none"
  }
}