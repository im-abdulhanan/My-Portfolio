let body = document.body;
let btn = document.getElementById("dark-mode");
let li_a = document.getElementById("li_a");
let para = document.getElementById("para");
btn.style.cursor = "pointer"
btn.addEventListener("click",()=>{
     if(body.classList.contains("dark")){
        body.classList.add("white")
        body.classList.remove("dark")
        btn.src = "icons/night-mode.png"
        // li_a.style.color = "black"
        // para.style.color = "black"
    }else{
        body.classList.add("dark")
        body.classList.remove("white")
        // body.style.backgroundColor = "rgb(28, 28, 28)"
        btn.src = "icons/sun_light.png"
        // li_a.style.color = "white"
        // para.style.color = "white"
    }
})