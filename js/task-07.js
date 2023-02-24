const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});
// Починаємо з вибору елементів input#font-size-control і span#text за допомогою методу querySelector.
// Після цього, ми підписуємось на подію input на елементі fontSizeControl.
// Коли відбувається подія input, ми змінюємо розмір тексту, оновлюючи властивість font-size в інлайн-стилі елемента textSpan.
// Вираз ${fontSizeControl.value}px обчислює розмір шрифта в пікселях з властивості value повзунка font-size-control і передає його як рядок з одинарними лапками для встановлення стилю font-size в елементі textSpan.
