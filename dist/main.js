// import portfolioCases from './data'
// console.log(portfolioCases)
let animationState = true

function crtOff () {
  const crt = document.getElementsByClassName('main')[0]
  crt.classList.toggle('crt')
  const disk = document.getElementsByClassName('disk-text')[0]
  if (animationState) {
    disk.classList.remove('disk-animation')
    animationState = false
  } else {
    disk.classList.add('disk-animation')
    animationState = true
  }
}

crtOff()

const controls = {
  toggleContacts: function () {
    document
      .getElementsByClassName('contact-me')[0]
      .addEventListener('click', () => {
        document
          .getElementsByClassName('contact-wrapper')[0]
          .classList.toggle('hidden-d')

        document.getElementsByClassName('memes')[0].classList.add('hidden-d')
      })
  },
  togglePortfolio: function () {
    document
      .getElementsByClassName('contact-wrapper')[0]
      .classList.add('hidden-d')
    document.getElementsByClassName('memes')[0].classList.add('hidden-d')
    controls.togglePortfolioWindow()
  },
  toggleMeme: function () {
    document
      .getElementsByClassName('full-folder')[0]
      .addEventListener('click', function () {
        document.getElementsByClassName('pop-up')[0].classList.add('hidden-d')

        document
          .getElementsByClassName('contact-wrapper')[0]
          .classList.add('hidden-d')

        document.getElementsByClassName('memes')[0].classList.toggle('hidden-d')
      })
  },
  toggleCRT: function () {
    document.getElementsByClassName('disk')[0].addEventListener('click', () => {
      this.crt()
    })
  },
  crt: function () {
    const crt = document.getElementsByClassName('main')[0]
    crt.classList.toggle('crt')
    const disk = document.getElementsByClassName('disk-text')[0]
    if (animationState) {
      disk.classList.remove('disk-animation')
      animationState = false
    } else {
      disk.classList.add('disk-animation')
      animationState = true
    }
  },
  toggleMainPortfolioControls: function () {
    document
      .getElementsByClassName('projects-category')[0]
      .classList.toggle('hidden-d')

    document
      .getElementsByClassName('project-heavy-sub-category')[0]
      .classList.add('hidden-d')

    document
      .getElementsByClassName('project-medium-sub-category')[0]
      .classList.add('hidden-d')

    document
      .getElementsByClassName('project-light-sub-category')[0]
      .classList.add('hidden-d')
  },
  toggleSubPortfolioControls: function (category) {
    document
      .getElementsByClassName(`project-${category}-sub-category`)[0]
      .classList.toggle('hidden-d')
  },
  showPortfolioItem: function () {
    document
      .getElementsByClassName('portfolio-item')[0]
      .classList.toggle('hidden-d')
  },
  togglePortfolioWindow: function () {
    document.getElementsByClassName('pop-up')[0].classList.toggle('hidden-d')
  }
}

controls.toggleContacts()
controls.toggleCRT()
controls.toggleMeme()

const animations = {
  folderLoading: function (category) {
    // debugger

    utility.disableFolderClick()
    animations.loadingAnimation()

    setTimeout(() => {
      portfolioCreation.extractPortfolioData(category)
      controls.toggleSubPortfolioControls(category)
    }, 1700)
  },
  loadingAnimation: function (e) {
    const body = document.getElementsByTagName('body')[0]
    body.classList.add('loading-animation-phase-1')
    setTimeout(() => {
      body.classList.remove('loading-animation-phase-1')
      body.classList.add('loading-animation-phase-2')
    }, 500)
    setTimeout(() => {
      body.classList.remove('loading-animation-phase-2')

      // utility.enlargePortfolioWindow()
    }, 1500)
  }
}

