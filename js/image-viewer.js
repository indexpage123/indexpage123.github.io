const img = [
  "1.gif",
  "2.gif",
  "3.gif",
  "4.gif",
  "5.gif",
  "6.jpg",
  "7.gif",
  "8.gif",
  "9.gif",
  "10.gif",
];

const viewImage = document.querySelector("#new-image");
const bgImageSelector = img[Math.floor(Math.random() * img.length)];

viewImage.src = `css/img/${bgImageSelector}`;
viewImage.style.width = "387px";
viewImage.style.height = "260px";
