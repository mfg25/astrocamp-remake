import {loadAboutUs} from '../index.js'
import {loadPage} from '../index.js'

function nav () {
    let nav = document.createElement('nav')
    nav.classList.add('nav-links')
    
    let link0 = document.createElement('a')
    let link1 = document.createElement('a')
    let link2 = document.createElement('a')

    link0.innerHTML = 'Home'
    link1.innerHTML = 'About us'
    link2.innerHTML = 'Get started'

    link0.addEventListener('click', e =>{
        loadPage();
    })

    link1.addEventListener('click', e =>{
        loadAboutUs();
    })

    nav.appendChild(link0)
    nav.appendChild(link1)
    nav.appendChild(link2)


    return nav
}

export default nav;