const portfolioCreation = {
  extractPortfolioData: function (category) {
    Object.keys(portfolioCases).forEach(function (e) {
      if (e === category) {
        Object.keys(portfolioCases[e]).forEach(function (i) {
          const name = portfolioCases[e][i].name
          const id = portfolioCases[e][i].id
          const desc = portfolioCases[e][i].desc
          const src = portfolioCases[e][i].src
          const github = portfolioCases[e][i].github
          const webLink = portfolioCases[e][i].webLink
          portfolioCreation.createPortfolioFolder(
            id,
            name,
            desc,
            src,
            github,
            category,
            webLink
          )
        })
      }
    })
  },
  createPortfolioFolder: function (
    id,
    name,
    desc,
    src,
    github,
    category,
    webLink
  ) {
    const subCategory = document.getElementsByClassName(
      `project-${category}-sub-category`
    )[0]

    if (
      subCategory.childNodes.length ===
      Object.keys(portfolioCases[category]).length
    ) {
      controls.toggleSubPortfolioControls(category)
      controls.toggleMainPortfolioControls()
      return
    }
    subCategory.classList.toggle('hidden-d')

    const figure = document.createElement('figure')
    const imgStatic = document.createElement('img')
    const figcaption = document.createElement('figcaption')
    const img = document.createElement('img')

    imgStatic.src = '/assets/directory_e-5.png'
    figcaption.innerHTML = name

    figure.classList.add('figure')
    figure.id = id
    figure.appendChild(imgStatic)
    figure.appendChild(figcaption)

    subCategory.appendChild(figure)

    controls.toggleMainPortfolioControls()

    figure.addEventListener('click', function (e) {
      portfolioCreation.createPortfolioItem(
        id,
        name,
        desc,
        src,
        github,
        webLink
      )
    })
  },
  createPortfolioItem: function (id, name, desc, src, github, webLink) {
    const popup = document.getElementsByClassName('project-item-case')[0]
    const template = `<div id="portfolio-${id}" class="portfolio-item">
    <div class="text-editor-wrapper">
      <img
        src="../assets/Windows-98-Notepad.png"
        alt=""
        width="600px"
      />
      <div class="text-editor-text-wrapper">
        <h3 class="portfolio-item-title">
          ${name}
        </h3>
        <p class="portfolio-item-description">
          ${desc}
        </p>
        <p class='portfolio-item-description'>Посмотреть можно <a  target=”_blank” href="${webLink}">тут</a></p>
        <a  target=”_blank” href="${github}" class="portfolio-item-github-link">GitHub</a>
      </div>
    </div>
    <div class="paint-wrapper">
      <img class="paint" src="../assets/video-player.png" alt="" />
      <img
        class="portfolioImg"
        alt=""
        loading="lazy"
        src="${src}"
        width="600"
      />
    </div>
  </div>`
    popup.innerHTML = template
  }
}

const utility = {
  enlargePortfolioWindow: function () {
    const addressInput = document.getElementsByClassName('address-input')[0]
    const portfolioBody = document.getElementsByClassName('window-body')[0]

    portfolioBody.style.width = '800px'
    portfolioBody.style.height = '500px'

    addressInput.style.width = '755px'
  },
  disableFolderClick: function () {
    const element = document.getElementsByClassName('projects-category')[0]

    element.classList.toggle('unclickable')

    setTimeout(() => {
      element.classList.toggle('unclickable')
    }, 4000)
  }
}

// https://www.w3schools.com/howto/howto_js_draggable.asp

// drug test
// Make the DIV element draggable:

// Make the DIV element draggable:
// dragElement(document.getElementById('draggable'))
dragElement(document.getElementById('popup'))

function dragElement (elmnt) {
  let pos1 = 0
  let pos2 = 0
  let pos3 = 0
  let pos4 = 0
  document.getElementById(elmnt.id + '-header').onmousedown = dragMouseDown
  // document.getElementById(elmnt.id + '-resize').onmousedown = resizeMouseDown

  function dragMouseDown (e) {
    e = e || window.event
    e.preventDefault()
    // get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  function resizeMouseDown (e) {
    e = e || window.event
    e.preventDefault()
    // get the mouse cursor position at startup:
    pos3 = 0
    pos4 = 0
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementResize
  }

  function elementResize (e) {
    e = e || window.event
    e.preventDefault()
    const content = document.getElementById('draggable')
    const width = content.offsetWidth
    const height = content.offsetHeight

    pos1 = e.clientX - width - content.offsetLeft
    pos2 = e.clientY - height - content.offsetTop

    content.style.width = width + pos1 + 'px'
    content.style.height = height + pos2 + 'px'
  }

  function elementDrag (e) {
    e = e || window.event
    e.preventDefault()
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
  }

  function closeDragElement () {
    // stop moving when mouse button is released:
    document.onmouseup = null
    document.onmousemove = null
  }
}

// include clippy js for easy us
