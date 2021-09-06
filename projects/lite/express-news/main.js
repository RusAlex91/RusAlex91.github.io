const latest = document.getElementById('latest')
const popular = document.getElementById('popular')
const later = document.getElementById('later')
const categories = document.getElementById('category')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const searchWrapper = document.getElementById('search-wrapper')
const searchForm = document.getElementById('search-bar')

const key = 'ZL5vO5IOfvFBGrW7BcOiPkde9pXkzxW4'
const wrapper = document.getElementsByClassName('articles-wrapper')[0]

var sheet = document.getElementById('sheet').sheet
var articleNum = 0

const preload = document.getElementById('article-news-img')

function getLastFeed () {
  fetch(
    `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${key}`
  )
    .then(function (res) {
      // console.log(res.json())
      return res.json()
    })
    .then(function (data) {
      deliteArticles()
      deselectNav()
      latest.classList.add('selected')
      createArticles(data, 'last')
    })
}

function getMostPopularFeed () {
  fetch(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`
  )
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      console.log(data)
      deselectNav()
      popular.classList.add('selected')
      deliteArticles()
      createArticles(data, 'popular')
    })
}

function getCategories () {
  deselectNav()
  categories.classList.add('selected')
  deliteArticles()
}

function deselectNav () {
  latest.classList.remove('selected')
  popular.classList.remove('selected')
  categories.classList.remove('selected')
}

function getProperDate (date) {
  var mS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ]

  let splitDate = date.split('-')
  let day = splitDate[2].split('').slice(0, 2)
  let newDate
  if (day[0] == '0') {
    newDate = day.pop()
  } else {
    newDate = day.join('')
  }
  let monthNumber = splitDate[1].split('').pop()
  let mouthName = mS[monthNumber]
  let tempHour = splitDate[2]
    .split('')
    .slice(3)
    .join('')
  let hour = tempHour
    .split(':')
    .slice(0, 2)
    .join(':')

  let ampmHour = tempHour
    .split(':')
    .slice(0, 1)
    .join(':')
  let ampm = ampmHour >= 12 ? 'PM' : 'AM'
  let dateString = `${mouthName} ${newDate} at ${hour} ${ampm}`
  if (hour == '') {
    dateString = `${mouthName} ${newDate}`
  }

  return dateString
}

function createArticles (data, type) {
  var articles = data.results

  articles.forEach((news, i) => {
    articleNum = articleNum + 1
    let articleImgUrl = ''
    if (news.multimedia != null) {
      for (let image = 0; image < news.multimedia.length; image++) {
        if (news.multimedia[image].format == 'mediumThreeByTwo440') {
          articleImgUrl = news.multimedia[image].url
        }
      }
    } else if (news.media != null && news.media.length != 0) {
      let arr = news.media[0]['media-metadata']
      for (let image = 0; image < arr.length; image++) {
        if (arr[image].format == 'mediumThreeByTwo440') {
          articleImgUrl = arr[image].url
        }
      }
    }

    //add css
    // var cssRule = `.story${articleNum} {
    //     background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url("${articleImgUrl}");
    //     background-repeat: no-repeat;
    //     background-position: center;
    //     }
    //     `
    // var css_rules_num = sheet.cssRules.length;
    // sheet.insertRule(cssRule, css_rules_num);
    //
    //add html

    var date = getProperDate(news.published_date)

    let tempString = `
        <img class="article-news-img blurred" src="${articleImgUrl}" loading="lazy">
        <div class="article-news-inner-wrapper ">
    <a href="${news.url}">
        <h2 class="article-news-title">${news.title}</h2>
    </a>
    <div class="wrapper">
        <span class="article-news-category">${news.section}</span>
        <span class="article-news-time">${date}</span>
    </div>
</div>`
    let div = document.createElement('div')
    wrapper.appendChild(div)
    div.innerHTML = tempString
  })
}

function deliteArticles () {
  wrapper.innerHTML = ''
}

latest.addEventListener('click', getLastFeed)
popular.addEventListener('click', getMostPopularFeed)
categories.addEventListener('click', getCategories)
getLastFeed()

//sticky search
window.onscroll = function () {
  stickySearch()
}

var header = document.getElementById('search-bar')
var sticky = header.offsetTop

function stickySearch () {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky')
    header.style.zIndex = 2
    header.style.position = 'sticky'
  } else {
    header.classList.remove('sticky')
    header.style.zIndex = -2
    header.style.position = 'absolute'
  }
}

searchButton.addEventListener('click', executeSearch)

function executeSearch (params) {
  let querry = searchInput.value.split(' ').join('+')

  fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${querry}&api-key=${key}`
  )
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      console.log(data)
      deliteArticles()
      createSearchArticles(data, 'search')
    })
}

function createSearchArticles (data, type) {
  var articles = data.response.docs

  articles.forEach((news, i) => {
    articleNum = articleNum + 1
    let articleImgUrl = ''
    if (news.multimedia != null) {
      for (let image = 0; image < news.multimedia.length; image++) {
        if (news.multimedia[image].subtype == 'mediumThreeByTwo440') {
          articleImgUrl = news.multimedia[image].url
        }
      }
    }

    var date = getProperDate(news.pub_date)

    let tempString = `
        <img class="article-news-img blurred" src="https://static01.nyt.com/${articleImgUrl}" loading="lazy">
        <div class="article-news-inner-wrapper ">
    <a href="${news.url}">
        <h2 class="article-news-title">${news.headline.main}</h2>
    </a>
    <div class="wrapper">
        <span class="article-news-category">${news.section_name}</span>
        <span class="article-news-time">${date}</span>
    </div>
</div>`
    let div = document.createElement('div')
    wrapper.appendChild(div)
    div.innerHTML = tempString
  })
}
