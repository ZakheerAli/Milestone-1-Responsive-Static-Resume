var languageSec = document.querySelector(".language");
var toggleButton = document.querySelector("#toggle");
var container = document.querySelector(".container");
var changeTheme = document.querySelector("#theme");
toggleButton.addEventListener("click", function () {
    if (languageSec.style.display === "none") {
        languageSec.style.display = "block";
    }
    else {
        languageSec.style.display = "none";
    }
});
changeTheme.addEventListener("click", function () {
    if (container.style.backgroundColor = "white") {
        container.style.backgroundColor = "black";
    }
    else {
        container.style.backgroundColor = "black";
    }
});
