const parallaxImage = document.querySelector(".parallax_img");
const parallaxSkillsImage = document.querySelector(".parallax-skills_img");

const title = document.querySelector(".title");
const titleContent = title.querySelectorAll("*");
const lineImage = title.querySelector(".line_image");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  parallaxImage.style.transform = `translateY(${scrollY * 0.4}px)`;
  parallaxSkillsImage.style.transform = `translateY(-${scrollY * 0.4}px)`;

  titleContent.forEach((elements) => {
    elements.style.transform = `translateY(${scrollY * 0.5}px)`;
  });
});

window.addEventListener("load", () => {
  lineImage.style.width = "450px";
});
