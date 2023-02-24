// Спочатку ми знаходимо форму за допомогою методу document.querySelector(), який повертає перший елемент, що відповідає CSS-селектору '.login-form'
const loginForm = document.querySelector(".login-form");

// Потім ми додаємо обробник події submit до форми за допомогою методу addEventListener(). Цей обробник буде запускатися, коли користувач відправить форму.
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.currentTarget));
  if (Object.values(formData).some((value) => !value)) {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log(formData);
    loginForm.reset();
  }
});

// Перший рядок обробника події - event.preventDefault(); - перешкоджає браузеру перезавантажувати сторінку під час відправлення форми.
// Це дозволяє нам зберігати значення полів форми та виконувати інші дії, не перезавантажуючи сторінку.

// const formData = Object.fromEntries(new FormData(event.currentTarget)); - збирає значення полів форми та зберігає їх у змінну formData. Цей рядок складається з декількох частин:

// new FormData(event.currentTarget) - створює об'єкт FormData з елементу, на якому відбулася подія (в нашому випадку, форма loginForm).
// Object.fromEntries() - створює об'єкт з масиву [key, value]-пар. У нашому випадку, ми створюємо об'єкт formData з масиву пар, який створюється методом FormData.entries().

// Далі ми перевіряємо, чи всі поля форми заповнені. Для цього ми перетворюємо об'єкт formData у масив значень за допомогою методу Object.values(). Потім ми перевіряємо, чи є хоча б одне значення false (тобто, чи всі значення не порожні).
// Якщо яке-небудь поле порожнє, ми виводимо повідомлення про те, що всі поля повинні бути заповнені, та повертаємося з обробника події, щоб уникнути виконання подальших дій.

// Якщо всі поля заповнені, ми виводимо об'єкт formData в консоль, використовуючи console.log(), та очищуємо значення полів форми за допомогою методу reset().
// Отже, цей код обробляє відправлення форми логіна, перевіряє, чи всі поля заповнені, зберігає введені дані у змінну formData, виводить цю змінну в консоль та очищує значення полів форми.