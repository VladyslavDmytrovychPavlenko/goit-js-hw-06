const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const isValid = input.value.length === parseInt(input.dataset.length);
  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
});

// В цьому скрипті ми використовуємо addEventListener() для вішання обробника події blur на інпуті.

// Далі, використовуючи parseInt() та атрибут dataset.length отримуємо потрібну довжину рядка. Порівнюємо її з довжиною значення введеного користувачем, і додаємо відповідний клас.

// classList.toggle() додає клас, якщо другий параметр (в даному випадку - isValid) є true, і видаляє його, якщо другий параметр є false.

// Крім того, замість classList.add() та classList.remove(), я використав метод classList.toggle(), який дозволяє додавати або видаляти класи, залежно від того, чи вони вже присутні в списку класів елемента.
