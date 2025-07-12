import { app as firebase } from "./firebase-config.js";

const talkBtn = document.getElementById('talk-btn');
talkBtn.addEventListener('click', () => {
  location.href = '/#contact';
})

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const to = "designodevelopment@gmail.com";
  const subject = encodeURIComponent("Designo Project Inquiry");

  const name = contactForm.fname.value + " " + contactForm.lname.value;

  const tier = contactForm.tier.value;

  let plans = tier.split(" - ");
  const projectType = plans[0];
  const budget = plans[1];

  const message = contactForm.message.value;

  const body = encodeURIComponent(
    `
    Hello,
        
    I would like a quote for my next endeavor. I will need the ${projectType} level and I am looking to spend ${budget}.
    Some more info about my project:
        
    ${message}
        
    --${name}`
  )

  // Idk why u added these but i just left them in ig
  const cc = encodeURIComponent("copy@example.com");
  const bcc = encodeURIComponent("hidden@example.com");

  window.open(`mailto:${to}?subject=${subject}&body=${body}`);

  contactForm.reset();

  showNotification("Thanks! Your form was successfully submitted.", "success");

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