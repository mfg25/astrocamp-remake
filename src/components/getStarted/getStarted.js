import './getStarted.css'

function contentGetStarted(){

    let mainContainer = document.createElement('main')
    mainContainer.id = 'mainContainer'

    let formsContainer = document.createElement('div')
    formsContainer.id = 'forms-container'
    formsContainer.innerHTML = `
    <form action="">
        <h2>Get Started</h2>
        <label for="email">Email</label>
        <div class="input">
          <input
            type="email"
            id="email"
            placeholder="Your email"
            name="email"
          />
        </div>
        <label for="name">Name</label>
        <div class="input">
          <input type="text" id="name" placeholder="Your name" name="name" />
        </div>
        <div id="button">
          <button type="submit">Submit</button>
        </div>
      </form>` 

  mainContainer.appendChild(formsContainer)
    return mainContainer
}

export default contentGetStarted