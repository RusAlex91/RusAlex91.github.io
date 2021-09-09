const portfolioCreation = {
  extractPortfolioData: function (category) {
    Object.keys(portfolioCases).forEach(function (e) {
      if (e === category) {
        Object.keys(portfolioCases[e]).forEach(function (i) {
          const name = portfolioCases[e][i].name
          const id = portfolioCases[e][i].id
          const desc = portfolioCases[e][i].desc
          const tech = portfolioCases[e][i].tech
          const src = portfolioCases[e][i].src
          const github = portfolioCases[e][i].github
          const webLink = portfolioCases[e][i].webLink
          portfolioCreation.createPortfolioItem(
            id,
            name,
            desc,
            tech,
            src,
            github,
            category,
            webLink
          )
        })
      }
    })
  },

  createPortfolioItem: function (
    id,
    name,
    desc,
    tech,
    src,
    github,
    category,
    webLink
  ) {
    const group = document.getElementById(`work-${category}`)
    const div = document.createElement('div')
    div.classList.add('work')
    group.appendChild(div)
    const template = `
    
    <h3>${name}</h3>
    <a class="work-link" href="${webLink}">to web page</a>
    <a class="work-link" href="${github}">Github</a>
    <p class="work-tech">
      Used technologies:
      <span>${tech}</span>
    </p>
    <p class="work-desc">
      ${desc}
    </p>

    <div>
      <a class="work-link" href="${webLink}">
        <img
          loading="lazy"
          src="${src}"
          alt=""
      /></a>
    </div>
 
    
    `
    div.innerHTML = template
  }
}

