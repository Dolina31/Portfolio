const navBar = document.querySelector(".navbar-flex");

window.addEventListener("scroll", () => {
  scrollPosition = window.scrollY;

  if (scrollPosition > 20) {
    navBar.style.paddingTop = "10px";
    navBar.style.paddingBottom = "10px";
  } else {
    navBar.style.paddingTop = "30px";
    navBar.style.paddingBottom = "30px";
  }
});
