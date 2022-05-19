import {
    tableDiscipline,
} from './data.js';

const disciplineTab = document.querySelector('.table-discipline');

const disciplineTabTemplate = document.querySelector('#discipline')
    .content
    .querySelector('.discipline__table-body')

const similarFragmentDiscips = document.createDocumentFragment();

tableDiscipline.forEach(({
    date,
    coming,
    leave,
    workingTime
}) => {
    const categoryElem = disciplineTabTemplate.cloneNode(true);
    categoryElem.querySelector('.date').textContent = date;
    categoryElem.querySelector('.coming').textContent = coming;

    const time = coming.split(':')

    if (Number(time[0]) >= 8 && Number(time[1]) > 0) {
        const hourDelay = Number(time[0]) - 8;
        const minutesDelay = Number(time[1]);

        let delayPlus = ''

        if (hourDelay === 0) {
            delayPlus = `+${minutesDelay} мин`
        } else {
            delayPlus = `+${hourDelay}ч ${minutesDelay} мин`
        }

        categoryElem.querySelector('.coming-difference-text').textContent = delayPlus;
        categoryElem.querySelector('.coming-difference-text').classList.add('pink-text')

    } else if (Number(time[0]) < 8) {
        const hour = 8 - Number(time[0]) - 1;
        const minutes = 60 - Number(time[1]);

        let delayMinus = ''

        if (hour === 0) {
            delayMinus = `-${minutes} мин`
        } else {
            delayMinus = `-${hour}ч ${minutes} мин`
        }

        categoryElem.querySelector('.coming-difference-text').textContent = delayMinus;
        categoryElem.querySelector('.coming-difference-text').classList.add('green-text')
    }

    categoryElem.querySelector('.leave').textContent = leave;

    const timeLeave = leave.split(':')
    if (Number(timeLeave[0]) < 17) {
        const minutesDelayLeave = 60-Number(timeLeave[1]);
        let delayLeavePlus = `-${minutesDelayLeave} мин`
        categoryElem.querySelector('.leave-difference-text').textContent = delayLeavePlus;
        categoryElem.querySelector('.leave-difference-text').classList.add('pink-text')

    } else if (Number(timeLeave[0]) > 17) {
        const hourLeave = Number(timeLeave[0]) - 17;
        const minutesLeave = Number(timeLeave[1]);
        let delayLeaveMinus = ''
        if (hourLeave === 0) {
            delayLeaveMinus = `+${minutesLeave} мин`
        } else {
            delayLeaveMinus = `+${hourLeave}ч ${minutesLeave} мин`
        }
        categoryElem.querySelector('.leave-difference-text').textContent = delayLeaveMinus;
        categoryElem.querySelector('.leave-difference-text').classList.add('green-text')
    } else {
        let delayLeavePlus = ` +${Number(timeLeave[1])} мин`
        categoryElem.querySelector('.leave-difference-text').textContent = delayLeavePlus;
        categoryElem.querySelector('.leave-difference-text').classList.add('green-text')
    }
    categoryElem.querySelector('.working-time').textContent = workingTime;
    const timeWorking = workingTime.split(':')
    if(timeWorking[0]<8){
        categoryElem.querySelector('.working-time').classList.add('pink-text')
    }else{
        categoryElem.querySelector('.working-time').classList.add('green-text')
    }



    similarFragmentDiscips.append(categoryElem);

})
disciplineTab.append(similarFragmentDiscips);