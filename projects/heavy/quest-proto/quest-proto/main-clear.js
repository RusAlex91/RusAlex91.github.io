function functionName() {

}

// убрать большие буквы в названиях функтциях они для конструктора https://ruseller.com/lessons.php?rub=28&id=1292
// ------------ Титульная страница с вводом имени ---------------//
// Переключатели стадий игры
// eslint-disable-next-line
var heavengamestartFlag = false;
const gameStages = {
  HeavenGameStart() {
    const monitors = document.getElementsByClassName('monitors')[0];
    const heaventext = document.getElementsByClassName('heaven-text')[0];
    const toggleArray = [];
    toggleArray.push(monitors, heaventext);
    for (let i = 0; i < toggleArray.length; i++) {
      toggleArray[i].classList.toggle('hidden');
    }
    const mainbody = document.getElementsByTagName('body')[0];
    mainbody.classList.remove('heaven');
    const monitormain = document.getElementById('monitor');
    const monitorleft = document.getElementById('monitor-text');
    const monitorright = document.getElementById('monitor-inventory');
    const toggleArrayMonitors = [];
    setTimeout(() => {
      toggleArrayMonitors.push(monitormain, monitorleft, monitorright);
      for (let i = 0; i < toggleArrayMonitors.length; i++) {
        toggleArrayMonitors[i].style.opacity = 1;
      }
    }, 1000);
    localStorage.setItem('GameStage', 'after-title');
  },
  // Старт текстового этапа игры
  textPhaseStart() {
    localStorage.setItem('GameStage', 'apartment-text-phase');
    const sound = document.getElementById('audio-text-phase');

    sound.play();
    // Чисто визуальная загрузка, ничего не подгружается
    const svgldr = document.getElementsByClassName('loader'); // свг иконка загрузки
    for (let i = 0; i < svgldr.length; i++) {
      svgldr[i].classList.toggle('hidden');
    }
    setTimeout(() => {
      for (let i = 0; i < svgldr.length; i++) {
        svgldr[i].classList.toggle('hidden');
      }
    }, 1500);
    setTimeout(bgTextMainMonitor(), 3000);
    // setTimeout(textMainMonitor(), 3100);
    // setTimeout(toggleInterfaceVisibility(), 3200);
    sleep(3200).then(hideEnterForm());

    // Просто для статистики + прикрутить кто где кликает. Можно ли?
    const userName = document.getElementById('inp');
    localStorage.setItem('UserName', inp.value);
    setTimeout(BgOpacityAndText(), 6300);
  },
};

//

function bgTextMainMonitor() {
  const titleScreen = document.getElementsByClassName('bg-town')[0];
  const monitorscreen = document.getElementById('monitorscreen');
  monitorscreen.classList.toggle('text-phase-bg-zoom-resize');
  titleScreen.classList.toggle('bg-text-stage');
}

function bgMainMonitorSizeRevert() {
  const monitorscreen = document.getElementById('monitorscreen');
  monitorscreen.classList.toggle('text-phase-bg-zoom-resize');
  monitorscreen.classList.toggle('text-phase-bg-zoom-revert');
  const titleScreen = document.getElementsByClassName('bg-town')[0];
  titleScreen.classList.toggle('bg-text-stage');
  titleScreen.classList.toggle('bg-text-stage-zoom');
  bgZoom();
}

function bgZoom() {
  const titleScreen = document.getElementsByClassName('bg-town')[0];
  setTimeout(() => {
    NarratorTextHide();
  }, 100);
  setTimeout(() => {
    titleScreen.classList.toggle('zoom-stage-1');
  }, 3000);
  setTimeout(() => {
    titleScreen.classList.toggle('zoom-stage-2');
  }, 6000);
  setTimeout(() => {
    titleScreen.classList.toggle('zoom-stage-3');
  }, 10000);
  setTimeout(() => {
    HeroTextShow();
  }, 13000);
}

function NarratorTextHide() {
  const titleScreen = document.getElementsByClassName('typewriting')[0];
  titleScreen.classList.toggle('hidden');
}

function HeroTextShow() {
  const heroSpeach = document.getElementsByClassName('heroSpeach')[0];
  heroSpeach.classList.toggle('hidden');
  HeroTextAudioGasp(heroSpeach);
  setTimeout(() => {
    HeroTextAudioCoughing(heroSpeach);
  }, 2000);
  setTimeout(() => {
    HeroTextAudioSpitting(heroSpeach);
  }, 5000);
}

