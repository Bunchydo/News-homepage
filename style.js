let openMenuIcon = document.getElementById("menu-icon");
let closeMenuIcon = document.getElementById("close-icon")
let mainSiderBarContainer = document.querySelector(".main-sidebar-container")
let mainContainer = document.getElementById("main-container");

openMenuIcon.addEventListener("click", ()=> {
    mainContainer.style.backgroundColor = "#cbc8d6";
    mainSiderBarContainer.style.display = "block"
})

closeMenuIcon.addEventListener("click", ()=>{
mainSiderBarContainer.style.display = "none"
})

