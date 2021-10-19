const colors = [
  "green",
  "red",
  "crimson",
  "coral",
  "tomato",
  "rgba(133, 122, 200)",
  "#f15025",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number, from 0 => colors.length-1
  const randomNumber = getRandomNumber();
  // document.body.style.backgroundColor = colors[randomNumber];
  document.body.style.backgroundColor = randomNumber;
  // color.textContent = colors[randomNumber];
  color.textContent = randomNumber;
});

function getRandomNumber() {
  return colors[Math.round(Math.random() * (colors.length - 1))];
  // return Math.round(Math.random() * colors.length - 1);
}
