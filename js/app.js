<<<<<<< HEAD
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
=======
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
>>>>>>> a0796d84605946aa699fa7430e248c1dd28d9437
// date.innerHTML = new Date().getFullYear();
