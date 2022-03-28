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

//simulating a click on nextSibling on videoEnd
var currentVideo=document.querySelector('#video-slider')
currentVideo.addEventListener('ended',()=>{
    
    if(document.querySelector('.controls .active').nextElementSibling!=null){
        document.querySelector('.controls .active').nextElementSibling.click()
    }
    else{
        document.querySelector(".controls .video-btn").click()
    }
})

//handling videoCarousel through .controls
videoBtn.forEach(btn =>{
    btn.addEventListener('click' , () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        var src = btn.getAttribute('data-src');
        currentVideo.src = src;
    });
});

// --- SHOW MORE IMPLEMENTATION
var galleryImgs=document.querySelectorAll('.gallery .box-container .box')
var inactiveImgs=Array.from(galleryImgs).slice(-6) 
console.log(inactiveImgs)

galleryImgs[1].addEventListener('click',()=>{
    inactiveImgs.forEach(img=>{
        img.style.display="inline-block";
    })
    galleryImgs[1].firstElementChild.classList.add('disable')
})

// --- SHOW LESS IMPLEMENTATION
galleryImgs[galleryImgs.length-1].addEventListener('click',()=>{
    inactiveImgs.forEach(img=>{
        img.style.display="none"
    })
    galleryImgs[1].firstElementChild.classList.remove('disable')
})



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






