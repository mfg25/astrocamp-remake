function nav () {
    let nav = document.createElement('nav')
    nav.classList.add('nav-links')

    let link1 = document.createElement('a')
    let link2 = document.createElement('a')
    let link3 = document.createElement('a')

    link1.innerHTML = 'About us'
    link2.innerHTML = 'Our plans'
    link3.innerHTML = 'Get started'

    nav.appendChild(link1)
    nav.appendChild(link2)
    nav.appendChild(link3)

    return nav
}

export default nav;