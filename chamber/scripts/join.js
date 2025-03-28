// open modal buttons
const np = document.querySelector("#np-membership a");
const bronze = document.querySelector("#bronze-membership a");
const silver = document.querySelector("#silver-membership a");
const gold = document.querySelector("#gold-membership a");

// close buttons
const closeNpModal = document.querySelector("#np-membership-modal button");
const closeBronzeModal = document.querySelector("#bronze-membership-modal button");
const closeSilverModal = document.querySelector("#silver-membership-modal button");
const closeGoldModal = document.querySelector("#gold-membership-modal button");

// modal dialog 
const npModal = document.querySelector("#np-membership-modal");
const bronzeModal = document.querySelector("#bronze-membership-modal");
const silverModal = document.querySelector("#silver-membership-modal");
const goldModal = document.querySelector("#gold-membership-modal");

// open modal event listener
np.addEventListener("click", () => {
  npModal.showModal();
})

bronze.addEventListener("click", () => {
  bronzeModal.showModal();
})
silver.addEventListener("click", () => {
  silverModal.showModal();
})
gold.addEventListener("click", () => {
  goldModal.showModal();
})


// close modal event listener
closeNpModal.addEventListener("click", () => {
  npModal.close();
})
closeBronzeModal.addEventListener("click", () => {
  bronzeModal.close();
})
closeSilverModal.addEventListener("click", () => {
  silverModal.close();
})
closeGoldModal.addEventListener("click", () => {
  goldModal.close();
});

function showHiddenText() {
  document.getElementById("timestamp").value = new Date().toLocaleString();
};
showHiddenText();