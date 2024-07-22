document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready');

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });


});

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("pics");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}