function HeroTextAudioGasp(heroSpeach) {
  heroSpeach.textContent = '*Вздох*';
  heroSpeach.classList.toggle('pulseShake');
  const sound = document.getElementById('audio-male-gasp');
  sound.play();
  setTimeout(() => {
    sound.pause();
  }, 1000);
}
function HeroTextAudioCoughing(heroSpeach) {
  heroSpeach.textContent = '*Кашель*';
  const sound = document.getElementById('audio-coughing');
  sound.play();
  setTimeout(() => {
    sound.pause();
  }, 2500);
}

function HeroTextAudioSpitting(heroSpeach) {
  heroSpeach.textContent = '*Плевок*';
  const sound = document.getElementById('audio-spitting');
  sound.currentTime = 1;
  sound.play();
  console.log('Рисуем монолог');
  setTimeout(() => {
    console.log('а вот и Монолог');
    sound.pause();
    showCanvasWithHandwrite();
    loweringBgOpacity();
    secondPhaseMonologe.first();
    heroSpeach.classList.toggle('hidden');
  }, 2500);
}


// уменьшаем прозрачность темного фона на котором будет текст
function loweringBgOpacity() {
  const titleScreen = document.getElementsByClassName('position-wrapper-phase-1')[0];
  titleScreen.style = 'background: rgba(0, 0, 0, 0.8);';
}

// показываем канвас на котором будет текст
let fpFirst = true;
let fpSecond = false;
let fpThird = false;
let fpForth = false;
function showCanvasWithHandwrite() {
  const fancy_title = document.getElementsByClassName('fancy_title')[0];
  fancy_title.classList.toggle('hidden');
}
// Монолог FirstPhase переключатели
const secondPhaseMonologe = {
  first: function show() {
    // DrawingText(arr[0], 0);
    // DrawingText(arr[1], 1);
    // DrawingText(arr[2], 2);
    // showPaper();
    PrintCanvas(arr[0], showButtonNextMonologe);
    fpFirst = false;
    fpSecond = true;
  },
  second: function show() {
    showButtonNextMonologe();
    PrintCanvas(arr[1], showButtonNextMonologe);
    fpSecond = false;
    fpThird = true;
  },
  third: function show() {
    showButtonNextMonologe();
    PrintCanvas(arr[2]);
    fpThird = false;
    fpForth = true;
    toggleInterfaceVisibility();
    setTimeout(description.wineBottle.show, 15000);
  },
  forth: function show() {

  },
};

// Объект который управляет всеми появлениями во вкладке квеста
const description = {
  wineBottle: {
    show() {
      texts.clearText();
      const textDiscription = 'Прикроватная тумбочка пуста, за исключением стоящей на ней бутылки. Стакан отсуствует.';
      const textVariants = ['Не пить', 'Отпить немного', 'Вылить'];
      itemImage.firstTrainingAlco();
      dialogeOptions(textVariants[0], textVariants[1], textVariants[2]);
      showSlow(texts.printText(textDiscription));
    },
  },
  letter: {
    show() {
      texts.clearText();
      clearQuestItem();
      changeChoiseData('letter');
      const textDiscription = 'На рабочем столе, покрытым множеством вырезок из газет и уже успевших запылиться старых книг, лежит письмо.';
      const textVariants = ['Осмотреть', 'Прочесть', 'Выбросить'];
      itemImage.letter();
      dialogeOptions(textVariants[0], textVariants[1], textVariants[2]);
      showSlow(texts.printText(textDiscription));
    },
  },

};
function clearQuestItem() {
  const item = document.getElementById('drop1');
  item.removeChild(item.firstChild);
}
let choiceGlobal;
//
function selectChoice(choice) {
  if (choice == 0) {
    const data = document.getElementById('choice1');
    const finalData = data.getAttribute('choiceData');
    choiceGlobal = finalData;
    console.log('1');
  } else if (choice == 1) {
    const data = document.getElementById('choice2');
    const finalData = data.getAttribute('choiceData');
    choiceGlobal = finalData;
    console.log('2');
  } else if (choice == 2) {
    const data = document.getElementById('choice3');
    const finalData = data.getAttribute('choiceData');
    choiceGlobal = finalData;
    console.log('3');
  }
}

