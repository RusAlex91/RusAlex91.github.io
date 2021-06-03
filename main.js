const latest = document.getElementById("latest");
const popular = document.getElementById("popular");
const later = document.getElementById("later");
const key = "ZL5vO5IOfvFBGrW7BcOiPkde9pXkzxW4";
const wrapper = document.getElementsByClassName("articles-wrapper")[0]

var sheet = document.getElementById('sheet').sheet
var articleNum = 0;

const preload = document.getElementById("article-news-img")




function getLastFeed() {
    fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${key}`)
        .then(function(res) {
            // console.log(res.json())
            return res.json()
        })
        .then(function(data) {
            deliteArticles()
            deselectNav()
            latest.classList.add("selected")
            createArticles(data, "last")
        })
}

function getMostPopularFeed() {
    fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            deselectNav()
            popular.classList.add("selected")
            deliteArticles()
            createArticles(data, "popular")
        })
}

function deselectNav() {
    latest.classList.remove("selected")
    popular.classList.remove("selected")
    latest.classList.remove("selected")
}

function getProperDate(date) {
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    let splitDate = date.split("-")
    let day = splitDate[2].split("").slice(0, 2)
    let newDate
    if (day[0] == "0") {
        newDate = day.pop()
    } else {
        newDate = day.join("")
    }
    let monthNumber = splitDate[1].split("").pop()
    let mouthName = mS[monthNumber]
    let tempHour = splitDate[2].split("").slice(3).join("")
    let hour = tempHour.split(":").slice(0, 2).join(":")
    console.log(hour)
    let ampmHour = tempHour.split(":").slice(0, 1).join(":")
    let ampm = (ampmHour >= 12) ? "PM" : "AM";
    let dateString = `${mouthName} ${newDate} at ${hour} ${ampm}`
    if (hour == "") {
        dateString = `${mouthName} ${newDate}`
    }

    return dateString
}

function createArticles(data, type) {
    console.log(data.results)
    let articles = data.results
    articles.forEach((news, i) => {
        articleNum = articleNum + 1
        let articleImgUrl = ""
        if (news.multimedia != null) {

            for (let image = 0; image < news.multimedia.length; image++) {
                if (news.multimedia[image].format == "mediumThreeByTwo440") {
                    articleImgUrl = news.multimedia[image].url
                }
            }
        } else if (news.media != null) {

            let arr = news.media[0]["media-metadata"]
            for (let image = 0; image < arr.length; image++) {
                if (arr[image].format == "mediumThreeByTwo440") {
                    articleImgUrl = arr[image].url
                }
            }
        }

        //add css
        var cssRule = `.story${articleNum} {
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url("${articleImgUrl}");
            background-repeat: no-repeat;
            background-position: center; 
            }
            `
        var css_rules_num = sheet.cssRules.length;
        sheet.insertRule(cssRule, css_rules_num);
        // 
        //add html
        let date = getProperDate(news.published_date)
        let tempString = `
        <div class="blurred article-news-img story${articleNum}" "></div>
        <div class="article-news-inner-wrapper ">
    <a href="${news.url}">
        <h2 class="article-news-title">${news.title}</h2>
    </a>
    <div class="wrapper">
        <span class="article-news-category">${news.section}</span>
        <span class="article-news-time">${date}</span>
    </div>
</div>`
        let div = document.createElement("div");
        wrapper.appendChild(div)
        div.innerHTML = tempString
        changePreloadImg()
    });

}

function changePreloadImg() {
    let arr = document.getElementsByClassName("article-news-img")
    for (let bg = 0; bg < arr.length; bg++) {
        var imgPath = arr[bg].style.backgroundImage;
        if (imgPath) {
            $('<img>').attr('src', imgPath).load(function() {
                $(this).remove();
                // [do something here...]
            });
        }

    }

}

function deliteArticles() {
    wrapper.innerHTML = ""
}

latest.addEventListener("click", getLastFeed)
popular.addEventListener("click", getMostPopularFeed)

getLastFeed()