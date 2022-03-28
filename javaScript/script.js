var searchBtn = document.querySelector('#search-btn');
var searchBar = document.querySelector('.search-bar-container');
var menubar = document.querySelector('#menu-bar')
var navbar = document.querySelector('.navbar')
var videoBtn = document.querySelectorAll('.video-btn')

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menubar.classList.remove('fa-times');
    navbar.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    menubar.classList.remove('fa-times');
    navbar.classList.remove('active');
});

menubar.addEventListener('click', () => {
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click' , () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        var src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// function seeMoreLess() {

//     var images = document.querySelector(".moreBox");
//     var btnText = document.querySelector("#moreBtn"); 
   
//     if (images.style.display == "none") {  
//         images.style.display = "flex"; 
//         btnText.innerHTML = "See Less" 
//     }  
//     else {  
//         images.style.display = "none";  
//         btnText.innerHTML = "See More" 
//     }  
// }






