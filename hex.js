const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomHex = getRandomHex();
  console.log(randomHex);
  document.body.style.backgroundColor = randomHex;
  color.textContent = randomHex;
});

function getRandomHex() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.round(Math.random() * (hex.length - 1))];
  }
  return hexColor;
}