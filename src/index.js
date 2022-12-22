import Heading from './components/header.js'
import backgroundVideo from './components/mainPage/video-container.js'
import './pressets.css'

loadPage()

function loadPage(){
    const heading = new Heading()
    document.getElementById('content').appendChild(heading)
    const backVideo = new backgroundVideo()
    document.getElementById('content').appendChild(backVideo)
}