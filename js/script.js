let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    userInfo.classList.remove('active');
}

let user = document.querySelector('#user-btn');
let userInfo = document.querySelector('.header .user-info');

user.onclick = () =>{
    userInfo.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    userInfo.classList.remove('active');
}







var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    effect: "flip",
    pagination: {
       el: ".swiper-pagination",
       clickable:true,
    },
});

var swiper = new Swiper(".reviews-swip", {
    loop:true,
   grabCursor:true,
            spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      550: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});




function loader(){
    document.querySelector('.loader').style.display = 'none';
}
 
function fadeOut(){
    setInterval(loader, 2000);
}
 
window.onload = fadeOut;
