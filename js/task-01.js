//Напиши скрипт, который выполнит следующие операции.

//Посчитает и выведет в консоль количество категорий в ul#categories, 
//то есть элементов li.item.Получится 'В списке 3 категории.'.

//Для каждого элемента li.item в списке ul#categories,
//найдет и выведет в консоль текст заголовка элемента(тега h2) и 
//количество элементов в категории(всех вложенных в него элементов li).

//Например для первой категории получится:

//Категория: Животные
//Количество элементов: 4

const navEl = document.querySelectorAll('.item').length;
console.log(`В списке ${navEl} категории.`);
const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});