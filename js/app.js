const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector(".menu-icon");
const sidebarClose = document.querySelector(".sidebar-close");
const sidebar = document.querySelector(".sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
menuIcon.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
sidebarClose.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
// date.innerHTML = new Date().getFullYear();
