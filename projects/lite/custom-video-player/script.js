const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')
const qualityChange = document.getElementsByClassName('change-quality')[0]
const quality = document.getElementsByClassName('quality ')[0]

// Play & pause video
function toggleVideoStatus () {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

// change video quality
function changeQuality (quality) {
  video.pause()
  const currentTimeVideo = video.currentTime
  video.src = `videos/TestVideo${quality}P.mp4`
  video.currentTime = currentTimeVideo
  video.play()
  toggleQuality()
}
// toggle quality panel
// toggle quality panel
function toggleQuality () {
  if (quality.style.visibility == 'visible') {
    quality.style.visibility = 'hidden'
  } else {
    quality.style.visibility = 'visible'
  }
}

// update play/pause icon
function updatePlayIcon () {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}

// Update progress & timestamp
function updateProgress () {
  progress.value = (video.currentTime / video.duration) * 100

  // Get minutes
  let mins = Math.floor(video.currentTime / 60)
  if (mins < 10) {
    mins = '0' + String(mins)
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60)
  if (secs < 10) {
    secs = '0' + String(secs)
  }

  timestamp.innerHTML = `${mins}:${secs}`
}

// Set video time to progress
function setVideoProgress () {
  video.currentTime = (+progress.value * video.duration) / 100
}

// Stop video
function stopVideo () {
  video.currentTime = 0
  video.pause()
}

// Event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)

qualityChange.addEventListener('click', toggleQuality)
