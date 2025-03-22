// Fetch data from the data file
async function fetchData() {
  const url = "data/members.json";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // sort the data for random display
      const sorted = data.sort(() => 0.5 - Math.random());
      const limit = sorted.slice(0, 3);
      limit.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
          <div class="top-card">
            <h5>${element.name}</h5>
          </div>
          <div class="bottom">
            <img src="images/${element.image}" alt="site image" loading="lazy">
            <div class="contact">
              <p><strong>PHONE:</strong> ${element.phone}<p/>
              <p><strong>ADDRESS:</strong> ${element.address}<p/>
              <p><strong>URL:</strong> ${element.website}<p/>
              <p><strong>MEMBERSHIP:</strong> ${element.membershipLevel}<p/>
            </div>
          </div>
        `;
        document.querySelector(".members-cards").appendChild(div)
      });
    })

}
fetchData();