const portfolioCases = {
  simple: {
    1: {
      id: 1,
      name: 'Retrowave Music Player',
      desc: 'Simple custom music player.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/10.-Music-player',
      src: './images/work-sample/simple/RMP.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/retro-player/dist/'
    },
    2: {
      id: 2,
      name: 'Old Web Page',
      desc: 'A project to recreate a page from the old Internet.',
      tech: 'HTML, CSS, JS',
      github: 'https://github.com/RusAlex91/OldWeb',
      src: './images/work-sample/simple/Oldweb.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/old-web/'
    },
    3: {
      id: 3,
      name: 'Register form validation',
      desc: '',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/1.-Register-Validator',
      src: './images/work-sample/simple/validator.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/register-validator/'
    },
    5: {
      id: 5,
      name: 'Movie seat booking',
      desc: 'Simple seat booking, saved chosen seats in Local Storage.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/3.-Movie-seat-booking',
      src: './images/work-sample/simple/movieSeat.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/movie-seat/'
    },
    6: {
      id: 6,
      name: 'Custom Video Player',
      desc: 'Player with quality change and custom design.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/4.-Custom-video-Player',
      src: './images/work-sample/simple/custom-video-player.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/custom-video-player/'
    },
    7: {
      id: 7,
      name: 'Exchange rate',
      desc: 'Exchange rate calculator. Using Exchange Rate API.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/5.-Exchange-rate',
      src: './images/work-sample/simple/exchange-rate.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/exchange-rate/'
    },
    8: {
      id: 8,
      name: 'Express News',
      desc: 'Mobile New York Times news aggregator using NYT API.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/6.-Express-News',
      src: './images/work-sample/simple/express-news.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/express-news/'
    },
    9: {
      id: 9,
      name: 'CSS Menu',
      desc: 'CSS user menu with modal window.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/8.-Css-menu',
      src: './images/work-sample/simple/css-menu.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/css-menu/'
    },
    10: {
      id: 10,
      name: 'Meal Finder',
      desc: 'Finding a recipe by name. Meal API, implementing a random menu.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/9.Meal-Finder',
      src: './images/work-sample/simple/meal-finder.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/meal-finder/'
    },
    11: {
      id: 11,
      name: 'Your top chart',
      desc: 'Implementing selection of TOP 32 music video using YouTube API',
      tech: 'HTML, CSS, SCSS, JavaScript',
      github: 'https://github.com/RusAlex91/11.-Your-top-chart',
      src: './images/work-sample/simple/top-chart.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/top-chart/'
    },
    12: {
      id: 12,
      name: 'Infinite Scroll Blog',
      desc:
        'Infinite blog (JSON placeholder) with preloader and search in uploaded blogs.',
      tech: 'HTML, CSS, SCSS, JavaScript, Typescript',
      github: 'https://github.com/RusAlex91/12.-Infinite-scroll-blog',
      src: './images/work-sample/simple/infinite-scroll-blog.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/infinite-scroll-blog/'
    },
    13: {
      id: 13,
      name: 'Simple collision',
      desc: 'Early project testing keybinding and block collisions.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/collision-proto',
      src: './images/work-sample/simple/collision-proto.gif',
      webLink: 'https://rusalex91.github.io/projects/lite/collision-proto/'
    }
  },

  complex: {
    0: {
      id: 0,
      name: 'Cyber Honey',
      desc: 'Landing page, made in cyberpunk style.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/cyber-bee-no-vue',
      src: './images/work-sample/complex/cyber-bee.gif',
      webLink: 'https://rusalex91.github.io/projects/medium/cyber-bee/'
    },
    1: {
      id: 1,
      name: 'BBS Shadow Front',
      desc: 'SPA with answers to interview questions..',
      tech: 'HTML, CSS, SCSS, JavaScript, Vue, Firebase',
      github: 'https://github.com/RusAlex91/shadow-front',
      src: './images/work-sample/complex/shadow-front.gif',
      webLink: 'https://rusalex91.github.io/projects/heavy/shadow-front/'
    },
    2: {
      id: 2,
      name: 'Find Spiritual Guru',
      desc: 'SPA',
      tech: 'HTML, CSS, SCSS, JavaScript, Vue, Vuex, VueRouter',
      github: 'https://github.com/RusAlex91/find-a-guru',
      src: './images/work-sample/complex/find-a-guru.gif',
      webLink: 'https://rusalex91.github.io/projects/heavy/find-a-guru/'
    },
    3: {
      id: 3,
      name: 'Quest prototype',
      desc:
        'An early prototype of a quest with a collision of objects. Animation frames and Drag and Drop realization.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/quest-prototype',
      src: './images/work-sample/complex/quest-prototype.gif',
      webLink: 'https://rusalex91.github.io/projects/heavy/quest-prototype/'
    },
    4: {
      id: 4,
      name: 'Text quest prototype',
      desc: 'A prototype of a text quest. Animations, Canvas and Drag and Drop',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/Quest-unfinished-proto',
      src: './images/work-sample/complex/quest-unfinished-proto.gif',
      webLink:
        'https://rusalex91.github.io/projects/heavy/quest-proto/quest-proto/'
    },
    5: {
      id: 5,
      name: 'Castle story proto',
      desc:
        'An early prototype of a strategy game. The basic game engine has been implemented.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/castle-story-proto',
      src: './images/work-sample/complex/castle-story-proto.gif',
      webLink: 'https://rusalex91.github.io/projects/heavy/castle-story-proto/'
    },
    6: {
      id: 6,
      name: 'Tzar Burden of Crown',
      desc:
        'Prototype / web remake of a strategy game. The game engine has been implemented.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/Tzar-Burden',
      src: './images/work-sample/complex/tzar.gif',
      webLink: 'https://rusalex91.github.io/projects/heavy/tzar/'
    }
  },
  testing: {
    1: {
      id: 1,
      name: 'Gallery',
      desc:
        'Gallery with drag and drop, JSON file/IMG file upload, URL upload, switch css for alternative gallery look and preloader.',
      tech: 'HTML, CSS, JavaScript',
      github: 'https://github.com/RusAlex91/frontend-test-assignment',
      src: './images/work-sample/simple/test_case_1.gif',
      webLink: 'https://rusalex91.github.io/projects/light/testing_case_1/'
    }
  }
}

portfolioCreation.extractPortfolioData('complex')
portfolioCreation.extractPortfolioData('simple')
portfolioCreation.extractPortfolioData('testing')
