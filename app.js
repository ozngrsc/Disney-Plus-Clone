const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  /* creating DOM element */
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  /* attaching all elements */
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  /* setting up image */
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  /* setting elements classname */
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  /* adding slide effects */

  if (sliders.length) {
    sliders[0].style.marginLeft =
      "calc(-${100 * (sliders.lenght - 2)} - ${30 * (sliders.length - 2)}px)";
  }
};

createSlide();
