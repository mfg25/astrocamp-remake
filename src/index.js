import Heading from './components/header.js'
import backgroundVideo from './components/mainPage/video-container.js'
import footer from './components/footer/footer.js'
import contentAboutUs from './components/aboutUs/aboutUs.js'
import getStarted from './components/getStarted/getStarted.js'
import './pressets.css'


loadPage()

export function loadPage(){
    document.getElementById('content').innerHTML = ''
    const heading = new Heading()
    document.getElementById('content').appendChild(heading)
    const backVideo = new backgroundVideo()
    document.getElementById('content').appendChild(backVideo)
    const foot = new footer()
    document.getElementById('content').appendChild(foot)
}


export function loadAboutUs(){
    document.getElementById('content').innerHTML = ''
    const heading = new Heading()
    document.getElementById('content').appendChild(heading)
    const content = new contentAboutUs()
    document.getElementById('content').appendChild(content)
    const foot = new footer()
    document.getElementById('content').appendChild(foot)
}

export function loadGetStarted(){
    document.getElementById('content').innerHTML = ''
    const heading = new Heading()
    document.getElementById('content').appendChild(heading)
    const content = new getStarted()
    document.getElementById('content').appendChild(content)
    const foot = new footer()
    document.getElementById('content').appendChild(foot)
}