const choiceHandlers = {
  flags: {
    wineFlagOne: true,
    wineFlagTwo: true,
  },
  wine() {
    if (choiceGlobal == 'Wine1') {
      console.log(this.flags.wineFlagOne);
      console.log('первый1');
      const animation = document.getElementById('choice1');
      if (this.flags.wineFlagOne) {
        animation.textContent = 'Выпить';
        animation.classList.add('leRainDrop');
        animation.classList.add('sequence');
        animateSequence();
        this.flags.wineFlagOne = false;
      } else if (!this.flags.wineFlagOne) {
        animation.textContent = '';
      }

      // this.clearChoices();
    } else if (choiceGlobal == 'Wine2') {
      console.log('первый2');
      hideMainTextSlow();
      this.clearChoices();
      changeChoiseData('letter');
      setTimeout(description.letter.show, 15000);
      clearCanvas();
      PrintCanvas(arr[3]);
    } else if (choiceGlobal == 'Wine3') {
      const animation = document.getElementById('choice3');
      if (this.flags.wineFlagTwo) {
        animation.classList.add('hu__hu__');
        animation.textContent = 'Выпить';
        this.flags.wineFlagTwo = false;
      } else if (!this.flags.wineFlagTwo) {
        animation.textContent = '';
      }
    }
  },
  letter: {

  },
  clearChoices() {
    const data = document.getElementsByClassName('choices');
    for (let i = 0; i < data.length; i++) {
      const select = `selectChoice(${i})`;
      data[i].setAttribute('onclick', select);
    }
  },
};

function changeChoiseData(item) {
  const data = document.getElementsByClassName('choices');
  for (let i = 0; i < data.length; i++) {
    const select = `${item}${i}`;
    data[i].setAttribute('choiceData', select);
  }
}

// Плавный показ предметов и текста
function showSlow(callback) {
  const mainText = document.getElementsByClassName('main-text')[0];
  const wrapperChoices = document.getElementsByClassName('wrapper-choices')[0];
  const wrapperDroping = document.getElementsByClassName('droping-wrapper')[0];
  setTimeout(() => mainText.style.opacity = 1, 1);
  setTimeout(() => callback, 1000);
  setTimeout(() => wrapperChoices.style.opacity = 1, 7500);
  setTimeout(() => wrapperDroping.style.opacity = 1, 6500);
}
const tests = {
  testCallback() {
    console.log('Колбек');
  },
};

function dialogeOptions(choice1, choice2, choice3) {
  const variants = document.getElementsByClassName('choices');
  variants[0].textContent = choice1;
  variants[1].textContent = choice2;
  variants[2].textContent = choice3;
  console.log(variants);
}

function hideMainTextSlow() {
  const mainText = document.getElementsByClassName('main-text')[0];
  const wrapperChoices = document.getElementsByClassName('wrapper-choices')[0];
  const wrapperDroping = document.getElementsByClassName('droping-wrapper')[0];
  setTimeout(() => mainText.style.opacity = 0, 600);
  setTimeout(() => wrapperChoices.style.opacity = 0, 600);
  setTimeout(() => wrapperDroping.style.opacity = 0, 600);
}

// var multiplyToggle = function (element, class0, class1) {
//   element.classList.toggle(class0);
//   element.classList.toggle(class1);
// };

// Переключатель между фазами монолога
const nextMonologe = document.getElementsByClassName('next-monologe')[0];
nextMonologe.addEventListener('click', () => {
  if (fpFirst == true) {
    secondPhaseMonologe.first();
    clearCanvas();
    console.log('Первый монолог');
  } else if (fpSecond == true) {
    secondPhaseMonologe.second();
    console.log('Второй монолог');
    clearCanvas();
  } else if (fpThird == true) {
    secondPhaseMonologe.third();
    console.log('Третий монолог');
    clearCanvas();
  }
});

// setInterval(function monologeHandlers() {
//   if () {
//
//   }
// }, 100)
function showPaper() {
  const phase = document.getElementsByClassName('position-wrapper-phase-2')[0];
  phase.classList.toggle('hidden');
}

/* Sleep func */
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
// sleep(500).then(() => {
//   alert('sleep 500ms');
// });


