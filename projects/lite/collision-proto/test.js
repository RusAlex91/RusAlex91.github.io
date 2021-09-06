var listnerss = {
  fireplaceEvent: function(a, b) {
    let Man = document.getElementsByClassName("animation")[0];
    var here = Man.style.top
    here = parseInt(here, 10);
    var top = a - here;
    top = top + here
    Man.src = "img/Animation_up.gif"
    if (Man.style.top === top + "px") {
      Man.src = "img/Animation_stand.png"
      return;
    } else {
      Man.style.top = top + "px";
      setTimeout(function() {
        Man.src = "img/Animation_stand.png"
        document.querySelector(".main-text").textContent = "Похоже на печку. Да, это определенно печка, или камин, хотя кто их знает, может сейчас это называется как-то по-другому... неделя прибывания на природе отбирает последние остатки человечности..."
        var emo = document.querySelector(".emotion")
        emo.style.opacity = "1";
      }, 3000)
    }
    //увеличь своего пасана на 33% гдет он мелкий пиздец
    // текст с анимацией должен появлятеся а не сразу, у

  },
  moveEvent: function() {
    var element = document.querySelector('.test');
    var ele = getComputedStyle(element);
    var xx = ele.top;
    var yy = ele.left;
    var eheight = ele.height;
    var ewidth = ele.width;
    ewidth = parseInt(ewidth, 10);
    eheight = parseInt(eheight, 10);
    xx = parseInt(xx, 10);
    yy = parseInt(yy, 10)

    function timer(v) {
      return new Promise(function(r) {
        return setTimeout(r, v);
      });
    }

    async function load() {
      var j = yy
      var i = xx
      if (yy < 200) {
        for (i; i < 600; i++) {
          if (i < 332) {
            element.style.top = [i] + "px";

          } else if (j >= 400) {
            element.style.top = [i] + "px";
          } else if (j <= 400) {
            element.style.left = [j] + "px";
            i--
          } else {
            i--
          }
          j++
          await timer(15);
          if (i == i) {
            for (j; j < 300; j++) {
              element.style.left = [j] + "px";
              break
            }

          }
          if (i >= 535) {
            j = 400
            for (i; i < 600; i++) {
              element.style.top = [i] + "px";
              j--
              j--
              await timer(15);
              if (i == i) {
                for (j; j > 300; j--) {
                  element.style.left = [j] + "px";
                  break
                }

              }
              // for (j; j > 300; j--) {
              //   element.style.left = [j] + "px";
              //   await timer(15);
              //   if (j > 300){
              //
              //   }
              // }}

            }
          }
        }
      } else {
        for (i; i < 600; i++) {
          if (i < 332) {
            element.style.top = [i] + "px";
          } else if (i > 332 && j <= 142 ) {
            element.style.top = [i] + "px";;
          }
          j--
          await timer(15);
          if (i == i) {
            if (j >= 195 && i > 332) {
              for (j; j > 250; j++) {
                element.style.left = [j] + "px";
break
              }
            }
            // for (j; j < 250; j--) {
            //   element.style.left = [j] + "px";
            //   break
            // }



          }
          // if (i >= 535) {
          //   j = 400
          //   for (i; i < 600; i++) {
          //       element.style.top = [i] + "px";
          //     j--
          //     j--
          //     await timer(15);
          //     if (i == i) {
          //       for (j; j > 300; j--) {
          //         element.style.left = [j] + "px";
          //         break
          //       }
          //
          //     }
          // for (j; j > 300; j--) {
          //   element.style.left = [j] + "px";
          //   await timer(15);
          //   if (j > 300){
          //
          //   }
          // }}
          // }}
        }
      }
    }

    load();
  },
  showClass: function(el) {
    alert(el.className)
  },
  testEvent: function(a, b, c) {
    var vall = c.className
    var abc = document.querySelector(".test");
    // abc.src = "img/fireplace-highlight.png";
    // top = top - b;
    var tran = document.getElementsByClassName("animation")[0];
    let Man = document.getElementsByClassName("animation")[0];
    var ManWidth = Man.width / 2;
    var ManHight = Man.height / 2;
    var x = Man.style.top
    var y = Man.style.left
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    var top = a - x;
    top = top + x
    top = top - ManHight;
    var left = b - y;
    left = left + y
    left = left - ManWidth;
    var kkk = x - a
    var ggg = y - b
    var eee = ggg + kkk
    // 560 - 500
    // 560 - 350
    // 560 - 580
    // 560 - 210
    if (x <= a) { //вверх или вниз
      //560 > 500 test
      //560 > 350 test2
      //560 < 580 test3
      //560 > 210 test4
      if (eee >= 50 || eee <= -50 && eee < 200) { //210 < 100
        //как быстро пойдет
        tran.style.transition = "all 1s linear"
        Man.src = "img/Animation_down.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 1000)
      } else if (eee >= 150 && eee < 400) {
        tran.style.transition = "all 2s linear"
        Man.src = "img/Animation_down.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 2000)
      } else {

        tran.style.transition = "all 3s linear"
        Man.src = "img/Animation_down.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 3000)
      }

    } else {

      if (eee >= 50 || eee >= -50 && eee < 200) { //210 > 100
        tran.style.transition = "all 1s linear"
        Man.src = "img/Animation_up.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 1000)
      } else if (eee >= 150 && eee < 400) {
        tran.style.transition = "all 2s linear"
        Man.src = "img/Animation_up.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 2000)
      } else {
        tran.style.transition = "all 3s linear"
        Man.src = "img/Animation_up.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 3000)
      }
    }
  }
  // if (Man.style.top === top + "px") {
  //   Man.src = "img/Animation_stand_front.png"
  //   return;
  // } else {}

  // если идем наверх то сравнение больше меньше изначального числа если больше то анимация наверх ну ты понел
}
// houseEvent: function () {
//   var abcc = document.querySelector(".house");
//   abcc.addEventListener("click", function functionName(event) {
//     var elementClicked = event.target;
//     elementClicked.src = "img/fireplace.png";
//     if (!e) var e = window.event;
//   e.cancelBubble = true;
//   if (e.stopPropagation) e.stopPropagation();
//   })
// }


document.querySelector(".fireplace").addEventListener("mouseover", function(event) {
  var abc = document.querySelector(".fireplace");
  this.src = "img/fireplace-highlight.png";
}, false);
document.querySelector(".fireplace").addEventListener("mouseleave", function(event) {
  this.src = "img/fireplace.png";
}); //мб через цсс? ну ховер там и все дела? не?

var abcc = document.querySelector(".fireplace");
abcc.addEventListener("click", function functionName(event) {
  console.log(event)
})


// Crafty.init(671, 587, document.querySelector(".anim"));
//
// var dim1 = {x: 5, y: 5, w: 50, h: 50}
// var dim2 = {x: 20, y: 10, w: 60, h: 40}
//
// var rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");
//
// var rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway")
// .fourway(2)
// .attr(dim2)
// .img(src="img/Animation_stand.png");
//
// rect2.bind("EnterFrame", function () {
//     if (rect1.x < rect2.x + rect2.w &&
//         rect1.x + rect1.w > rect2.x &&
//         rect1.y < rect2.y + rect2.h &&
//         rect1.h + rect1.y > rect2.y) {
//         // collision detected!
//         this.color("green");
//     } else {
//         // no collision
//         this.color("blue");
//     }
// });
