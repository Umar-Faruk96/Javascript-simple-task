// Image Gallery Skill Test Script

const imgCanvas = document.querySelector(".displayed-img");
const imgThumbnail = document.querySelector(".thumb-bar");

const effectBtn = document.querySelector("button");
const overlayEffect = document.querySelector(".overlay");

/* Declaring the array of image filenames */

const imgNames = [
  "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic1.jpg",
  "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic2.jpg",
  "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic3.jpg",
  "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic4.jpg",
  "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic5.jpg",
];

/* Declaring the alternative text for each image file */

/* altText এর key টা কে url আকারে দেয়ার কারণ, for..of loop array লুপ হওয়ার কারণে imgNames array তে প্রতিটি iteration এ img element এর src attribute সঠিকভাবে পাওয়া যায়। কিন্তু altText object হওয়ার কারণে for..of loop support করে না। আবার for..of loop এর ভেতরে for..in loop run করে সঠিক result পাওয়া যাবে না। nested loop এর execution context থেকে এটা বোঝা যায়। তাহলে উপায় কি? যেহেতু object value কে ‍access করার ২টি উপায়। ১. dot notation ২. bracket notation। আর যেহেতু dynamic access এর জন্য bracket notation ছাড়া কোন পথ নেই। আবার bracket notation এর মাধ্যমে value access করার উপায় হল single quote অথবা double quote এর ভেতরে object key টা কে pass করা। সেহেতু altText object এর key কে double quote এর মধ্যে url আকারে set করা হয়েছে, কারণ imgNames array তে for..of loop run করে প্রতিটি iteration এ যে value পাওয়া যায় তা as same as altText object key। ফলে প্রতিটি loop iteration এর array value কে altText object access mechanism bracket notation value তে template literal আকারে pass করা হয়। ফলে img element এর alt attribute এর value সঠিকভাবে পাওয়া যায়। for..in loop এর কোন প্রয়োজন নাই। তবে এর থেকেও সুন্দর উপায় পরে উপস্থাপন করা হয়েছে। */

const altText = {
  "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic1.jpg":
    "Closeup of a human eye",
  "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic2.jpg":
    "An obscure marble stone",
  "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic3.jpg":
    "Bunch of brunfelsia pauciflora",
  "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic4.jpg":
    "An egyptian ancient wall-painting demonstrating human behavior",
  "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic5.jpg":
    "A butterfly sitting over a large leaf",
};

/* Looping through images */

for (let file of imgNames) {
  const newImage = document.createElement("img");

  newImage.setAttribute("src", file);
  newImage.setAttribute("alt", altText[`${file}`]);

  imgThumbnail.appendChild(newImage);

  newImage.addEventListener("click", (e) => {
    imgCanvas.src = e.target.src;
    imgCanvas.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

effectBtn.addEventListener("click", (e) => {
  if (e.target.getAttribute("class") === "dark") {
    e.target.setAttribute("class", "light");
    e.target.textContent = "Lighten";
    overlayEffect.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    e.target.setAttribute("class", "dark");
    e.target.textContent = "Darken";
    overlayEffect.style.backgroundColor = "rgba(0,0,0,0)";
  }
});

// another try to achieve the same result in a robust (সহজে বোধগম্য, ঝামেলাহীন) and elegant way

// Image Gallery Skill Test Script

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames and the alternative text for each image file*/

const imgSrcAltText = [
  {
    url: "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic1.jpg",
    alt: "Closeup of a human eye",
  },
  {
    url: "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic2.jpg",
    alt: "An obscure marble stone",
  },
  {
    url: "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic3.jpg",
    alt: "Bunch of brunfelsia pauciflora",
  },
  {
    url: "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic4.jpg",
    alt: "An egyptian ancient wall-painting demonstrating human behavior",
  },
  {
    url: "https://mdn.github.io/learning-area//javascript/building-blocks/gallery/images/pic5.jpg",
    alt: "A butterfly sitting over a large leaf",
  },
];

/* Looping through images */

for (let imgItem of imgSrcAltText) {
  const newImage = document.createElement("img");

  newImage.setAttribute("src", imgItem.url);
  newImage.setAttribute("alt", imgItem.alt);

  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", (e) => {
  if (e.target.getAttribute("class") === "dark") {
    e.target.setAttribute("class", "light");
    e.target.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    e.target.setAttribute("class", "dark");
    e.target.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