function BgOpacityAndText() {
  const monitorscreen = document.getElementById('monitorscreen');
  // monitorscreen.classList.toggle('text-phase-bg-opacity-shade');
  setTimeout(() => {
    const hihi = document.getElementsByClassName('typewriting')[0];
    hihi.classList.toggle('hidden');
    // eslint-disable-next-line
    const sound = document.getElementById('audio-typing');
    function typingAudio() {
      sound.pause();
      const min = 0;
      const max = 5;
      const random = Math.random() * (+max - +min) + +min;
      sound.currentTime = random;
      sound.play();
    }
    setTimeout(() => {
      typingAudio();
      hihi.preventDefault;
      hihi.classList.remove('typewriting');
      void hihi.offsetWidth;
      hihi.classList.add('typewriting');
      hihi.style.width = '15rem';
      hihi.style.animation = 'type 1s steps(40, end);';
      hihi.textContent = '1926 год';
      hihi.addEventListener('animationend', () => {
        sound.pause();
      });
    }, 1000);
    setTimeout(() => {
      typingAudio();
      hihi.preventDefault;
      hihi.classList.remove('typewriting');
      void hihi.offsetWidth;
      hihi.style.width = '22rem';
      hihi.style.animation = 'type 1.5s steps(40, end);';
      hihi.classList.add('typewriting');
      hihi.textContent = 'Город Аркхэм';
      hihi.addEventListener('animationend', () => {
        sound.pause();
      });
    }, 5100);
    setTimeout(() => {
      typingAudio();
      hihi.preventDefault;
      hihi.classList.remove('typewriting');
      void hihi.offsetWidth;
      hihi.classList.add('typewriting');
      hihi.style.width = '34rem';
      hihi.style.animation = 'type 2s steps(40, end);';
      hihi.textContent = 'Предрассветные часы';
      hihi.addEventListener('animationend', () => {
        sound.pause();
      });
    }, 9000);
    setTimeout(() => {
      bgMainMonitorSizeRevert();
    }, 12000);
  }, 100);
}

function hideHeroText() {
  const titleScreen = document.getElementsByClassName('position-wrapper-phase-1')[0];
  titleScreen.classList.toggle('hidden');
}
function zoomOnBgText() {

}
// Не даём вводить кирилицу тк шрифт не поддерживает
document.getElementById('inp').onkeyup = function dd() {
  const reg = /[а-яА-ЯёЁ]/g;
  if (this.value.search(reg) != -1) {
    this.value = this.value.replace(reg, '');
  }
};


// заменяем кнопку на титульнике, на картинку при нажатии
const inputButton = document.getElementById('inputButton');
inputButton.addEventListener('click', () => {
  const inputButtonImage = document.getElementsByClassName(
    'pushedInputButton',
  )[0];
  const sound = document.getElementById('audio');
  setTimeout(() => {
    inputButton.style.opacity = '0';
  }, 10);
  setTimeout(() => {
    inputButton.classList.toggle('hidden');
  }, 200);
  setTimeout(() => {
    inputButtonImage.classList.toggle('hidden');
    sound.play();
  }, 10);
  setTimeout(() => {
    inputButtonImage.style.opacity = '1';
  }, 200);
  gameStages.textPhaseStart();
});
// Анимация стрелочки которая показывает на кнопку включения

