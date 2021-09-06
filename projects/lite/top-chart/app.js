function getUrl (pagetoken) {
  var pt = typeof pagetoken === 'undefined' ? '' : `&pageToken=${pagetoken}`,
    mykey = 'AIzaSyAP-Xc8OC4aCdT3YJXiE4VfTUnV4JJAMzI',
    playListID = 'PLEeWFjptLTCbazxcOagQPE2pR26ml33X3',
    URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=32&playlistId=${playListID}&key=${mykey}${pt}`
  return URL
}

function apiCall (npt) {
  fetch(getUrl(npt))
    .then(response => {
      return response.json()
    })
    .then(function (response) {
      if (response.error) {
        console.log(response.error)
      } else {
        responseHandler(response)
      }
    })
}
var video = document.getElementsByClassName('video')[0]
function responseHandler (response) {
  let videosArr = response.items
  videosArr.forEach(video => {
    videos.push(video.snippet.resourceId.videoId)
  })
}
apiCall()

let videos = []

var tag = document.createElement('script')

tag.src = 'https://www.youtube.com/iframe_api'
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

var player
var player2
function onYouTubeIframeAPIReady () {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: videos[0],

    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  })
  player2 = new YT.Player('player2', {
    height: '360',
    width: '640',
    videoId: videos[1],
    events: {
      onReady: onPlayerReady2,
      onStateChange: onPlayerStateChange
    }
  })
}
function onPlayerReady (event) {
  event.target.playVideo()
  player.mute()
}

function onPlayerReady2 (event) {
  event.target.playVideo()
  player2.mute()
}

var done = false
function onPlayerStateChange (event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true
  }
}

function stopVideo () {
  player.stopVideo()
}

function muteVideo () {
  player.unMute()
  player2.mute()
}

function muteVideo2 () {
  player.mute()
  player2.unMute()
}

const btn_right = document.getElementById('vote-right')

const btn_left = document.getElementById('vote-left')

const storage = {
  videoId_1: 0,
  videoId_2: 1,
  contest_tour: [],
  contestEnd: false,
  contestStart: true,
  contestMaxStep: () => {
    return Math.floor(videos.length / 2)
  },
  contestStep: 0,
  contestMaxVideo: 32,
  contestCurrentTour: () => {
    return Math.floor(videos.length / 2)
  }
}

const contestControls = {
  contest_end: function () {
    let maxSteps = storage.contestMaxStep()
    if (storage.contestStep == maxSteps || storage.contestStep == maxSteps) {
      storage.contestEnd = true
      storage.contestCurrentTour = maxSteps
      videos = storage.contest_tour
      storage.contest_tour = []
      storage.contestStep = 0
      storage.videoId_1 = 0
      storage.videoId_2 = 1
      refreshTitle()
      if (videos.length == 1) {
        refreshPlayer(true)
        section_left.style.display = 'none'
        document.getElementsByClassName('winner-title')[0].style.display =
          'block'
        document.getElementById('title').style.display = 'none'
      }
    }
  }
}

btn_right.addEventListener(
  'click',
  changeVideoPlayer.bind(event, videos, storage.videoId_1, storage.videoId_2),
  false
)
btn_left.addEventListener(
  'click',
  changeVideoPlayer.bind(event, videos, storage.videoId_1, storage.videoId_2),
  false
)

const section_right = document.getElementById('section')

const section_left = document.getElementById('section2')

section_right.addEventListener('mouseover', muteVideo)
section_left.addEventListener('mouseover', muteVideo2)

function changeVideoPlayer (videos, videoId_1, videoId_2, event) {
  storage.contestStep += 1
  try {
    let id = event.target.dataset.id
    if (id == 1) {
      storage.contest_tour.push(videos[storage.videoId_1])
    } else if (id == 2) {
    }
    event.preventDefault()
    if (storage.contestStart) {
      storage.contestStart = false
      storage.videoId_1 += 2
      storage.videoId_2 += 2
      player.loadVideoById(videos[storage.videoId_1], 0, 'default')
      player2.loadVideoById(videos[storage.videoId_2], 0, 'default')
    } else if (!storage.contestStart) {
      contestControls.contest_end()
      if (storage.contestEnd) {
        storage.contestEnd = false
        refreshPlayer()
        return
      } else {
        storage.videoId_1 += 2
        storage.videoId_2 += 2
        refreshPlayer()
      }
    }
  } catch (error) {}
  refreshTitle()
}

let start = document.getElementById('start')

start.addEventListener('click', function () {
  player.loadVideoById(videos[storage.videoId_1], 0, 'default')
  player2.loadVideoById(videos[storage.videoId_2], 0, 'default')
})

// const abc3 = document.getElementsByClassName('changeVideoPlayer')[0]

// abc3.addEventListener('click', changeVideo)
function refreshPlayer (winner) {
  if (winner) {
    player.loadVideoById(videos[storage.videoId_1], 0, 'default')
  } else {
    player.loadVideoById(videos[storage.videoId_1], 0, 'default')
    player2.loadVideoById(videos[storage.videoId_2], 0, 'default')
  }
}

function refreshTitle () {
  let title = document.getElementById('title')
  title.innerHTML = `Best of something ${storage.contestMaxVideo} |${
    storage.contestStep
  }/${storage.contestMaxStep()}|`
}

//Ахуенный подход Санёк, хвалю (нет)

document.getElementById('start').addEventListener('click', function () {
  document.getElementsByClassName('modal')[0].style.display = 'none'
})

document
  .getElementsByClassName('modal')[0]
  .addEventListener('mouseover', function (event) {
    event.stopPropagation()
  })

document
  .getElementsByClassName('modal')[0]
  .addEventListener('click', function (event) {
    event.stopPropagation()
  })
