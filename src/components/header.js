import './header.css';
import nav from './nav.js';
import Logo from './logo.png';

function Heading(){

    let headerElement = document.createElement('header')
    headerElement.id = 'header'

    let astrocampLogo = document.createElement('img')
    astrocampLogo.src = Logo
    astrocampLogo.id = 'header-img'
    headerElement.appendChild(astrocampLogo)

    headerElement.appendChild(nav())

    return headerElement;
}

export default Heading