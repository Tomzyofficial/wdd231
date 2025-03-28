// Function to get URL parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  document.getElementById("msg").textContent = "Thank you for your interest in joining our chamber of commerce. Stay tuned for exclusive offers!";
  document.getElementById("fname").textContent = params.get("fname");
  document.getElementById("lname").textContent = params.get("lname");
  document.getElementById("email").textContent = params.get("email");
  document.getElementById("phone").textContent = params.get("phone");
  document.getElementById("orgname").textContent = params.get("orgname");
  document.getElementById("timestamp").textContent = params.get("timestamp");
}

// Run function on page load
window.onload = getQueryParams;
