document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelector(".bars");
  const menu = document.querySelector(".top-middle");
  const closeBtn = document.querySelector(".close");

  bars.addEventListener("click", () => {
    menu.classList.add("show-menu");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !bars.contains(e.target)) {
      menu.classList.remove("show-menu");
    }
  });
});