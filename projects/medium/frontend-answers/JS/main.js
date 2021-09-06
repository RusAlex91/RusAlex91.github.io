const acc = document.getElementsByClassName('arrow') // переделать в объект

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('up')

    let panel = this.parentElement
    panel = panel.nextElementSibling
    panel = panel.nextElementSibling
    this.scrollIntoView()
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}

// Animation placeholder search Временно отрубил пока делаю коменты
// var plaseholderStrings = ['Что такое rem и em?', 'Где найти бога?']
// function clearPlaceholder (search) {
//   search.placeholder = ''
// }

// (async function AnimateString (search) {
//   for (var i = 0; i < plaseholderStrings.length; i++) {
//     var letters = plaseholderStrings[i].split('')
//     await printLetters(letters)
//   }
// })()

async function printLetters (letters) {
  let search = document.getElementsByClassName('searchInput')[0]
  clearPlaceholder(search)

  function timer (v) {
    return new Promise(r => setTimeout(r, v))
  }
  let ph = search.placeholder
  let time = 100
  async function functionName () {
    for (let i = 0; i < letters.length; i++) {
      time = getRandomNumber(100, 250)
      ph = ph + letters[i]
      search.placeholder = ph
      await timer(time)
      console.log(time)
    }
  }
  functionName()
  await timer(10000)
}

function BlinkingCursour () {
  for (let i = 0; i < 60; i++) {
    ph = ph + '|'
  }
}

function getRandomNumber (min, max) {
  return Math.random() * (max - min) + min
}
// comments section
const HDC_EL = {
  submit: document.getElementById('hdc_submit'),
  comment: document.getElementById('hdc_comment_input'),
  email: document.getElementById('hdc_email_input'),
  name: document.getElementById('hdc_name_input'),
  reactions: document.getElementsByClassName('hdc_reaction'),
  upvote: document.getElementsByClassName('hdc_upvote'),
  downvote: document.getElementsByClassName('hdc_downvote')
}
// eslint-disable-next-line
var canSubmit = false
// eslint-disable-next-line
var reaction = null

function hdc_submit () {
  if (canSubmit) {
    const comment = {
      comment: HDC_EL.comment.value.trim(),
      email: HDC_EL.email.value.trim(),
      name: HDC_EL.name.value.trim(),
      reaction: reaction
    }
    hdc_disable_submit()
    console.log(comment)
  }
}

function hdc_can_Submit () {
  const comment = HDC_EL.comment.value.trim()
  const email = HDC_EL.email.value.trim()
  const name = HDC_EL.name.value.trim()
  if (comment.length >= 1 && email.length > 4 && name.length >= 3) {
    if (hdcomments_validate_email_address(email)) {
      HDC_EL.submit.classList.add('hdc_submit_enabled')
      HDC_EL.submit.disabled = false
      canSubmit = true
    } else {
      hdc_disable_submit()
      canSubmit = false
    }
  } else {
    hdc_disable_submit()
    canSubmit = false
  }
}

function hdc_disable_submit () {
  HDC_EL.submit.classList.remove('hdc_submit_enabled')
  HDC_EL.submit.disabled = true
}

function hdc_select_reaction () {
  reaction = this.getAttribute('data-reaction')
  const prev = document.getElementsByClassName('hdc_reaction_selected')[0]
  if (prev) {
    prev.classList.remove('hdc_reaction_selected')
  }
  this.classList.add('hdc_reaction_selected')
}

function hdc_vote (el, vote) {
  if (!el.classList.contains('hdc_vote_disabled')) {
    const commentID = el.getAttribute('data-id')
    let score = document.getElementsByClassName('hdc_vote_' + commentID)[0]
      .innerText
    score = parseInt(score)
    if (vote) {
      score = score + 1
    } else {
      score = score - 1
    }
    if (score > 0) {
      score = '+' + score
    }
    document.getElementsByClassName(
      'hdc_vote_' + commentID
    )[0].innerText = score
    el.classList.add('hdc_vote_selected')
    elvotes = document.querySelectorAll(
      '#hdcomment_' + commentID + ' .hdc_vote_options span'
    )
    for (let i = 0; i < elvotes.length; i++) {
      elvotes[i].classList.add('hdc_vote_disabled')
    }
  }
}

function hdc_set_event_listeners () {
  HDC_EL.submit.addEventListener('click', hdc_submit)
  HDC_EL.comment.addEventListener('keyup', hdc_can_Submit)
  HDC_EL.email.addEventListener('keyup', hdc_can_Submit)
  HDC_EL.name.addEventListener('keyup', hdc_can_Submit)
  for (var i = 0; i < HDC_EL.reactions.length; i++) {
    HDC_EL.reactions[i].addEventListener('click', hdc_select_reaction)
  }
  for (var i = 0; i < HDC_EL.upvote.length; i++) {
    HDC_EL.upvote[i].addEventListener('click', function () {
      hdc_vote(this, true)
    })
    HDC_EL.downvote[i].addEventListener('click', function () {
      hdc_vote(this, false)
    })
  }
}
hdc_set_event_listeners()

function hdcomments_validate_email_address (email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
//
