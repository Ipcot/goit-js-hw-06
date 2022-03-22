const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listsEl = ingredients.map(element => {
  const listEl = document.createElement("li")
listEl.textContent = element;
  listEl.classList.add('item');
  
  return listEl;
});

  const ulEl = document.querySelector("ul");
  ulEl.append(...listsEl);
  console.log(ulEl);
