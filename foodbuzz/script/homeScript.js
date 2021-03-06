/*
read more, read less button
*/

let noOfChars = 150;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
  if(content.textContent.length < noOfChars) {
    content.nextElementSibling.style.display = "none";
  }
  else {
    let displayText = content.textContent.slice(0, noOfChars);
    let moreText = content.textContent.slice(noOfChars);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
});

function readMore(btn) {
  let description = btn.parentElement;
  description.querySelector(".dots").classList.toggle("hide");
  description.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}

/*
sticky navigation bar
*/

window.onscroll = function() {myStickyFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myStickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
