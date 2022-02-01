const menu = document.querySelector(".menu-icon");
// console.log(menu)
const sidebar = document.querySelector(".sidebar");
const sidebarclose = document.querySelector(".sidebar-close");
menu.addEventListener("click", function () {
  console.log(sidebar);

  // sidebar.style.display = 'grid'
  sidebar.style.left = "0";
});

sidebarclose.addEventListener("click", function () {
  console.log(sidebar);
  sidebar.style.left = "-100%";
});

// const navbar = document.querySelector("#nav");
// const navBtn = document.querySelector("#nav-btn");
// const closeBtn = document.querySelector("#close-btn");
// const sidebar = document.querySelector("#sidebar");
// const date = document.querySelector("#date");
// // add fixed class to navbar
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 80) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// });
// // show sidebar
// navBtn.addEventListener("click", function () {
//   sidebar.classList.add("show-sidebar");
// });
// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });
// // set year
// date.innerHTML = new Date().getFullYear();
