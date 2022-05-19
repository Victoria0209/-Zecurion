import {
    tableIncidents,
} from './data.js';

const tableBody = document.querySelector('.table-body');

const tableTr = document.querySelector('#table-incidents')
    .content
    .querySelector('.incidents__table-body');

const similarFragment = document.createDocumentFragment();

tableIncidents.forEach(({
    name,
    resultOne,
    resultTwo,
    resultThree
}) => {
    const tableTrElem = tableTr.cloneNode(true);

    tableTrElem.querySelector('.incidents__body-name').textContent = name;
    tableTrElem.querySelector('.incidents_one').textContent = resultOne;
    tableTrElem.querySelector('.incidents_two').textContent = resultTwo;
    tableTrElem.querySelector('.incidents_three').textContent = resultThree;

    if(resultOne>0){
        tableTrElem.querySelector('.circle-red').classList.add('circle-red-full')
    }else{
        tableTrElem.querySelector('.circle-red').classList.add('circle-red-null')
    }

    if(resultTwo>0){
        tableTrElem.querySelector('.circle-orange').classList.add('circle-orange-full')
    }else{
        tableTrElem.querySelector('.circle-orange').classList.add('circle-orange-null')
    }

    if(resultThree>0){
        tableTrElem.querySelector('.circle-green').classList.add('circle-green-full')
    }else{
        tableTrElem.querySelector('.circle-green').classList.add('circle-green-null')
    }

    similarFragment.append(tableTrElem)
})

tableBody.append(similarFragment)
