import {
    keyIndicators,
} from './data.js';

const keyIindicatorsList = document.querySelector('.key-indicators__list');

const keyIindicatorTemplate = document.querySelector('#key-indicator')
    .content
    .querySelector('.key-indicators__item');

const similarLinkFragment = document.createDocumentFragment();

keyIndicators.forEach(({
    name,
    total,
    dinamic,
    triangle,
    color
}) => {
    const keyIindicatorElem = keyIindicatorTemplate.cloneNode(true);
    
    keyIindicatorElem.querySelector('.key-indicators__head').textContent = name;
    keyIindicatorElem.querySelector('.key-indicators__total').style.color = color;
    keyIindicatorElem.querySelector('.key-indicators__total').textContent = total;
    keyIindicatorElem.querySelector('.key-indicators__triangle').innerHTML = triangle;
    keyIindicatorElem.querySelector('.key-indicators__dynamics').textContent = `${dinamic}%`;

    if(Number(dinamic)>1){
        keyIindicatorElem.querySelector('.key-indicators__triangle').classList.add('red-triangle');
    }else{
        keyIindicatorElem.querySelector('.key-indicators__triangle').classList.add('black-triangle');
    }

    similarLinkFragment.append(keyIindicatorElem);
})

keyIindicatorsList.append(similarLinkFragment);