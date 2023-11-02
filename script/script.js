const cards = document.querySelectorAll(".card");
const parallaxImage = document.querySelector(".parallax_img");
const parallaxSkillsImage = document.querySelector(".parallax-skills_img");
const title = document.querySelector(".title");
const titleContent = title.querySelectorAll("*");
const returnHomeIcon = document.querySelector(".return-home-icon");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  parallaxImage.style.transform = `translateY(${scrollY * 0.4}px)`;
  parallaxSkillsImage.style.transform = `translateY(-${scrollY * 0.4}px)`;

  titleContent.forEach((element) => {
    element.style.transform = `translateY(${scrollY * 0.5}px)`;
  });

  if (scrollY > 5) {
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
      cardBackSide.style.transform = "rotateY(180deg)";
      card.style.transform = "rotateY(180deg)";
    });
  });

  cardFlipBacksideButton.forEach((button) => {
    button.addEventListener("click", () => {
      cardBackSide.style.visibility = "hidden";
      cardBackSide.style.transform = "rotateY(0deg)";
      card.style.transform = "rotateY(0deg)";
    });
  });
});

const NavBarIcon = document.querySelector(".navbar-icon");
const navbarMenu = document.querySelector(".navbar_menu");

let isNavbarVisible = false;

NavBarIcon.addEventListener("click", () => {
  if (isNavbarVisible) {
    navbarMenu.style.transform = "translateX(100%)";
  } else {
    navbarMenu.style.transform = "translateX(0%)";
  }

  isNavbarVisible = !isNavbarVisible;
});

returnHomeIcon.addEventListener("click", () => {
  // Durée de l'animation (en millisecondes)
  const duration = 1000; // Par exemple, 1 seconde

  const scrollStep = -window.scrollY / (duration / 15);

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
});
