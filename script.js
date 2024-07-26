// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar color change on scroll
window.onscroll = function () {
    var navbar = document.querySelector("nav");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("bg-gray-700");
    } else {
        navbar.classList.remove("bg-gray-700");
    }
};

// Toggle menu
function toggleFunction() {
    var x = document.getElementById("navDemo");
    x.classList.toggle("w3-show");
}
