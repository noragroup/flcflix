const btn = document.getElementById("categoryBtn");
const overlay = document.getElementById("overlay");

btn.addEventListener("click", function(e){
    e.stopPropagation();
    btn.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", function(){
    btn.classList.remove("active");
    overlay.classList.remove("active");
});