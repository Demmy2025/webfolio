// Smooth scroll for "See Features" button
const ctaBtn = document.querySelector(".cta-btn");
ctaBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const featuresSection = document.querySelector("#features");
  featuresSection.scrollIntoView({ behavior: "smooth" });
});

// Popup alert when clicking CTA button
ctaBtn.addEventListener("dblclick", function() {
  alert("You're excited to see the features! 🚀");
});

// Feature card hover animation using JS (extra scale)
const featureCards = document.querySelectorAll(".feature-card");
featureCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.07)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1.05)";
  });
});

console.log("Landing Page Loaded 🚀");
