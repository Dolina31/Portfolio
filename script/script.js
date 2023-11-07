const cards = document.querySelectorAll(".card");
const parallaxImage = document.querySelector(".parallax_img");
const parallaxSkillsImage = document.querySelector(".parallax-skills_img");
const returnHomeIcon = document.querySelector(".return-home-icon");
const navBar = document.querySelector(".navbar");
const NavBarIcon = document.querySelector(".navbar-icon");
const navBarMenu = document.querySelector(".navbar_menu");
const navBarMenuLink = document.querySelectorAll(".navbar_menu_link");
const title = document.querySelector(".title");
const aboutImage = document.querySelector(".about_image");
const aboutText = document.querySelector(".about_text");
const skillsImageWrapper = document.querySelectorAll(".skills_images_wrapper");
const skillsContent = document.querySelector(".skills_content");
const contactLinks = document.querySelectorAll(".contact_link");
const cardBacksideLine = document.querySelectorAll(".card_backside_line");

window.addEventListener("load", () => {
  navBar.style.opacity = "1";
  navBar.style.padding = "30px 0px";

  navBarMenuLink.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1";
      link.style.transform = "translateY(0)";
    }, index * 100 + 100);
  });

  title.style.width = "100%";
  title.style.opacity = "1";
});

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);

  parallaxImage.style.transform = `translateY(${scrollY * 0.4}px)`;
  parallaxSkillsImage.style.transform = `translateY(-${scrollY * 0.4}px)`;

  if (scrollValue > 0.18) {
    returnHomeIcon.style.visibility = "visible";
  } else {
    returnHomeIcon.style.visibility = "hidden";
  }

  if (scrollValue > 0.3) {
    aboutImage.style.transform = "translateX(0)";
    aboutImage.style.opacity = "1";
    aboutText.style.transform = "translateX(0)";
    aboutText.style.opacity = "1";
  }

  if (scrollValue > 0.51) {
    skillsImageWrapper.forEach((wrapper, index) => {
      setTimeout(() => {
        wrapper.style.transform = "translateY(0)";
        wrapper.style.opacity = "1";
      }, index * 100 + 100);
    });
    skillsContent.style.width = "93%";
  }

  if (scrollValue == 1) {
    contactLinks.forEach((link, index) => {
      setTimeout(() => {
        link.style.opacity = "1";
        link.style.transform = "translateY(0)";
      }, index * 350 + 350);
    });
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
    navBarMenu.style.display = "none";
  } else {
    navBarMenu.style.display = "flex";
  }

  isNavbarVisible = !isNavbarVisible;
});
