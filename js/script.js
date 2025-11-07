
// écriture
let texts = ["THE BEST DEVELOPER", "A PROFESSIONAL CODER"];
let counter = 0;
let index = 0;
let textContainer = document.getElementById("textContainer");

function typeText() {
  let currentText = texts[counter];
  textContainer.textContent = currentText.substring(0, index);
  index++;

  if (index > currentText.length) {
    clearInterval(intervalId);
    setTimeout(() => {
      counter = (counter + 1) % texts.length;
      index = 0;
      intervalId = setInterval(typeText, 100);
    }, 800);
  }
}

let intervalId = setInterval(typeText, 100);

class FlyingPointsCanvas {
  constructor(parentSelector, speed, numPoints, pointSize, opacity) {
    this.canvas = document.createElement("canvas");
    this.parent = document.querySelector(parentSelector);
    this.parent.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.flyingPoints = [];

    this.speed = speed || 1;
    this.numPoints = numPoints || 50;
    this.pointSize = pointSize || 50;
    this.opacity = opacity || 10;

    this.initializeCanvas();
    this.createFlyingPoints();
    this.animate();
  }

  initializeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = this.parent.offsetHeight; // Set canvas height to parent div height

    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = this.parent.offsetHeight;
      this.createFlyingPoints();
    });
  }

  createFlyingPoints() {
    this.flyingPoints = [];
    for (let i = 0; i < this.numPoints; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      const size = Math.random() * this.pointSize + 1;
      const speed = (Math.random() - 0.5) * 2 * this.speed;
      this.flyingPoints.push({ x, y, size, speed });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const point of this.flyingPoints) {
      point.x += point.speed;
      if (point.x > this.canvas.width + point.size) {
        point.x = 0 - point.size;
        point.y = Math.random() * this.canvas.height;
      }

      this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      this.ctx.beginPath();
      this.ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Instanciate the FlyingPointsCanvas class with custom parameters
const flyingPointsCanvas = new FlyingPointsCanvas("#home", 0.5, 75, 5, 0.3);

function card(text, icon) {
  const container = document.querySelector(".featuresContainer");
  if (!container) return;
  const div = document.createElement("div");
  div.className = "featuresItems mb-10";
  div.innerHTML = `${icon}
                   <h2>${text}</h2>`;
  container.appendChild(div);
}

card("RESPONSIVE WEBSITES", `<i class="fa-solid fa-mobile"></i>`);
card("FRONT-END DEVELOPPER", `<i class="fa-solid fa-desktop"></i>`);
card("BACK-END DEVELOPPER", `<i class="fa-solid fa-database"></i>`);

function skillsPctg(language, pourcentage,logo) {
  const divBars = document.getElementById("bars");
  divBars.className = "bars";
  const divLanguages = document.createElement("div");
  divLanguages.className = language.toLowerCase();
  const h3 = document.createElement("h3");
  h3.innerHTML = `${language.toUpperCase()}  ${logo}`;
  const divBarSkill = document.createElement("div");
  divBarSkill.className = "bar-skill";
  const divBarSkillProgress = document.createElement("div");
  divBarSkillProgress.className = "bar-skill-progress";
  const divBarSkillDot = document.createElement("div");
  divBarSkillDot.className = "bar-skill-dot left-percentage";
  const divBarSkillPercentage = document.createElement("div");
  divBarSkillPercentage.textContent = `${pourcentage}%`;
  divBarSkillPercentage.className = "bar-skill-percentage";

  divBars.append(divLanguages);
  divLanguages.append(h3, divBarSkill);
  divBarSkill.append(
    divBarSkillProgress,
    divBarSkillDot,
    divBarSkillPercentage
  );
  divBarSkillProgress.style.setProperty("--target-width", `${pourcentage}%`);

  setTimeout(() => {
    divBarSkillProgress.style.width = `${pourcentage}%`;
    divBarSkillDot.style.left = `${pourcentage}%`;
    divBarSkillPercentage.style.left = `${pourcentage}%`;
  }, 100);
}
skillsPctg("HTML", 100,`<i class="bi bi-filetype-html"></i>`);
skillsPctg("CSS/SASS", 100, `<i class="bi bi-css"></i>`);
skillsPctg("JS", 80,`<i class="bi bi-javascript"></i>`);
skillsPctg("REACT", 15,`<i class="fi fi-brands-atom"></i>`);

function loadProjects(titre, image, lien) {
  const divProjectsContent = document.getElementById("projects-content");
  divProjectsContent.className = "mt-5";
  const divSites = document.createElement("div");
  divSites.id = "sites";
  const divSitesContainer = document.createElement("div");
  const imgSite = document.createElement("img");
  imgSite.src = image;
  const h2 = document.createElement("h2");
  h2.textContent = titre;
  const btn = document.createElement("button");
  btn.className = "mt-5 mb-5";
  const a = document.createElement("a");
  a.href = lien;
  a.textContent = "Aller sur la page";

  divProjectsContent.append(divSites);
  divSites.appendChild(divSitesContainer);
  divSitesContainer.append(imgSite, h2, btn);
  btn.appendChild(a);
}
loadProjects("Le journal du lundi", "img/site11.png",);
loadProjects("Mon CV en ligne", "img/site2.png");
loadProjects("Agence Ledor", "img/site31.png");
loadProjects("Café Florette", "img/s41.png");

addEventListener("DOMContentLoaded", () => {
  console.log("c'est chargé");
});
