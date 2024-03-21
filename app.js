console.log("Hello World");
console.log(document);

//
document.querySelector("h2");
document.querySelector("h1");

const mySecondSection = document.getElementById
("my section");

mySecondSection.textContent = "Amazing title";

//create a new element
const section = document.querySelector("section");

const newImg = document.createElement("img");
newImg.src = 
"https://4.img-dpreview.com/files/p/TS600x450~sample_galleries/1330372094/1693761761.jpg";
newImg.alt = "bird";
section.appendChild(newImg);
// light theme

let themeAnswer = prompt("Do you prefer white or black theme?");

if (themeAnswer === "white") {
  document.body.style.backgroundColor = themeAnswer;
} else if (themeAnswer === "black") {
  document.body.style.backgroundColor = themeAnswer;
} else {
  document.body.style.backgroundColor = "yellow";
}