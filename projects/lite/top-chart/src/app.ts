function getUrl (pagetoken) {
  let pt = typeof pagetoken === 'undefined' ? '' : `&pageToken=${pagetoken}`;
    var mykey = 'AIzaSyAP-Xc8OC4aCdT3YJXiE4VfTUnV4JJAMzI';
    var playListID = 'PL2R75x3ZazUA7f_pQ090p2JBNYdpMouGc';
    var URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=14&playlistId=${playListID}&key=${mykey}${pt}`
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
let video = document.getElementsByClassName('video')[0]
function responseHandler (response) {
  // if (response.nextPageToken) apiCall(response.nextPageToken)

  console.log(response)
  const videosArr = response.items

  // let video = document.getElementsByClassName('video')[0]
  // let key = arr[5].snippet.resourceId.videoId
  // videos.push(key)
  // let link = `https://www.youtube.com/embed/${key}?&autoplay=1&mute=1`
  // console.log(link)
  // video.src = link

  // let video2 = document.getElementsByClassName('video')[1]
  // let key2 = arr[6].snippet.resourceId.videoId
  // videos.push(key2)
  // let link2 = `https://www.youtube.com/embed/${key2}?&autoplay=1&mute=1`
  // video2.src = link2

  videosArr.forEach(video => {
    videos.push(video.snippet.resourceId.videoId)
  })
}
apiCall()

let videos = []
console.table(videos)

let tag = document.createElement('script')

tag.src = 'https://www.youtube.com/iframe_api'
let firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player
let player2
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

// 4. The API will call this function when the video player is ready.
function onPlayerReady (event) {
  event.target.playVideo()
  player.mute()
}

function onPlayerReady2 (event) {
  event.target.playVideo()
  player2.mute()
}

let done = false
function onPlayerStateChange (event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(muteVideo, 6000)
    done = true
  }
}

function stopVideo () {
  player.stopVideo()
}

function muteVideo () {
  console.log('unmuted')
  player.unMute()
  player2.mute()
}

function muteVideo2 () {
  console.log('unmuted2')
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
  contestMaxVideo: 8,
  contestCurrentTour: () => {
    return Math.floor(videos.length / 2)
  }
}

const contestControls = {
  contest_end: function () {
    const maxSteps = storage.contestMaxStep()
    if (storage.contestStep == maxSteps || storage.contestStep == maxSteps) {
      storage.contestEnd = true
      console.log('end tour')
      // alert('end tour' + maxSteps)
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
    const id = event.target.dataset.id
    if (id == 1) {
      storage.contest_tour.push(videos[storage.videoId_1])
      console.table(videos)
      console.table(storage.contest_tour)
      console.log(storage.videoId_1)
      console.log(storage.videoId_2)
    } else if (id == 2) {
      storage.contest_tour.push(videos[storage.videoId_2])
      console.table(videos)
      console.table(storage.contest_tour)
      console.log(storage.videoId_1)
      console.log(storage.videoId_2)
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
  } catch (error) {
    console.log(error)
  }
  refreshTitle()
}

const start = document.getElementById('start')

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

document.getElementById('start').addEventListener('click', function () {
  document.getElementsByClassName('modal')[0].style.display = 'none'
})

function refreshTitle () {
  const title = document.getElementById('title')
  title.innerHTML = `Best of something ${storage.contestMaxVideo} |${
    storage.contestStep
  }/${storage.contestMaxStep()}|`
}
