const wrapper = document.getElementById("scrollTopWrapper");
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        wrapper.classList.add("visible");
    } else {
        wrapper.classList.remove("visible");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});