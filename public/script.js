let details = [
  [
    "EMI & MORE",
    "Balance Transfer",
    "View all transactions made on your account in the last 24 months.",
    "./assets/balancetransfer.png",
    "w-48 lg:w-60 m-auto -rotate-[24deg]"
  ],
  [
    "PAYMENTS",
    "Easy Bill Pay",
    "Pay your utility bills with convenience and on time.",
    "./assets/billpay.png",
    "w-36 lg:w-42 m-auto rotate-[40deg]"
  ],
  [
    "CARD FEATURES",
    "Contactless Pay",
    "Make instant, easy and safe payments with a tap of your card or smartphone.",
    "./assets/Contactless.png",
    "w-20 lg:w-28 m-auto "
  ]
];

const title = document.querySelector(".title");
const subTitle = document.querySelector(".subTitle");
const description = document.querySelector(".description");
const image = document.querySelector(".image");
const sliderIndicator = document.querySelector(".slider-indicator");

let currentSlideIndex = 0;


//function for updating the values from details array
function updateSlide(index) {
  title.innerText = details[index][0];
  subTitle.innerText = details[index][1];
  description.innerText = details[index][2];
  image.src = details[index][3];
  image.className = details[index][4];
  currentSlideIndex = index; 

  updateSliderIndicator();
}


//function for updating the indicator points
function updateSliderIndicator() {
  sliderIndicator.innerHTML = "";

  for(let i = 0; i < details.length; i++) {
    const Dot = document.createElement("div");
    Dot.className = "w-2 h-2 rounded-full border-2 border-[#D5D5EA] mr-2";
    if(i === currentSlideIndex) {
      Dot.classList.add("bg-blue-500");
    }
    sliderIndicator.appendChild(Dot);
  }
}

//to get previous element
function goPrev() {
  currentSlideIndex = (currentSlideIndex - 1 + details.length) % details.length;
  updateSlide(currentSlideIndex);
}

//to get next element
function goNext() {
  currentSlideIndex = (currentSlideIndex + 1) % details.length;
  updateSlide(currentSlideIndex);
}

// initial slide display
updateSlide(currentSlideIndex);
updateSliderIndicator();

// autoplay
const autoplayInterval = 3000; 
setInterval(goNext, autoplayInterval);
