let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney plus, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
    image: "images/slider 2.PNG"
  },
  {
    name: "loki",
    des:
      "Loki Laufeyson, known by adoption as Loki Odinson and by his title as the God of Mischief, is a fictional character portrayed by Tom Hiddleston in the Marvel Cinematic Universe (MCU) media franchise, based on the Marvel Comics character of the same name and the Norse mythological god of the same name.",
    image: "images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des:
      "WandaVision is, however, ultimately Wanda’s story. This is a powerful superhero (it’s mentioned at one point how she almost took out Thanos by herself) who is dealing with the unbearable pain of losing her parents, her twin brother Pietro, and her partner Vision (who she was forced to kill and then watch as he died all over again).",
    image: "images/slider 3.PNG"
  },
  {
    name: "Raya And The Last Dragon",
    des:
      "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. However, when sinister monsters known as the Druun threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, those same monsters have returned, and it's up to a lone warrior to track down the last dragon and stop the Druun for good.",
    image: "images/slider 4.PNG"
  },
  {
    name: "luca",
    des:
      "Set in a beautiful seaside town on the Italian Riviera, Disney and Pixar’s original feature film “Luca” is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. ",
    image: "images/slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
