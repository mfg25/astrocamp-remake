import './video-container.css';
import Video from './background.gif';

function backgroundVideo(){

    let divContainer = document.createElement('div')
    divContainer.id = 'video-container'
    
    let backgroundVideo = document.createElement('img')
    backgroundVideo.src = Video
    backgroundVideo.id = 'gif'

    let introductionText = document.createElement('h1')
    introductionText.id = 'introduction'
    introductionText.innerText = `Take free online classes and courses in astronomy to build your
    science skills. Explore astronomy, astrophysics and other popular
    subjects with courses from top universities and institutions around
    the world.`

    divContainer.appendChild(backgroundVideo)
    divContainer.appendChild(introductionText)
    
    return divContainer
}

export default backgroundVideo