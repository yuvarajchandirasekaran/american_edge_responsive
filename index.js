let menuBtn=document.getElementById('menu-btn');
let navLink = document.querySelector(".nav-links")
menuBtn.addEventListener("click",()=>{
    if (navLink.style.display == "none") {
        navLink.style.display = "block";
    }
    else{
        navLink.style.display = "none";
    }
})