// const arrowAnimation = setInterval(() => {
//   const arrows = document.getElementsByClassName('arrow');
//   if (heavengamestartFlag === false) {
//     // eslint-disable-next-line
//     for (const key of arrows) {
//       key.classList.toggle('opacity-zero');
//     }
//   } else if (heavengamestartFlag === true) {
//     // eslint-disable-next-line
//     for (const key of arrows) {
//       key.classList.add('opacity-zero');
//     }
//   }
// }, 1500);
// Подсказки под дисклеймером
const heavenStart = document.getElementsByClassName('heaven-text')[0];
const heavenStartHint = document.getElementsByClassName('heaven-text-hint')[0];
let hintCounter = 0;
heavenStartHint.addEventListener('click', () => {
  switch (hintCounter) {
    case 0:
      heavenStartHint.innerHTML = 'Да не на этот текст!';
      hintCounter++;
      break;
    case 1:
      heavenStartHint.innerHTML = 'И опять не тот!';
      hintCounter++;
      break;
    case 2:
      heavenStartHint.innerHTML = 'Нужно нажать на текст чуть выше...';
      hintCounter++;
      break;
    case 3:
      heavenStartHint.innerHTML = 'Мне кажется или вы это делаете специально?';
      hintCounter++;
      break;
    case 4:
      heavenStartHint.innerHTML = 'Ничего не изменится если вы так и будете нажимать на эту строку';
      hintCounter++;
      break;
    case 5:
      heavenStartHint.innerHTML = '...';
      break;
    default:
  }
});
// основной текст дисклеймер
let hevenTextFlag = false;
heavenStart.addEventListener('click', async () => {
  if (hevenTextFlag === false) {
    hevenTextFlag = true;
    heavenStartHint.classList.toggle('hidden');
    const heaventext = document.getElementsByClassName('heaven-text')[0];
    const heavenTextArr = [
      'Привет',
      'На связи создатель этой страницы',
      'Тут располагается игра',
      'Это моя первая довольно большая работа на JS',
      'Работа простенькая, но у меня ушло на неё много времени',
      'Я не умею рисовать, сочинять музыку и ещё много чего',
      'Так что множество фрагментов я позаимствовал у других игр',
      'Вы наверняка их узнаете',
      'Некоторый JS и CSS код я так же позаимствовал',
      'Так что все права пренадлежат создателям',
      'Я лишь воспользовался их трудом для своей демонстрации',
      'Постарайтесь не сильно закатывать глаза',
      'и да, это шрифт Комик Санс...',
      'Я сделал этот выбор осознанно',
      'Простите...',
      'Думаю вам уже пора приступать к игре',
      'Извините за задержку',
    ];

    function timer(v) {
      return new Promise((r) => setTimeout(r, v));
    }

    const sound = document.getElementById('audio-heaven');
    sound.play();
    for (var i = 0; i < heavenTextArr.length; i++) {
      setTimeout(() => {
        heaventext.style.opacity = 0;
      }, 100);
      setTimeout(() => {
        heaventext.innerHTML = heavenTextArr[i];
        heaventext.style.opacity = 1;
      }, 800);

      if (i === 16) {
        setTimeout(() => {
          function firstPhaseStart(callback) {
            callback();
            gameStages.HeavenGameStart();
            sound.pause();
          }

          function startsnap() {
            const soundSnap = document.getElementById('audio-snap');
            soundSnap.play();
          }
          firstPhaseStart(startsnap);
        }, 4000);
      }
      await timer(3000);
    }
  }
});

let imgFirstPhase = false;
// Первая проверка загрузки картинок
const imageLoadingHandlers = {
  imgfirstPhase() {
    // делаем картинки видимыми
    const abbc = document.querySelectorAll('.fog');
    for (let i = 0; i < abbc.length; i++) {
      abbc[i].classList.toggle('hidden');
    }
    // исправляем пути картинок
    [].forEach.call(document.querySelectorAll('img[data-src-1]'), (img) => {
      img.setAttribute('src', img.getAttribute('data-src-1'));
      img.onload = function () {
        img.removeAttribute('data-src-1');
      };
    });
    // проверяем, загрузились ли они
    if (loadingImages(imgFirstPhase)) {
      imgFirstPhase = true;
    }
    // вот тут остановился
  },
  imgSecondPhase() {},
};

