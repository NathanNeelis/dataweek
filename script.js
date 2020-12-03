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


const routeOne = document.querySelector('#route1');
const routeTwo = document.querySelector('#route2');
const routeThree = document.querySelector('#route3');
const routeFour = document.querySelector('#route4');
let routeImage = document.querySelector('#imageRoute');

const routeImageOne = 'img/route1.svg';
const routeImageTwo = 'img/route2.svg';
const routeImageThree = 'img/route3.svg';
const routeImageFour = 'img/route4.svg';


routeOne.addEventListener('mouseenter', replaceImageOne);
routeOne.addEventListener('mouseleave', originalImage);
routeTwo.addEventListener('mouseenter', replaceImageTwo);
routeTwo.addEventListener('mouseleave', originalImage);
routeThree.addEventListener('mouseenter', replaceImageThree);
routeThree.addEventListener('mouseleave', originalImage);
routeFour.addEventListener('mouseenter', replaceImageFour);
routeFour.addEventListener('mouseleave', originalImage);


function originalImage() {
    routeImage.src = 'img/mappop.svg'
}

function replaceImageOne() {
    routeImage.src = routeImageOne;
};

function replaceImageTwo() {
    routeImage.src = routeImageTwo;
};

function replaceImageThree() {
    routeImage.src = routeImageThree;
};

function replaceImageFour() {
    routeImage.src = routeImageFour;
};