const cards = document.querySelectorAll(".card");
const parallaxImage = document.querySelector(".parallax_img");
const parallaxSkillsImage = document.querySelector(".parallax-skills_img");
const returnHomeIcon = document.querySelector(".return-home-icon");
const navBar = document.querySelector(".navbar");
const navBarIcon = document.querySelector(".navbar-icon");
const navBarMenu = document.querySelector(".navbar_menu");
const navBarMenuLink = document.querySelectorAll(".navbar_menu_link");
const title = document.querySelector(".title");
const aboutImage = document.querySelector(".about_image");
const aboutText = document.querySelector(".about_text");
const skillsImageWrapper = document.querySelectorAll(".skills_images_wrapper");
const skillsContent = document.querySelector(".skills_content");
const contactSection = document.querySelector(".contact");
const contactLinks = document.querySelectorAll(".contact_link");

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
  parallaxImage.style.transform = `translateY(${scrollY * 0.4}px)`;
  parallaxSkillsImage.style.transform = `translateY(-${scrollY * 0.4}px)`;
  returnHomeIcon.style.visibility = "visible";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      switch (entry.target) {
        case aboutImage:
          aboutImage.style.transform = "translateX(0)";
          aboutImage.style.opacity = "1";
          break;
        case aboutText:
          aboutText.style.transform = "translateX(0)";
          aboutText.style.opacity = "1";
          break;
        case skillsContent:
          skillsContent.style.width = "93%";
          setTimeout(() => {
            skillsImageWrapper.forEach((wrapper, index) => {
              setTimeout(() => {
                wrapper.style.transform = "translateY(0)";
                wrapper.style.opacity = "1";
              }, index * 100 + 100);
            });
          }, 100);
          break;
        case contactSection:
          contactLinks.forEach((link, index) => {
            setTimeout(() => {
              link.style.opacity = "1";
              link.style.transform = "translateY(0)";
            }, index * 300 + 300);
          });
          break;
      }
    }
  });
});

observer.observe(parallaxImage);
observer.observe(parallaxSkillsImage);
observer.observe(returnHomeIcon);
observer.observe(aboutImage);
observer.observe(aboutText);
observer.observe(contactSection);
skillsImageWrapper.forEach((wrapper) => {
  observer.observe(wrapper);
});
observer.observe(skillsContent);
contactLinks.forEach((link) => {
  observer.observe(link);
});

cards.forEach((card) => {
  const cardInfosSection = card.querySelector(".card_infos-section");
  const cardPreviewSection = card.querySelector(".card_preview-section");
  const cardButtons = card.querySelector(
    ".card_infos-section_content .card_infos-section_buttons"
  );
  const cardMobileMediaQuery = window.matchMedia("(max-width:530px)");
  const cardTitle = card.querySelector(".card_title");

  card.addEventListener("click", (e) => {
    if (cardButtons.contains(e.target)) {
      return;
    }
    if (cardPreviewSection.style.opacity === "0") {
      cardPreviewSection.style.opacity = "1";
      cardInfosSection.style.opacity = "0";
      cardTitle.style.opacity = "1";
    } else {
      if (cardMobileMediaQuery.matches) {
        cardTitle.style.opacity = "0";
      }
      cardPreviewSection.style.opacity = "0";
      cardInfosSection.style.opacity = "1";
    }

    if (cardInfosSection.style.opacity === "1") {
      cardButtons.style.display = "flex";
    } else {
      cardButtons.style.display = "none";
    }
  });
});

let isNavbarVisible = false;
navBarIcon.addEventListener("click", () => {
  if (isNavbarVisible) {
    navBarMenu.style.display = "none";
  } else {
    navBarMenu.style.display = "flex";
  }

  isNavbarVisible = !isNavbarVisible;
});
