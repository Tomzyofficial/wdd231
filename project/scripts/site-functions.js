// menu toggler
function toggler() {
  // toggler nav menu
  const bars = document.getElementById("bars");
  const navMenu = document.querySelector("ul");

  const togglerBars = () => {
    navMenu.classList.toggle("show");
  }

  bars.addEventListener("click", togglerBars);

  let isOpen = false;
  bars.addEventListener("click", () => {
    if (!isOpen) {
      bars.classList.add("open");
      isOpen = true;
    } else {
      bars.classList.remove("open");
      isOpen = false;
    }
  })

  return () => {
    bars.removeEventListener("click", togglerBars)
  }

}
toggler();


/* $(document).ready(function () {
  $('#icon').click(function () {
    $('ul').toggleClass('show');
  })
}); */

// footer year change
/* let date = new Date().getFullYear();
document.getElementById("footer-year").innerHTML = date; */