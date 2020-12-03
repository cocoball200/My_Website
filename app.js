/* navbar Element*/
const $homeElement = document.querySelector('.home');
const $aboutElement = document.querySelector('.about');
const $projectElement = document.querySelector('.project');
const $contactElement = document.querySelector('.contact');

const $mainHomeDiv = document.querySelector('.main_home');
const $mainAboutDiv = document.querySelector('.main_about');
const $mainProjectDiv = document.querySelector('.main_project');
const $mainContactDiv = document.querySelector('.main_contact');

const CLICK_EVENT = 'click';

function handleContactDiv() {
    $mainHomeDiv.style.display = 'none'
    $mainAboutDiv.style.display = 'none';
    $mainProjectDiv.style.display = 'none';
    $mainContactDiv.style.display = 'block';

}

function handleProjectDiv() {
    $mainHomeDiv.style.display = 'none'
    $mainAboutDiv.style.display = 'none';
    $mainProjectDiv.style.display = 'block';
    $mainContactDiv.style.display = 'none'

}

function handleAboutDiv() {
    $mainHomeDiv.style.display = 'none'
    $mainAboutDiv.style.display = 'block';
    $mainProjectDiv.style.display = 'none';
    $mainContactDiv.style.display = 'none'
}

function init() {
    $mainHomeDiv.style.display = 'block'
    $mainAboutDiv.style.display = 'none';
    $mainProjectDiv.style.display = 'none';
    $mainContactDiv.style.display = 'none';
}

$homeElement.addEventListener(CLICK_EVENT, init);
$aboutElement.addEventListener(CLICK_EVENT, handleAboutDiv);
$projectElement.addEventListener(CLICK_EVENT, handleProjectDiv);
$contactElement.addEventListener(CLICK_EVENT, handleContactDiv);