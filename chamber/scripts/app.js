const d = new Date();
const fullyear = d.getFullYear();

document.getElementById("currentyear").innerHTML = fullyear;
document.getElementById("lastModified").innerHTML = document.lastModified;

// menu toggler
function toggler() {
  // toggler nav menu
  const navMenu = document.querySelector(".nav-menu");
  const togglerIcon = document.getElementById("toggler-icon");
  togglerIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // animation for toggler icon
  let isOpen = false;
  const toggler = document.getElementById("toggler-icon");
  toggler.addEventListener("click", () => {
    if (!isOpen) {
      toggler.classList.add("open");
      isOpen = true;
    } else {
      toggler.classList.remove("open");
      isOpen = false;
    }
  })
}
toggler();


// Fetch data from the data file
async function fetchData() {
  const url = "data/members.json";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    res.forEach(element => {
      const createSection = document.createElement("section");
      createSection.classList.add("card");
      createSection.innerHTML = `
        <div class="top-card">
          <h2>${element.name}</h2>
          <p>${element.tagline}</p>
        </div>
        <div class="bottom">
          <img src="images/${element.image}" alt="site image" loading="lazy">
          <div class="contact">
            <p><strong>EMAIL:</strong> ${element.email}</p>
            <p><strong>PHONE:</strong> ${element.phone}<p/>
            <p><strong>URL:</strong> ${element.website}<p/>
          </div>
        </div>
      `;
      document.querySelector(".cards").appendChild(createSection);
    });
  } catch (error) {
    console.log(error.message);
  }
}
fetchData();