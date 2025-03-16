// When the grid and list buttons are clicked do something 
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const cards = document.querySelector(".cards");

gridBtn.addEventListener("click", () => {
  // cards.classList.add("grid");
  cards.classList.remove("list");
})

listBtn.addEventListener("click", () => {
  // cards.classList.remove("grid");
  cards.classList.add("list");

})
