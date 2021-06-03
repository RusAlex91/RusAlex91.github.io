const latest = document.getElementById("latest");
const key = "ZL5vO5IOfvFBGrW7BcOiPkde9pXkzxW4";
const wrapper = document.getElementsByClassName("articles-wrapper")[0]
var sheet = document.getElementById('sheet').sheet
var articleNum = 0;


latest.addEventListener("onload", getLastFeed())

function getLastFeed() {
    fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${key}`)
        .then(function(res) {
            // console.log(res.json())
            return res.json()
        })
        .then(function(data) {
            createArticles(data)
        })


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
    let ampmHour = tempHour.split(":").slice(0, 1).join(":")
    let ampm = (ampmHour >= 12) ? "PM" : "AM";
    let dateString = `${mouthName} ${newDate} at ${hour} ${ampm}`
    return dateString
}

function createArticles(data) {
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

        //add html
        let date = getProperDate(news.published_date)
        let tempString = `<div class="article-news-inner-wrapper story${articleNum}">
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



    });

}