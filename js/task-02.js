//   Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEL = document.querySelector('#ingredients')
const elements = [];
for (let i = 0; i < ingredients.length; i+=1) {
  const ingredient = ingredients[i];
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  elements.push(newEl)
}
console.log(elements);
ingredientsEL.append(...elements)