function loadingImages(check) {
  const firstPhaseImagesLoaded = new Promise((resolve, reject) => {
    const imgs = document.images;
    const len = imgs.length;
    let counter = 0;

    [].forEach.call(imgs, (img) => {
      img.addEventListener('load', incrementCounter, false);
    });

    function disableLoading() {
      console.log('All images downloaded! Disable Loading!');
      imgFirstPhase = true;
    }

    function incrementCounter() {
      counter++;
      if (counter === len) {
        resolve(disableLoading());
      } else {
        const reason = new Error('Не все загрузилось');
        reject(reason);
      }
    }
  });

  const firstPhaseImages = () => {
    firstPhaseImagesLoaded
      .then((fulfilled) => {
        console.log(fulfilled);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  firstPhaseImages();
}

//
// ------------ Проверка на какой стадии игра/Сохранения ---------------//
window.onload = () => {
  console.log('page loaded');
  const GameStages = localStorage.getItem('GameStage').toString();
  if (GameStages === 'after-title') {
    gameStages.HeavenGameStart();
  } else if (GameStages === 'apartment-text-phase') {
    gameStages.HeavenGameStart();
    setTimeout(controls.toggleButtonTV(), 2000);
    setTimeout(gameStages.textPhaseStart(), 4000);
  } else if (GameStages === null) {
    console.log(`Сохранёнка ${GameStages} Ну тут чот делать нужно`);
  }
};

function toggleInterfaceVisibility() {
  const containerInventory = document.getElementsByClassName('container-invenotory')[0];
  containerInventory.classList.toggle('hidden');
  const questText = document.getElementsByClassName('quest-text')[0];
  questText.classList.toggle('hidden');
}

function toggleQuestVisibility() {
  const questText = document.getElementsByClassName('quest-text')[0];
  questText.classList.toggle('hidden');
}

function hideEnterForm() {
  const nameEnterForm = document.getElementsByClassName('nameEnterForm')[0];
  nameEnterForm.classList.toggle('hidden');
}
// ------------- ---------------//
// работа кнопки включения экранов - включение первой фазы
const controls = {
  toggleButtonTV() {
    const startText = document.getElementsByClassName('startText')[0];
    startText.classList.toggle('hidden');
    const loadingBar = document.getElementsByClassName('wrapper-loader')[0];
    loadingBar.classList.toggle('hidden');

    function ZeroPhaseSuccess(callback) {
      imageLoadingHandlers.imgfirstPhase();
      setTimeout(() => {
        if (imgFirstPhase === true) {
          callback();
        } else {
          console.log('working... Загрузки то нету, еба');
        }
      }, 2000);
    }

    function callbackLoading() {
      const tvButton = document.getElementsByClassName('tv-button')[0];
      tvButton.classList.toggle('tv-button-off');
      const mainMonitorKeyFrames = document.getElementById('monitor');
      const inventoryMonitorKeyFrames = document.getElementById(
        'monitor-inventory',
      );
      const textMonitorKeyFrames = document.getElementById('monitor-text');
      mainMonitorKeyFrames.style.animation = 'tvflicker-gray-stable .7s infinite alternate';
      inventoryMonitorKeyFrames.style.animation = 'tvflicker-gray-stable .7s infinite alternate';
      textMonitorKeyFrames.style.animation = 'tvflicker-gray-stable .7s infinite alternate';
      loadingBar.classList.toggle('hidden');
      const titleScreen = document.getElementsByClassName('titleScreen')[0];
      titleScreen.classList.toggle('hidden');

      // Флаги
      heavengamestartFlag = true;
      //
      function ClearIntervalArrow() {
        clearInterval(arrowAnimation);
      }
    }

    ZeroPhaseSuccess(callbackLoading);
  },
};

// Анимация рукописного текста


// $(".fancy_title p").lettering();
// Это тупо, очень тупо. Резка монолога на отдельные буквы.
const arr = ['Не лучшее пробуждение в моей жизни. Постельное бельё впитало в себя пот и ночные страхи. Однако забот от этого не становилось меньше. Давай. Соберись..',
  'Ты же был когда-то уважаемым человеком.. дедективом.. И посмотри на себя сейчас..', 'Так дело не пойдёт.. Алкоголь, с другой стороны, мой самый молчаливый спутник, ещё никогда не отворачивался от меня.. Один глоток - и я найду ещё одну причину.. что бы жить дальше.', 'Так то будет получше.. с кровати всё же придется встать, хотя бы ради похода в туалет.. с другой стороны есть несколько писем, доставенных вчера. . .'];
const interval = 1000;
async function PrintCanvas(words, callback) {
  function timer(v) {
    return new Promise((r) => setTimeout(r, v));
  }

  const abc = words.split('');
  console.log(abc);
  // eslint-disable-next-line
  let line = '';
  // eslint-disable-next-line
  var time = 5000;
  // eslint-disable-next-line
  let lines = Math.ceil(abc.length / 44);
  for (let i = 0; i < lines; i++) {
    if (abc.length > 44) {
      for (let j = 0; j < 44; j++) {
        line += abc[0];
        // eslint-disable-next-line
        var shifted = abc.shift();
        if (shifted == '.' && abc[0] == '.') {
          abc.shift();
          lines += 1;
          time -= 2000;
          break;
        }
        if (j == 43 && abc[0] == '.') {
          line += abc[0];
          abc.shift();
        }

        if (j == 43 && abc.length > 0) {
          if (abc[0] !== '.' && abc[0] !== ' ') {
            line += '-';
          }
        }
        if (abc.length == 0) {
          break;
        }
        // if (j == 43 && !abc[0] == ' ' || j == 43 && !abc[0] == '.') {
        //   line += '1';
        // } else if (j == 43 && abc[1] == ' ' || j == 43 && abc[1] == '.') {
        //   line += '';
        // }
      }
    } else {
      for (let j = 0; j < 44; j++) {
        line += abc[0];
        const shiftedElse = abc.shift();
        if (abc.length == 0) {
          break;
        }
        if (shiftedElse == '.' && abc[0] == '.') {
          abc.shift();
          time -= 2000;
          break;
        }
        if (j == 43 && abc[0] == '.') {
          line += abc[0];
          abc.shift();
        }

        if (j == 43 && abc.length > 0) {
          if (abc[0] !== '.' && abc[0] !== ' ') {
            line += '-';
          }
        }
      }
    }
    if (line == 'undefined') {
      return;
    }
    DrawingText(line, i);
    line = '';
    await timer(time);
  }
  console.log('Кальбэк пащооол');
  callback();
}
// eslint-disable-next-line

function showButtonNextMonologe() {
  const next = document.getElementsByClassName('next-monologe')[0];
  next.classList.toggle('hidden');
}

function clearCanvas() {
  // eslint-disable-next-line
  for (var i = 0; i < 6; i++) {
    const canvases = document.getElementsByClassName('canvas')[i];
    // eslint-disable-next-line
    var ctx = canvases.getContext('2d');
    ctx.clearRect(0, 0, canvases.width, canvases.height);
    ctx.beginPath();
    console.log('canvas clear');
  }
}

function DrawingText(text, canvas) {
// get 2D context
  const ctx = document.getElementsByClassName('canvas')[canvas].getContext('2d');

  // dash-length for off-range
  const dashLen = 220;

  // we'll update this, initialize
  let dashOffset = dashLen;

  // some arbitrary speed
  const speed = 45;

  // the text we will draw
  const txt = text;

  // start position for x and iterator
  let x = 30; let i = 0;

  // Comic Sans?? Let's make it useful for something ;) w/ fallbacks
  ctx.font = '40px Amatic SC';

  // thickness of the line
  ctx.lineWidth = 0.5;

  // to avoid spikes we can join each line with a round joint
  // ctx.lineJoin = "round";

  // increase realism letting background (f.ex. paper) show through
  ctx.globalAlpha = 2 / 3;

  // some color, lets use a black pencil
  ctx.strokeStyle = ctx.fillStyle = 'white';


  (function loop() {
    // clear canvas for each frame
    ctx.clearRect(x, 0, 60, 150);

    // calculate and set current line-dash for this char
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);

    // reduce length of off-dash
    dashOffset -= speed;

    // draw char to canvas with current dash-length
    ctx.strokeText(txt[i], x, 90);

    // char done? no, the loop
    if (dashOffset > 0) requestAnimationFrame(loop);
    else {
      // ok, outline done, lets fill its interior before next
      ctx.fillText(txt[i], x, 90);

      // reset line-dash length
      dashOffset = dashLen;

      // get x position to next char by measuring what we have drawn
      // notice we offset it a little by random to increase realism
      x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();

      // lets use an absolute transform to randomize y-position a little
      ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());

      // and just cause we can, rotate it a little too to make it even
      // more realistic
      ctx.rotate(Math.random() * 0.005);

      // if we still have chars left, loop animation again for this char
      if (i < txt.length) requestAnimationFrame(loop);
    }
  }());
}
// Взаимодействие с предметами инвентаря (крафт, условия)
const choice = document.getElementsByClassName('choices');
function craft() {
  const abc = document.querySelectorAll('.droping');
  const elem1 = abc[0].children;
  const elem2 = abc[1].children;
  const itemsArray = [];
  try {
    if (elem1[0].classList[1] == 'rayners_seal' && elem2[0].classList[1] == 'philosophers_wisdom') {
      alert('true');
    }
  } catch (e) {
    alert('Крафт невозможен');
  }
}


// Драг н дроп и создание предметов
class Item {
  constructor(name, description, item) {
    this.name = name;
    this.item = item;
    this.description = description;
  }

  createItem() {
    const item = document.createElement('div');
    item.setAttribute('id', `box${getRandomInt(1, 150)}`);
    item.classList.add('box');
    item.classList.add(this.name);
    item.setAttribute('draggable', 'true');
    item.setAttribute('tooltip', this.description);
    item.setAttribute('flow', 'down');
    console.log(item);
    this.item = item;
  }

  insertItem() {
    const dropping = document.getElementsByClassName('droping');
    dropping[0].appendChild(this.item);
  }
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
}

// Function handleDragStart(), Its purpose is to store the id of the draggable element.
function handleDragStart(e) {
  e.dataTransfer.setData('text', this.id); // note: using 'this' is the same as using: e.target.
} // end function

// The dragenter event fires when dragging an object over the target.
// The css class 'drag-enter' is append to the targets object.
function handleDragEnterLeave(e) {
  // if(e.type == 'dragenter' && this.className == '') {
  // 	this.className =  'droping'
  // } else {
  // 	this.className = ' ' //Note: 'this' referces to the target element where the 'dragenter' event is firing from.
  // }
} // end function

// Function handles dragover event eg.. moving your source div over the target div element.
// If drop event occurs, the function retrieves the draggable element’s id from the DataTransfer object.
function handleOverDrop(e) {
  e.preventDefault();
  // Depending on the browser in use, not using the preventDefault() could cause any number of strange default behaviours to occur.
  if (e.type != 'drop') {
    return; // Means function will exit if no 'drop' event is fired.
  }
  // Stores dragged elements ID in var draggedId

  const draggedId = e.dataTransfer.getData('text');
  // if (draggedId == '') {
  //   draggedId = e.dataTransfer.setData('text', e.target.id = boxnum)
  //   // var parent = document.getElementById('drop1')
  //   // draggedId = parent.firstElementChild.id
  //   draggedId = e.dataTransfer.getData('text')
  // }
  // Stores referrence to element being dragged in var draggedEl
  const draggedEl = document.getElementById(draggedId);

  // if the event 'drop' is fired on the dragged elements original drop target e.i..  it's current parentNode,
  // then set it's css class to ='' which will remove dotted lines around the drop target and exit the function.
  if (draggedEl.parentNode == this) {
    draggedEl.parentNode.className = ' ';
    // this.className = '';
    return; // note: when a return is reached a function exits.
  }
  // Otherwise if the event 'drop' is fired from a different target element, detach the dragged element node from it's
  // current drop target (i.e current perantNode) and append it to the new target element. Also remove dotted css class.
  // var abc2222 = document.getElementsByClassName('droping')
  // function checkInventory() {
  if (this.childElementCount == 0 && this.className == 'droping') {
    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl); // Note: 'this' references to the current target div that is firing the 'drop' event.
  } else if (this.childElementCount <= 4 && this.className == 'dropInv') {
    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl);
  }
  // }
  // checkInventory()
} // end Function

