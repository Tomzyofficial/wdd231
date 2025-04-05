const message = document.getElementById("visitor-message");
const lastVisit = localStorage.getItem("lastVisit");

const now = new Date();
const day = 24 * 60 * 60 * 1000;

if (!lastVisit) {
  // First visit
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const previousVisit = new Date(lastVisit);
  const diffMs = now - previousVisit;

  if (diffMs < day) {
    message.textContent = "Back so soon! Awesome!";
  } else {
    const diffDays = Math.floor(diffMs / day);
    const dayLabel = diffDays === 1 ? "day" : "days";
    message.textContent = `You last visited ${diffDays} ${dayLabel} ago.`;
  }
}

// Store the current visit time
localStorage.setItem("lastVisit", now.toLocaleString());
