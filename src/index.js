import { renderHome } from "./home-page"
import { renderMenu } from "./menu";
import { renderAbout } from "./about";

import "./styles.css";
const content = document.querySelector('#content');
const homeButton = document.querySelector("#homeButton")
const menuButton = document.querySelector("#menuButton")
const aboutButton = document.querySelector("#aboutButton")

const clearContent = () => {
    content.innerHTML = '';
}
homeButton.addEventListener('click', () => {
    clearContent();
    renderHome();
})

menuButton.addEventListener('click', () => {
    clearContent();
    renderMenu();
})

aboutButton.addEventListener('click', () => {
    clearContent();
    renderAbout();
})
renderHome();

console.log('hello')