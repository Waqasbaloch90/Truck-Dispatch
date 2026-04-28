



function toggleMenu(){
    document.getElementById("Navlinks").classList.toggle("active");
}

// animation of navbar


const links = document.querySelectorAll(".nav-links a");
const underline = document.querySelector(".underline");

function moveUnderline(element) {
  const rect = element.getBoundingClientRect();
  const parentRect = element.closest(".nav-links").getBoundingClientRect();

  underline.style.width = rect.width + "px";
  underline.style.left = (rect.left - parentRect.left) + "px";
}

// set default position on load
window.addEventListener("load", () => {
  const active = document.querySelector(".nav-links a.active");
  if (active) moveUnderline(active);
});

// click event
links.forEach(link => {
  link.addEventListener("click", function () {
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
    moveUnderline(this);
  });
});


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Form submitted successfully!");

  // Reset form
  this.reset();
});

// driver regitration

function showSignup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

function showLogin() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}