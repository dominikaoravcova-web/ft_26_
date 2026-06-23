const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const meno = document.getElementById("inputEmail4").value;
    alert("Ahoj " + meno + ", ďakujeme za tvoju objednávku! Náš staff ťa bude kontaktovať.");
});