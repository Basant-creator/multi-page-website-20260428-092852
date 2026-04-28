// script.js
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const logo = document.querySelector(".logo");
    const hero = document.querySelector(".hero");
    const features = document.querySelector(".features");
    const testimonials = document.querySelector(".testimonials");
    const contact = document.querySelector(".contact");
    const form = document.querySelector("form");

    // Smooth scrolling
    hero.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    features.addEventListener("click", function () {
        window.scrollTo({ top: features.offsetTop, behavior: "smooth" });
    });

    testimonials.addEventListener("click", function () {
        window.scrollTo({ top: testimonials.offsetTop, behavior: "smooth" });
    });

    contact.addEventListener("click", function () {
        window.scrollTo({ top: contact.offsetTop, behavior: "smooth" });
    });

    // Mobile menu toggle
    logo.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Form handling
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.querySelector("input[name='name']").value;
        const email = document.querySelector("input[name='email']").value;
        const message = document.querySelector("textarea[name='message']").value;

        // Send form data to server
        fetch("/send-form-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    });
});