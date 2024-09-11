const cards = document.querySelectorAll(".card");
const parallaxImage = document.querySelector(".parallax_img");
const parallaxSkillsImage = document.querySelector(".parallax-skills_img");
const returnHomeIcon = document.querySelector(".return-home-icon");
const navBar = document.querySelector(".navbar");
const navBarIcon = document.querySelector(".navbar-icon");
const navBarMenu = document.querySelector(".navbar_menu");
const navBarMenuLink = document.querySelectorAll(".navbar_menu_link");
const title = document.querySelector(".title_position h1");
const titleChild = document.querySelector(".title_child2");
const aboutImage = document.querySelector(".about_image");
const aboutText = document.querySelector(".about_text p");
const skillsImageWrapper = document.querySelectorAll(".skills_images_wrapper");
const skillsContent = document.querySelector(".skills_content");
const contactSection = document.querySelector(".contact");
const contactLinks = document.querySelectorAll(".contact_link");
const scrollItems = document.querySelector(".scroll");

window.addEventListener("load", () => {
  if (window.innerWidth < 600) {
    navBar.style.padding = "10px 0px";
  } else {
    navBar.style.padding = "20px 0px";
  }
  navBar.style.opacity = "1";

  titleChild.style.opacity = "1";
  titleChild.style.transform = "translateY(0px)";

  navBarMenuLink.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1";
      link.style.transform = "translateY(0)";
    }, index * 100 + 100);
  });

  title.style.opacity = "1";
});

let isNavbarVisible = false;

navBarIcon.addEventListener("click", () => {
  if (isNavbarVisible) {
    navBarMenu.classList.remove("active");
  } else {
    navBarMenu.classList.add("active");
  }

  isNavbarVisible = !isNavbarVisible;
});

window.addEventListener("scroll", () => {
  scrollItems.style.opacity = "0";
  parallaxImage.style.transform = `translateY(${scrollY * 0.4}px)`;
  returnHomeIcon.style.visibility = "visible";
});

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.35,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      switch (entry.target) {
        case aboutImage:
          aboutImage.style.transform = "translateX(0)";
          aboutImage.style.opacity = "1";
          break;
        case aboutText:
          aboutText.style.transform = "translateY(0)";
          aboutText.style.opacity = "1";
          break;
        case skillsContent:
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
}, options);

observer.observe(parallaxImage);
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

//Création des cards
fetch("/projects.json")
  .then((response) => response.json())
  .then((data) => {
    const projectsContainer = document.querySelector(".card-flex");
    console.log(projectsContainer);

    let cardsHTML = "";
    data.forEach((project) => {
      const formattedResume = project.resume.replace(/\n/g, "<br>");

      // Générer les tags avec les icônes
      const formattedTags = project.tags
        .map((tag) => `<div class="card_tag">${tag}</div>`)
        .join(" ");

      // Ajouter un lien "voir le site" seulement si l'URL est définie
      const viewSiteButton = project.url
        ? `<a href="${project.url}" target="_blank">voir le site</a>`
        : "";

      cardsHTML += `
        <div class="card">
          <div class="card_content">
            <div class="card_cover-img"> 
              <img src="${project.cover}" alt="${project.coverAlt}">
            </div> 
            <div class="card_tags">${formattedTags}</div>
            <h3>${project.title}</h3>
            <p>${formattedResume}</p>
            <div class="card_buttons">
              ${viewSiteButton}
              <a href="${project.codeUrl}" target="_blank">voir le code</a>
            </div>
          </div>
        </div>
      `;
    });

    projectsContainer.innerHTML = cardsHTML;
  })
  .catch((error) => {
    console.error("Erreur lors du chargement des projets:", error);
  });
