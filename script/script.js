const cards = document.querySelectorAll(".card");
const parallaxImage = document.querySelector(".parallax_img");
const parallaxSkillsImage = document.querySelector(".parallax-skills_img");
const titlePosition = document.querySelector(".title_position");
const returnHomeIcon = document.querySelector(".return-home-icon");
const navBar = document.querySelector(".navbar");
const NavBarIcon = document.querySelector(".navbar-icon");
const navbarMenu = document.querySelector(".navbar_menu");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  parallaxImage.style.transform = `translateY(${scrollY * 0.4}px)`;
  parallaxSkillsImage.style.transform = `translateY(-${scrollY * 0.4}px)`;

  titlePosition.style.transform = `translateY(-${scrollY * 0.4}px)`;

  if (scrollY > 10) {
    returnHomeIcon.style.visibility = "visible";
  } else {
    returnHomeIcon.style.visibility = "hidden";
  }
});

cards.forEach((card) => {
  const cardBackSide = card.querySelector(".card_backside");
  const cardFlipFrontsideButton = card.querySelectorAll(
    ".card_flip_frontside_button"
  );
  const cardFlipBacksideButton = card.querySelectorAll(
    ".card_flip_backside_button"
  );

  cardFlipFrontsideButton.forEach((button) => {
    button.addEventListener("click", () => {
      cardBackSide.style.visibility = "visible";
      card.style.transform = "rotateY(180deg)";
    });
  });

  cardFlipBacksideButton.forEach((button) => {
    button.addEventListener("click", () => {
      cardBackSide.style.visibility = "hidden";
      card.style.transform = "rotateY(0deg)";
    });
  });
});

let isNavbarVisible = false;

NavBarIcon.addEventListener("click", () => {
  if (isNavbarVisible) {
    navbarMenu.style.display = "none";
  } else {
    navbarMenu.style.display = "flex";
  }

  isNavbarVisible = !isNavbarVisible;
});
