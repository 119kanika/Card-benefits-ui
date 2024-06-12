let details = [
  [
    "EMI & MORE",
    "Balance Transfer",
    "View all transactions made on your account in the last 24 months.",
    "../assets/balance transfer.png",
    "w-48 lg:w-60 m-auto -rotate-[24deg]"
  ],
  [
    "PAYMENTS",
    "Easy Bill Pay",
    "Pay your utility bills with convenience and on time.",
    "../assets/bill pay.png",
    "w-48 lg:w-42 m-auto rotate-[20deg]"
  ],
  [
    "CARD FEATURES",
    "Contactless Pay",
    "Make instant, easy and safe payments with a tap of your card or smartphonexmxmxmxmx.",
    "../assets/Contactless.png",
    "w-20 lg:w-28 m-auto"
  ]
];

const sliderContainer = document.querySelector(".slider-container")
const title = document.querySelector(".title");
const subTitle = document.querySelector(".subTitle");
const description = document.querySelector(".description");
const image = document.querySelector(".image");


// function setItems() {

//   details.forEach((item) => {
//     title.innerText = item[0];
//     subTitle.innerText = item[1];
//     description.innerText = item[2];
//     image.src = item[3];

//     console.log(title);
//   });
// }

// const goPrev = () => {
//     console.log("prev");
// }

let currentSlideIndex = 0;

function updateSlide(index) {
    title.innerText = details[index][0];
    subTitle.innerText = details[index][1];
    description.innerText = details[index][2];
    image.src = details[index][3];
    image.className = details[index][4]
    currentSlideIndex = index; // Update current slide tracker
  }
  
  function goPrev() {
    currentSlideIndex = (currentSlideIndex - 1 + details.length) % details.length;
    updateSlide(currentSlideIndex);
  }
  
  function goNext() {
    currentSlideIndex = (currentSlideIndex + 1) % details.length;
    updateSlide(currentSlideIndex);
  }
  
  // Initial slide display
  updateSlide(currentSlideIndex);
