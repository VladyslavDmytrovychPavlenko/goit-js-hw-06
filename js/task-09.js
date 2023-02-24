function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
});

// Вибираєм елементи button і colorSpan за допомогою методу querySelector().
// Додаєм обробник подій click до кнопки button, який генерує випадковий колір за допомогою функції getRandomHexColor(),
// встановлюєм background-color елемента <body> в згенерований колір за допомогою властивості style, та оновлює текстовий вміст colorSpan зі згенерованим кольором.
