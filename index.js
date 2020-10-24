

// just to test if js is working

//alert("its working")

//
// simple button function to change the inner html to my linkedin
var infoBox = document.getElementById('date');


function moreInfo() {
infoBox.innerHTML = `<a href="https://www.linkedin.com/in/jonathan-im-00/">My Linkedin </a><br> <p> imjonathan.work@gmail.com </p>`;
infoBox.style.fontSize = '30px';
}


// reset the info on  the p tag by creating empty string

function resetbtn(){
  infoBox.innerHTML = " ";
}
