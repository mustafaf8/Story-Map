document.getElementById("hamburger-btn").onclick = function() { 
    var nav = document.querySelector(".navbar");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
};

        
