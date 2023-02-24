// querySelectorAll(), щоб знайти усі елементи li.item
const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

// querySelector(), щоб знайти заголовок кожного елемента
categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  //childElementCount для підрахунку кількості елементів в кожній категорії
  const elementsCount = category.querySelector("ul").childElementCount;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