// Retrieve two groups of elements, those that are draggable and those that are drop targets:
setInterval(
  () => {
    console.log('refresh');
    const draggable = document.querySelectorAll('[draggable]');
    const targets = document.querySelectorAll('[data-drop-target]');
    // Note: using the document.querySelectorAll() will aquire every element that is using the attribute defind in the (..)

    // Register event listeners for the'dragstart' event on the draggable elements:
    for (var i = 0; i < draggable.length; i++) {
      draggable[i].addEventListener('dragstart', handleDragStart);
    }

    // Register event listeners for 'dragover', 'drop', 'dragenter' & 'dragleave' events on the drop target elements.
    for (var i = 0; i < targets.length; i++) {
      targets[i].addEventListener('dragover', handleOverDrop);
      targets[i].addEventListener('drop', handleOverDrop);
      targets[i].addEventListener('dragenter', handleDragEnterLeave);
      targets[i].addEventListener('dragleave', handleDragEnterLeave);
    }
  }, 2000,
);
// Создание предмета
const itemImage = {
  firstTrainingAlco() {
    const wine = new Item('wine', 'Бутылка вина', '');
    wine.createItem();
    wine.insertItem();
  },
  letter() {
    const letter = new Item('letter', 'Странное письмо', '');
    letter.createItem();
    letter.insertItem();
  },
};
// текст описание в главном квестовом окне
// const discriptionText = ['Прикроватная тумбочка пуста, за исключением стоящей на ней бутылки. Стакан отсуствует.'];
const texts = {
  printText(discriptionText) {
    function timer(v) {
      return new Promise(((r) => setTimeout(r, v)));
    }

    async function load() {
      const myString = discriptionText;
      const myArray = myString.split('');
      let loopTimer;
      for (let i = 0; i < myArray.length; i++) {
        function frameLooper() {
          if (myArray.length > 0) {
            document.getElementById('myTypingText').innerHTML += myArray.shift();
            i--;
          } else {
            clearTimeout(loopTimer);
            return false;
          }
          loopTimer = setTimeout('frameLooper()', 70);
        }
        frameLooper();
        await timer(70);
      }
    }
    load();
  },
  clearText() {
    const abc = document.getElementById('myTypingText');
    abc.innerHTML = '';
  },

};

/* Перестройка контейнера под прокрутку похождений по городу */
