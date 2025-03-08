const d = new Date();
const fullyear = d.getFullYear();

document.getElementById("currentyear").innerHTML = fullyear;
document.getElementById("lastModified").innerHTML = document.lastModified;

// menu toggler
$(document).ready(function () {
  $("#menu-icon").click(function () {
    $("nav").toggleClass('show');
  });
})
