let body = document.body;
let heroSection = document.getElementById("hero");
let toggle = document.getElementById("dark")
let url = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(imges/background_effect.png);"
toggle.addEventListener("click",function (){
    body.classList.toggle("dark")
    if(toggle.classList.contains("dark")){
        heroSection.style.background = "white"
    }else{
        heroSection.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(imges/background_effect.png);"
    }
})