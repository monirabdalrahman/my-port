document.addEventListener("DOMContentLoaded", function () {

    // ===== Title Animation =====
    const titles = [
        "HR Graduate",
        "Novice Researcher",
        "Social Advocate",
        "Policy Enthusiast"
    ];
    const changingText = document.getElementById("changing-text");

    let index = 0;

    function changeTitle() {
        changingText.style.opacity = 0;

        setTimeout(() => {
            changingText.textContent = titles[index];
            changingText.style.opacity = 1;
            index = (index + 1) % titles.length;
        }, 400);
    }

    changingText.textContent = titles[0];
    changingText.style.transition = "opacity 0.4s ease";

    setInterval(changeTitle, 2000);


    // ===== Navbar Scroll Effect =====
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".header");
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });


    // ===== Mobile Menu Toggle =====
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }

});
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});