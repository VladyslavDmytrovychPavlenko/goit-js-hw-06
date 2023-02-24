const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція createBoxes() визначає кількість елементів, яку потрібно створити, отримуючи значення поля вводу input.value.
// Далі функція створює елементи div з розмірами та кольором фону, згідно з умовою задачі. Кожен елемент має ширину та висоту 30 пікселів більшу, ніж попередній елемент.
// Колір фону елементів генерується за допомогою функції getRandomHexColor(), яка повертає випадковий колір у форматі HEX.

// Функція destroyBoxes() просто очищує колекцію елементів, видаляючи їх з DOM за допомогою встановлення властивості `

// Функція createBoxes(amount) отримує параметр amount, який вказує, скільки елементів необхідно створити.

// Спочатку ми отримуємо посилання на елемент з id="boxes" і зберігаємо його у змінну boxesContainer.

// Далі ми створюємо масив boxes із amount елементів, заповнюючи його об'єктами, що містять всі необхідні властивості елементів: розмір, колір і так далі.
// Перший елемент має розмір 30px на 30px і випадковий колір, і кожен наступний елемент у масиві має на 10px більшу ширину і висоту.

// Далі ми проходимося по масиву boxes і для кожного елементу створюємо новий елемент div, задаємо йому стилі (розміри і колір фону), і додаємо його до контейнера boxesContainer за допомогою методу appendChild.

// Функція destroyBoxes() просто очищує вміст елемента з id="boxes", викликаючи метод innerHTML=''. В результаті всі дочірні елементи, що були створені раніше, будуть видалені зі сторінки.
