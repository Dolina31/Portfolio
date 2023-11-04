const cards = document.querySelectorAll(".card");
const parallaxImage = document.querySelector(".parallax_img");
const parallaxSkillsImage = document.querySelector(".parallax-skills_img");
const returnHomeIcon = document.querySelector(".return-home-icon");
const navBar = document.querySelector(".navbar");
const NavBarIcon = document.querySelector(".navbar-icon");
const navbarMenu = document.querySelector(".navbar_menu");
const aboutImage = document.querySelector(".about_image");
const aboutText = document.querySelector(".about_text");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  console.log(scrollY);

  parallaxImage.style.transform = `translateY(${scrollY * 0.4}px)`;
  parallaxSkillsImage.style.transform = `translateY(-${scrollY * 0.4}px)`;

  if (scrollY > 10) {
    returnHomeIcon.style.visibility = "visible";
  } else {
    returnHomeIcon.style.visibility = "hidden";
  }

  if (scrollY > 250) {
    aboutImage.style.transform = "translateX(0)";
    aboutImage.style.opacity = "1";
    aboutText.style.transform = "translateX(0)";
    aboutText.style.opacity = "1";
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
      card.style.transform = "rotateY(0deg)";
      card.style.backfaceVisibility = "visible";
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
