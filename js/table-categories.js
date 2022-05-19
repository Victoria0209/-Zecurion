import {
    tableCategories,
} from './data.js';

const siteCategory = document.querySelector('.table-categories');
const siteCategoryTemplate = document.querySelector('#site-categorie')
    .content
    .querySelector('.site-categories__table-body')

const similarFragmentCategory = document.createDocumentFragment();

tableCategories.forEach(({
    name,
    total,
    triangle,
    dynamics
}) => {
    const categoryElem = siteCategoryTemplate.cloneNode(true);

    if (name.length > 25) {
        categoryElem.querySelector('.site-categories__body').textContent = `${name.slice(0, 25)}...`
    } else {
        categoryElem.querySelector('.site-categories__body').textContent = name;
    }

    categoryElem.querySelector('.site-categories__body-total').textContent = total;
    categoryElem.querySelector('.site-categories__body-triangle').innerHTML = triangle;

    if (dynamics < 1) {
        categoryElem.querySelector('.site-categories__body-triangle').classList.add("green-triangle")
    } else {
        categoryElem.querySelector('.site-categories__body-triangle').classList.add("red-triangle")
    }

    categoryElem.querySelector('.site-categories__body-dynamics').textContent = `${dynamics}%`;

    similarFragmentCategory.append(categoryElem);
})
siteCategory.append(similarFragmentCategory);