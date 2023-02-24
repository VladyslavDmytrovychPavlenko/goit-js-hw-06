const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value.trim()
    ? nameInput.value
    : "Anonymous";
});

// Тут використовується тернарний оператор та метод textContent, який перевіряє, чи не є значення поля input#name-input порожнім.
// Якщо воно не порожнє, тоді встановлюється його значення, а якщо воно порожнє, тоді встановлюється рядок "Anonymous"
