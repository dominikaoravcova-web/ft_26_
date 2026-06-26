document.getElementById("orderform221").addEventListener("click", function(event) {
    event.preventDefault();

    const meno = document.getElementById("meno").value;

    if (meno === "") {
        alert("Prosím zadajte meno.");
        return;
    }

    alert(`AHOJ ${meno}, tvoju objednávku sa pokúsime spracovať čo najskôr, ďakujeme! ☕`);
});