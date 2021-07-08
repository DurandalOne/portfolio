const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    nav.classList.remove("menu-btn");

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
