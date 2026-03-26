// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Active Navbar Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// Reveal Animation
const reveals = document.querySelectorAll(".project-card, .about-content, .home-text");

window.addEventListener("scroll", () => {
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            reveal.classList.add("show");
        }
    });
});


// Contact Form Alert
document.querySelector(".simple-form").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully!");
    this.reset();
});

(function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // replace this
})();

document.querySelector(".simple-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(() => {
            alert("Message sent successfully!");
            this.reset();
        }, (error) => {
            alert("Failed to send message. Try again.");
            console.log(error);
        });
});


// Typing Effect
const text = "Aspiring ICT Professional | Future Cybersecurity Specialist";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;