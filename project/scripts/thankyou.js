// Function to get URL parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  document.getElementById("msg").textContent = "Thank you! we've received your message. We will respond shortly";
  document.getElementById("fname").textContent = params.get("fname");
  document.getElementById("email").textContent = params.get("email");
  document.getElementById("message").textContent = params.get("msg");

}

// Run function on page load
window.onload = getQueryParams;
