let bars = document.querySelector(".bars");
let menu = document.querySelector(".top-middle");
let closeBtn = document.querySelector(".close");

bars.addEventListener("click", () => {
  menu.classList.add("show-menu");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show-menu");
});

