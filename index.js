var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var d = document.getElementsByClassName("description");
  var l = document.getElementsByClassName("link");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
  var project = document.getElementById("project_name");
  var description = document.getElementById("project_desc");
  var source_code = document.getElementById("source_code_btn");
  project.innerText = x[slideIndex - 1].id;
  description.innerText = d[slideIndex - 1].innerText;
  source_code.setAttribute("href", l[slideIndex - 1].innerText);
}

function openNav() {
  document.getElementById("Sidebar").style.width = "20%";
  document.getElementById("Sidebar").style.borderWidth = "5px";
}

function closeNav() {
  document.getElementById("Sidebar").style.width = "0";
  document.getElementById("Sidebar").style.borderWidth = "0";
}
