
const numberOfCategories = document.querySelectorAll('li.item');
console.log('Number of categories:', numberOfCategories.length);

const itemEl = document.querySelectorAll("h2");
for (let item of itemEl) {
    console.log("Category:", item.textContent);
    console.log("Elements:", item.nextElementSibling.childElementCount);
}

