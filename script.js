const adults = document.querySelector('#volwassen');
const children = document.querySelector('#kinderen');
const sportWeek = document.querySelector('#sportWeek');
const sportWeekInfo = document.querySelector('#sportWeekInfo');
const spierActiviteit = document.querySelector('#spierActiviteit');
const spierActiviteitInfo = document.querySelector('#spierActiviteitInfo');


// start button function
const richtlijnChildren = () => {

    sportWeek.textContent = '420';
    sportWeekInfo.textContent = 'Doe minstens elke dag een uur aan matig intensieve inspanning, zoals wandelen en fietsen. Langer, vaker en/of intensiever bewegen geeft extra gezondheidsvoordeel';
    spierActiviteit.textContent = '3';
    adults.classList.remove('buttonActive');
    adults.classList.add('buttonInactive');
    children.classList.add('buttonActive');
    children.classList.remove('buttonInactive');

}

const richtlijnAdults = () => {
    sportWeek.textContent = '150';
    sportWeekInfo.textContent = 'per week aan matig intensieve inspanning, zoals wandelen en fietsen, verspreid over diverse dagen. Langer, vaker en/of intensiever bewegen geeft extra gezondheidsvoordeel';
    spierActiviteit.textContent = '2';
    children.classList.remove('buttonActive');
    children.classList.add('buttonInactive');
    adults.classList.add('buttonActive');
    adults.classList.remove('buttonInactive');
}

adults.addEventListener('click', richtlijnAdults);
children.addEventListener('click', richtlijnChildren);