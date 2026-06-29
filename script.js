const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

    let totalHeight =
    document.documentElement.scrollHeight-window.innerHeight;

    let progress =
    (window.pageYOffset/totalHeight)*100;

    progressBar.style.width = progress+"%";

});
