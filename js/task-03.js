const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

let html = "";
images.forEach((image) => {
  html += `<li><img src="${image.url}" width="400" alt="${image.alt}"></li>`;
});

gallery.insertAdjacentHTML("afterbegin", html);
gallery.style.display = "flex";
gallery.style.gap = "20px";
gallery.style.listStyle = "none";
// Отримуємо посилання на <ul> елемент галереї за допомогою методу document.querySelector().
// Ітеруємо масив images за допомогою методу forEach().
// Створюємо рядок HTML з елементом <img> і додатковими атрибутами src та alt за допомогою шаблонних рядків.
// Додаємо цей рядок HTML до змінної html.
// Вставляємо всі створені елементи <li> з <img> усередині в DOM за допомогою методу insertAdjacentHTML() з аргументом "afterbegin". Це додасть елементи у початок <ul> елементу.
