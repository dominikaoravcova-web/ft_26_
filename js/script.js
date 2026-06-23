const menuButton = document.getElementById("btn");
const container = document.querySelector(".buttons");

menuButton.addEventListener("click", function() {
    if (container.style.visibility === "hidden") {
        container.style.visibility = "visible";
    } else {
        container.style.visibility = "hidden";
    }
});
