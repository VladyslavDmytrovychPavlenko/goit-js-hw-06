let counterValue = 0;
const valueEl = document.getElementById("value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
  counterValue++;
  valueEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue--;
  valueEl.textContent = counterValue;
});

// У цьому коді ми спочатку ініціалізуємо змінну counterValue значенням 0.

// Потім ми знаходимо елементи із ID value і кнопки з data-action значеннями increment і decrement за допомогою методів getElementById та querySelector.

// Далі ми додаємо слухачів кліків до обох кнопок.

// Кожен раз, коли користувач клікає на кнопку з data-action="increment", ми збільшуємо значення змінної counterValue на одиницю та оновлюємо текстовий вміст елементу value з використанням властивості textContent.

// Аналогічно, при кліку на кнопку з data-action="decrement", ми зменшуємо значення counterValue на одиницю та оновлюємо текстовий вміст елементу value.
