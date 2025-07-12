import { app as firebase } from "./firebase-config.js";

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();

});

const talkBtn = document.getElementById('talk-btn');
talkBtn.addEventListener('click', () => {
  location.href = '/#contact';
})

const mobileTalkBtn = document.getElementById('mobile-talk-btn');
mobileTalkBtn.addEventListener('click', (e) => {
    location.href = '/#contact';
    mobileNavMenu.classList.remove("active");
    document.getElementById("#contact").scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
})


const btns = document.querySelectorAll("main #pricing .tiers .tier .button-container button")
const dropdown = document.querySelector("#tier")
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetEl = document.getElementById('contact')
        targetEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
        dropdown.value = btn.classList.value.split(" ")[1];
    })
})

const burger = document.querySelector("#burger");
const closeBtn = document.querySelector('.mobile-menu-close')
const mobileNavMenu = document.querySelector(".mobile-menu-wrapper");

burger.addEventListener('click', () => {
    mobileNavMenu.classList.add("active");
})

closeBtn.addEventListener('click', () => {
    mobileNavMenu.classList.remove("active");
})

const mobileNavBtns = document.querySelectorAll(".mobile-menu > a")
mobileNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        const target = e.target.closest('a[href^="#"]')
        const id = target.getAttribute('href')
        const targetElement = document.querySelector(id)
        if (targetElement) {
            mobileNavMenu.classList.remove("active");
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    })
})


document.addEventListener(
  "error",
  function (e) {
    if (e.target.tagName === "IMG") {
      e.target.src =
        "/placeholder.svg?height=400&width=600&text=Image+Not+Found";
      e.target.alt = "Image not available";
    }
  },
  true
);

// Smooth scrolling for all anchor links
document.addEventListener("click", function (e) {
  const target = e.target.closest('a[href^="#"]');
  if (target) {
    e.preventDefault();
    const targetId = target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});

//nav scroll anim
var prevScrollpos = window.scrollY;
window.onscroll = function() {
    // console.log(window.scrollY)
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos || window.scrollY <= 150) {
        document.getElementById("header-wrapper").style.top = "0";
    } else {
        document.getElementById("header-wrapper").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}



function initializeScrollAnimations() {
    // Select all elements you want to animate
    const animatedElements = document.querySelectorAll(
        '.drop-in, .fade-in-up, .fade-in-left, .fade-in-right, .fade-in-zoom'
    );

    // Intersection Observer options
    const observerOptions = {
        threshold: 0.25, //percent of obj visible
        rootMargin: '0px 0px -50px 0px' //observe this many px before enter
    };

    // Create the observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing all elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}