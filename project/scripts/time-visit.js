// Function to handle visitor dialog
function handleVisitorDialog() {
  const dialog = document.getElementById("dialog")
  const message = document.getElementById("visitor-message")
  const closeButton = document.getElementById("close-dialog")

  // Get the last visit time from localStorage
  const lastVisit = localStorage.getItem("lastVisit")
  const now = new Date()
  const day = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

  // Set the appropriate message based on visit history
  if (!lastVisit) {
    // First visit
    message.textContent = "Welcome! Let us know if you have any questions."
  } else {
    const previousVisit = new Date(lastVisit)
    const diffMs = now - previousVisit

    if (diffMs < day) {
      message.textContent = "Back so soon! Awesome!"
    } else {
      const diffDays = Math.floor(diffMs / day)
      const dayLabel = diffDays === 1 ? "day" : "days"
      message.textContent = `You last visited ${diffDays} ${dayLabel} ago.`
    }
  }

  // Show the dialog
  dialog.showModal()

  // Store the current visit time
  localStorage.setItem("lastVisit", now.toString())

  // Add event listener to close button
  closeButton.addEventListener("click", () => {
    dialog.close()
  })
}

// Wait for the DOM to be fully loaded before showing the dialog
document.addEventListener("DOMContentLoaded", handleVisitorDialog)
