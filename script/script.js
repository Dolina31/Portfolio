const cards = document.querySelectorAll(".card");
const parallaxImage = document.querySelector(".parallax_img");
const parallaxSkillsImage = document.querySelector(".parallax-skills_img");
const title = document.querySelector(".title");
const titleContent = title.querySelectorAll("*");
const lineImage = title.querySelector(".line_image");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  parallaxImage.style.transform = `translateY(${scrollY * 0.4}px)`;
  parallaxSkillsImage.style.transform = `translateY(-${scrollY * 0.4}px)`;

  titleContent.forEach((element) => {
    element.style.transform = `translateY(${scrollY * 0.5}px)`;
  });
});

window.addEventListener("load", () => {
  lineImage.style.width = "450px";
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
