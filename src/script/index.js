// animated js

var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 100);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// see more js
function toggleTextMB() {
  var points = document.getElementById("pointsMB");

  var showMoreText = document.getElementById("moreTextMB");

  var buttonText = document.getElementById("textButtonMB");

  if (points.style.display === "none") {
    showMoreText.style.display = "none";

    points.style.display = "inline";

    buttonText.innerHTML = "Show More";
  } else {
    showMoreText.style.display = "inline";

    points.style.display = "none";

    buttonText.innerHTML = "Show Less";
  }
}

function toggleTextDK() {
  var points = document.getElementById("pointsDK");

  var showMoreText = document.getElementById("moreTextDK");

  var buttonText = document.getElementById("textButtonDK");

  if (points.style.display === "none") {
    showMoreText.style.display = "none";

    points.style.display = "inline";

    buttonText.innerHTML = "Show More";
  } else {
    showMoreText.style.display = "inline";

    points.style.display = "none";

    buttonText.innerHTML = "Show Less";
  }
}

// navbar custom js
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("drop-fixed").style.display = "block";
  } else {
    document.getElementById("drop-fixed").style.display = "none";
  }
}
