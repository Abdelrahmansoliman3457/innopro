// loader js
$(window).on("load", function () {
  $(".loader-container").delay(300).fadeOut(1000);
});

// Show And Hide SlideBar

const menu = document.getElementById("menu");
const sideBar = document.getElementById("sidebar");
const navbar = document.getElementById("navbar");
const main = document.getElementById("main");
const closeSidebar = document.getElementById("closeSidebar");

if (menu) {
  menu.addEventListener("click", () => {
    sideBar.classList.toggle("active-side");
    navbar.classList.toggle("active-nav");
    main.classList.toggle("active-main");
  });
}

// Close SideBar
if (closeSidebar) {
  closeSidebar.addEventListener("click", () => {
    sideBar.classList.remove("active-side");
    navbar.classList.remove("active-nav");
    main.classList.remove("active-main");
  });
}

// toggle drop-down
let myBtndrop = document.querySelector(".flex-profile-btn");
let drop = document.querySelector(".my-drop-now");

if (drop) {
  myBtndrop.addEventListener("click", function (e) {
    drop.classList.toggle("show-drop");
    e.stopPropagation();
  });
  document.body.addEventListener("click", function () {
    drop.classList.remove("show-drop");
  });
  drop.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

//  add active class to cuurent link
$(".links > li > a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});

$(".collapse-my a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
    $(this).closest(".collapse-my").prev().addClass("active");
    $(this).closest(".collapse-my").show();
  }
});

// Show And Hide Search Navbar
let searchIcon = document.querySelector(".search-mmain");
let searchBox = document.querySelector(".search-form");

if (searchIcon) {
  searchIcon.addEventListener("click", function () {
    searchBox.classList.toggle("active");

    if (this.firstElementChild.classList.contains("fa-magnifying-glass")) {
      this.firstElementChild.classList.replace(
        "fa-magnifying-glass",
        "fa-xmark"
      );
    } else {
      this.firstElementChild.classList.replace(
        "fa-xmark",
        "fa-magnifying-glass"
      );
    }
  });
}

// dark mode
let headerModeBtn = document.querySelector(".header-mode");
if(headerModeBtn){

  headerModeBtn.addEventListener("click", function () {
    if (this.querySelector("i").classList.contains("fa-sun")) {
      this.querySelector("i").classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("mode", "dark");
      document.body.classList.add('dark-layout')
    } else {
      this.querySelector("i").classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("mode", "light");
      document.body.classList.remove('dark-layout')
    }
  });
}



window.onload = function(){
  if(!document.querySelector('.login-card')){

    if(localStorage.getItem('mode') == 'dark'){
      document.body.classList.add('dark-layout')
      document.querySelector(".header-mode i").classList.replace("fa-sun", "fa-moon");
    } else{
      document.body.classList.remove('dark-layout')
      document.querySelector(".header-mode i").classList.replace("fa-moon", "fa-sun");
    }
  }
}
