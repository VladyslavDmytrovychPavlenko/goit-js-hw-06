const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");

const liArray = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

ul.append(...liArray);
// По-перше, ми отримуємо посилання на список з його id 'ingredients', використовуючи метод document.querySelector.
// Потім ми використовуємо метод 'map' для створення нового масиву, в якому кожен елемент з масиву ingredients перетворюється на елемент li.
// Для кожного елемента ми створюємо новий елемент li з методом document.createElement(), додаємо його текстовий вміст зі значенням інгредієнту, який ми отримали з масиву, а також додаємо клас item за допомогою методу classList.add.
// У кінці ми додаємо створені елементи li до списку ul за допомогою методу append.
