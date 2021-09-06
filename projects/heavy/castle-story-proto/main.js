// setInterval(logs,4000)
// function logs() {
// console.log(chosenTemp)
// console.log(chosenTemp2)
// }

// Economics
let money = 100

function changeMoney () {
  const moneyElement = document.getElementsByClassName('moneyCount')[0]
  moneyElement.innerHTML = `${money}`
}

// Armies and etc
let armies = {
  ally_human1_footman_initial_hp: 0,
  ally_human1_footman_hp: 0,
  ally_human1_footman_dmg: 0,
  ally_human1_footman_soldiers: 0,
  ally_human2_footman_initial_hp: 0,
  ally_human2_footman_hp: 0,
  ally_human2_footman_dmg: 0,
  ally_human2_footman_soldiers: 0,
  ally_human3_knight_initial_hp: 0,
  ally_human3_knight_hp: 0,
  ally_human3_knight_dmg: 0,
  ally_human3_knight_soldiers: 0,
  enemy_vampire1_thrall_initial_hp: 0,
  enemy_vampire1_thrall_hp: 0,
  enemy_vampire1_thrall_dmg: 0,
  enemy_vampire1_thrall_soldiers: 0,
  enemy_vampire2_thrall_initial_hp: 0,
  enemy_vampire2_thrall_hp: 0,
  enemy_vampire2_thrall_dmg: 0,
  enemy_vampire2_thrall_soldiers: 0,
  enemy_vampire3_thrall_initial_hp: 0,
  enemy_vampire3_thrall_hp: 0,
  enemy_vampire3_thrall_dmg: 0,
  enemy_vampire3_thrall_soldiers: 0,
  enemy_vampire4_thrall_initial_hp: 0,
  enemy_vampire4_thrall_hp: 0,
  enemy_vampire4_thrall_dmg: 0,
  enemy_vampire4_thrall_soldiers: 0
}

let sourseSoldiers = {
  human_footman_hp: 10,
  human_footman_dmg: 1,
  human_knight_hp: 25,
  human_knight_dmg: 2,
  vampire_thrall_hp: 25,
  vampire_thrall_dmg: 2
}

let armyHpInitNames = []
let armySoldiersNames = []

let chosenTemp = {
  ally_army: 'dummy',
  enemy_army: 'dummy',
  ally_army_name: 'dummy',
  enemy_army_name: 'dummy',
  enemyName: 'dummy',
  battle: false
}

let chosenTemp2 = {
  ally_army: 'dummy',
  enemy_army: 'dummy',
  ally_army_name: 'dummy',
  enemy_army_name: 'dummy',
  enemyName: 'dummy',
  battle: false
}

async function startBattle (
  armyName_ally,
  armyName_enemy,
  armyName_neutral,
  ally_type,
  enemy_type,
  neutral_type,
  ongoingBattle
) {
  if (battleSites[ongoingBattle].start === false) {
    if (ongoingBattle) {
      battleSites[ongoingBattle].start = true
    }
  } else {
    return
  }
  if (armyName_neutral !== undefined) {
    return
  } else if (armies[allyArmyHP] <= 0 || armies[enemyArmyHP] <= 0) {
    // console.log("no battle");
  }
  let allyArmyInitialHP = `ally_${armyName_ally}_${ally_type}_initial_hp`
  let enemyArmyInitialHP = `enemy_${armyName_enemy}_${enemy_type}_initial_hp`
  var allyArmyHP = `ally_${armyName_ally}_${ally_type}_hp`
  var enemyArmyHP = `enemy_${armyName_enemy}_${enemy_type}_hp`
  let allyArmyDMG = `ally_${armyName_ally}_${ally_type}_dmg`
  let enemyArmyDMG = `enemy_${armyName_enemy}_${enemy_type}_dmg`
  let allySoldiers = `ally_${armyName_ally}_${ally_type}_soldiers`
  let enemySoldiers = `enemy_${armyName_enemy}_${enemy_type}_soldiers`

  let battle = `battle_ally_${armyName_ally}_${ally_type}` //!
  let tempBattle
  let tempBattle2
  console.log(
    'battle betweeen ' +
      armyName_ally +
      ' and ' +
      armyName_enemy +
      ' start HERE:____________________'
  )

  if (chosenTemp.ally_army == 'dummy' && chosenTemp.enemy_army == 'dummy') {
    chosenTemp.ally_army = document.getElementsByClassName(armyName_ally)[0]
    chosenTemp.enemy_army = document.getElementsByClassName(armyName_enemy)[0]
    chosenTemp.ally_army_name = allyArmyHP
    chosenTemp.enemy_army_name = enemyArmyHP
    chosenTemp.enemyName = armyName_enemy
    tempBattle = chosenTemp
    var ally = chosenTemp.ally_army
    var enemy = chosenTemp.enemy_army
  } else if (
    chosenTemp2.ally_army == 'dummy' &&
    chosenTemp2.enemy_army == 'dummy'
  ) {
    chosenTemp2.ally_army = document.getElementsByClassName(armyName_ally)[0]
    chosenTemp2.enemy_army = document.getElementsByClassName(armyName_enemy)[0]
    chosenTemp2.ally_army_name = allyArmyHP
    chosenTemp2.enemy_army_name = enemyArmyHP
    chosenTemp2.enemyName = armyName_enemy
    tempBattle2 = chosenTemp2
    var ally = chosenTemp2.ally_army
    var enemy = chosenTemp2.enemy_army
  }

  function timer (v) {
    return new Promise(function (r) {
      return setTimeout(r, v)
    })
  }
  loop1: for (
    let i = armies[allyArmyHP];
    i >= -3;
    i = i - armies[enemyArmyDMG]
  ) {
    if (armies[enemyArmyHP] <= 0) {
      armies[enemyArmyInitialHP] = 0
      console.log('Enemy is defeated')
      battleSites[ongoingBattle].ongoing = false
      try {
        tempBattle.battle = false
        tempBattle2.battle = false
      } catch (e) {
        // console.log(e);
      }
      armies[enemySoldiers] = 0
      break
    } else {
      try {
        tempBattle.battle = false
        tempBattle2.battle = false
      } catch (e) {
        // console.log(e);
      }
    }
    chosenTemp.ally_army = document.getElementsByClassName(armyName_ally)[0]
    chosenTemp.enemy_army = document.getElementsByClassName(armyName_enemy)[0]
    var ally = chosenTemp.ally_army
    var enemy = chosenTemp.enemy_army
    // i = i - armies[enemyArmyDMG];
    armies[allyArmyHP] = i
    checkHealthAlly(i, ally, allySoldiers, allyArmyInitialHP)

    console.log('Ally:' + armies[allyArmyHP])
    loop2: for (
      let j = armies[enemyArmyHP];
      j >= -3;
      j = j - armies[allyArmyDMG]
    ) {
      j = j - armies[allyArmyDMG]
      console.log('Enemy:' + armies[enemyArmyHP])
      // console.log("!!!!" + armies[enemyArmyInitialHP]);
      armies[enemyArmyHP] = j
      checkHealthEnemy(j, enemy, enemySoldiers, enemyArmyInitialHP)
      await timer(1000)
      break
    }
  }

  if (armies[allyArmyHP] <= 0) {
    console.log('Ally is defeated')
    battleSites[ongoingBattle].ongoing = false
    armies[allyArmyInitialHP] = 0
    try {
      tempBattle.battle = false
      tempBattle2.battle = false
    } catch (e) {
      console.log(e)
    }
    // if (ally.firstChild) {
    //   ally.removeChild(ally.childNodes[1]); /////STOOOP!!!1111 удалить весь див если хп меньше 0
    // console.log("delite");
    // }
  }
  chosenTemp.ally_army = 'dummy'
  chosenTemp.enemy_army = 'dummy'
  chosenTemp2.ally_army = 'dummy'
  chosenTemp2.enemy_army = 'dummy'
}

function checkHealthAlly (i, ally, allySoldiers, allyArmyInitialHP) {
  let health = (i / armies[allyArmyInitialHP]) * 100
  if (health >= 70 && health <= 80) {
    if (ally.firstElementChild) {
      if (armies[allySoldiers] == 8) {
        ally.removeChild(ally.firstElementChild)
        armies[allySoldiers] = armies[allySoldiers] - 1
      }
    }
  } else if (health >= 60 && health <= 70) {
    if (ally.firstElementChild) {
      if (armies[allySoldiers] == 7) {
        ally.removeChild(ally.firstElementChild)
        armies[allySoldiers] = armies[allySoldiers] - 1
      }
    }
  } else if (health >= 50 && health <= 60) {
    if (ally.firstElementChild) {
      if (armies[allySoldiers] == 6) {
        ally.removeChild(ally.firstElementChild)
        armies[allySoldiers] = armies[allySoldiers] - 1
      }
    }
  } else if (health >= 40 && health <= 50) {
    if (ally.firstElementChild) {
      if (armies[allySoldiers] == 5) {
        ally.removeChild(ally.firstElementChild)
        armies[allySoldiers] = armies[allySoldiers] - 1
      }
    }
  } else if (health >= 30 && health <= 40) {
    if (ally.firstElementChild) {
      if (armies[allySoldiers] == 4) {
        ally.removeChild(ally.firstElementChild)
        armies[allySoldiers] = armies[allySoldiers] - 1
      }
    }
  } else if (health >= 20 && health <= 30) {
    if (ally.firstElementChild) {
      if (armies[allySoldiers] == 3) {
        ally.removeChild(ally.firstElementChild)
        armies[allySoldiers] = armies[allySoldiers] - 1
      }
    }
  } else if (health >= 10 && health <= 20) {
    if (ally.firstElementChild) {
      if (armies[allySoldiers] == 2) {
        ally.removeChild(ally.firstElementChild)
        armies[allySoldiers] = armies[allySoldiers] - 1
      }
    }
  } else if (health >= -10 && health <= 0) {
    if (ally.firstElementChild) {
      if (armies[allySoldiers] == 1) {
        ally.removeChild(ally.firstElementChild)
        armies[allySoldiers] = armies[allySoldiers] - 1
      }
    }
  }
}

function checkHealthEnemy (j, enemy, enemySoldiers, enemyArmyInitialHP) {
  let health = (j / armies[enemyArmyInitialHP]) * 100
  if (health >= 70 && health <= 80) {
    if (enemy.firstElementChild) {
      if (armies[enemySoldiers] == 8) {
        enemy.removeChild(enemy.firstElementChild)
        armies[enemySoldiers] = armies[enemySoldiers] - 1
      }
    }
  } else if (health >= 60 && health <= 70) {
    if (enemy.firstElementChild) {
      if (armies[enemySoldiers] == 7) {
        enemy.removeChild(enemy.firstElementChild)
        armies[enemySoldiers] = armies[enemySoldiers] - 1
      }
    }
  } else if (health >= 50 && health <= 60) {
    if (enemy.firstElementChild) {
      if (armies[enemySoldiers] == 6) {
        enemy.removeChild(enemy.firstElementChild)
        armies[enemySoldiers] = armies[enemySoldiers] - 1
      }
    }
  } else if (health >= 40 && health <= 50) {
    if (enemy.firstElementChild) {
      if (armies[enemySoldiers] == 5) {
        enemy.removeChild(enemy.firstElementChild)
        armies[enemySoldiers] = armies[enemySoldiers] - 1
      }
    }
  } else if (health >= 30 && health <= 40) {
    if (enemy.firstElementChild) {
      if (armies[enemySoldiers] == 4) {
        enemy.removeChild(enemy.firstElementChild)
        armies[enemySoldiers] = armies[enemySoldiers] - 1
      }
    }
  } else if (health >= 20 && health <= 30) {
    if (enemy.firstElementChild) {
      if (armies[enemySoldiers] == 3) {
        enemy.removeChild(enemy.firstElementChild)
        armies[enemySoldiers] = armies[enemySoldiers] - 1
      }
    }
  } else if (health >= 10 && health <= 20) {
    if (enemy.firstElementChild) {
      if (armies[enemySoldiers] == 2) {
        enemy.removeChild(enemy.firstElementChild)
        armies[enemySoldiers] = armies[enemySoldiers] - 1
      }
    }
  } else if (health >= -10 && health <= 0) {
    if (enemy.firstElementChild) {
      if (armies[enemySoldiers] == 1) {
        enemy.removeChild(enemy.firstElementChild)
        armies[enemySoldiers] = armies[enemySoldiers] - 1
      }
    }
  }
}

// var army2 = document.getElementsByClassName("army-enemy")[0];

setInterval(checkBattle, 38)

function checkBattle () {
  // можно в отдельную ф запихнуть
  for (const key in battleSites) {
    const enemyHPname = `enemy_${battleSites[key].enemy}_hp`
    const allyHPname = `ally_${battleSites[key].ally}_hp`
    const allyHP = armies[allyHPname]
    const enemyHP = armies[enemyHPname]
    if (allyHP <= 0) {
      var elem = document.getElementsByClassName(battleSites[key].ally)[0]
      if (elem === undefined) {
        return
      }
      elem.parentNode.removeChild(elem)
    } else if (enemyHP <= 0) {
      const name = battleSites[key].enemy
      const nameElement = name.split('_')
      var elem = document.getElementsByClassName(nameElement[0])[0]
      if (elem === undefined) {
        continue
      }
      elem.parentNode.removeChild(elem)
    }
  }
  if (
    chosenTemp.ally_army != 'dummy' &&
    chosenTemp.enemy_army != 'dummy' &&
    chosenTemp.battle == false
  ) {
    if (
      armies[chosenTemp.enemy_army_name] >= 0 &&
      armies[chosenTemp.ally_army_name] <= 0
    ) {
      armyMovements[chosenTemp.enemyName]()
      chosenTemp.ally_army = 'dummy'
      chosenTemp.enemy_army = 'dummy'
      chosenTemp.ally_army_name = 'dummy'
      chosenTemp.enemy_army_name = 'dummy'
      chosenTemp.enemyName = 'dummy'
      chosenTemp.battle = false
    } else if (armies[chosenTemp.ally_army_name] <= 0) {
      chosenTemp.ally_army = 'dummy'
      chosenTemp.enemy_army = 'dummy'
      chosenTemp.ally_army_name = 'dummy'
      chosenTemp.enemy_army_name = 'dummy'
      chosenTemp.enemyName = 'dummy'
      chosenTemp.battle = false
    } else if (armies[chosenTemp.enemy_army_name] <= 0) {
      chosenTemp.ally_army = 'dummy'
      chosenTemp.enemy_army = 'dummy'
      chosenTemp.ally_army_name = 'dummy'
      chosenTemp.enemy_army_name = 'dummy'
      chosenTemp.enemyName = 'dummy'
      chosenTemp.battle = false
    }
  } else if (
    chosenTemp2.ally_army != 'dummy' &&
    chosenTemp2.enemy_army != 'dummy' &&
    chosenTemp2.battle == false
  ) {
    if (
      armies[chosenTemp2.enemy_army_name] >= 0 &&
      armies[chosenTemp2.ally_army_name] <= 0
    ) {
      armyMovements[chosenTemp2.enemyName]()
      chosenTemp2.ally_army = 'dummy'
      chosenTemp2.enemy_army = 'dummy'
      chosenTemp2.ally_army_name = 'dummy'
      chosenTemp2.enemy_army_name = 'dummy'
      chosenTemp2.enemyName = 'dummy'
      chosenTemp2.battle = false
    } else if (armies[chosenTemp2.ally_army_name] <= 0) {
      chosenTemp2.ally_army = 'dummy'
      chosenTemp2.enemy_army = 'dummy'
      chosenTemp2.ally_army_name = 'dummy'
      chosenTemp2.enemy_army_name = 'dummy'
      chosenTemp2.enemyName = 'dummy'
      chosenTemp2.battle = false
    } else if (armies[chosenTemp2.enemy_army_name] <= 0) {
      chosenTemp2.ally_army = 'dummy'
      chosenTemp2.enemy_army = 'dummy'
      chosenTemp2.ally_army_name = 'dummy'
      chosenTemp2.enemy_army_name = 'dummy'
      chosenTemp2.enemyName = 'dummy'
      chosenTemp2.battle = false
    }
  }
}

function movementChanger () {}

setInterval(checkBattle2, 35)

function checkBattle2 () {
  for (const key in battleSites) {
    if (battleSites[key].ongoing == true) {
      const ally = battleSites[key].ally
      const enemy = battleSites[key].enemy

      const battleAlly = document.getElementsByClassName(ally)[0]
      const battleEnemy = document.getElementsByClassName(enemy)[0]
      if (battleAlly === undefined || battleEnemy === undefined) {
        continue
      }
      const allyIdentity = `.${battleSites[key].allyName}`
      const soldierArmyAlly = battleAlly.closest(allyIdentity)
      const enemyIdentity = `.${battleSites[key].enemyName}`
      const soldierArmyEnemy = battleEnemy.closest(enemyIdentity)
      if (
        soldierArmyAlly.classList[0] == battleSites[key].allyName &&
        soldierArmyEnemy.classList[0] == battleSites[key].enemyName
      ) {
        const allySoldiers = soldierArmyAlly.children
        for (let i = 0; i < allySoldiers.length; i++) {
          allySoldiers[i].style.animation = ''
          allySoldiers[i].style.animation = `${ally}_attack 1s infinite`
        }
        const enemySoldiers = soldierArmyEnemy.children
        for (let j = 0; j < enemySoldiers.length; j++) {
          enemySoldiers[j].style.animation = ''
          enemySoldiers[j].style.animation = `${enemy}_attack 1s infinite`
        }
      }
    } else if (battleSites[key].ongoing == false) {
      const ally = battleSites[key].ally
      const enemy = battleSites[key].enemy

      const battleAlly = document.getElementsByClassName(ally)[0]
      const battleEnemy = document.getElementsByClassName(enemy)[0]
      if (battleAlly === undefined && battleEnemy === undefined) {
        return
      }
      if (battleAlly === undefined) {
        const enemyIdentity = `.${battleSites[key].enemyName}`
        const soldierArmyEnemy = battleEnemy.closest(enemyIdentity)
        if (soldierArmyEnemy.classList[0] == battleSites[key].enemyName) {
          const enemySoldiers = soldierArmyEnemy.children
          for (let j = 0; j < enemySoldiers.length; j++) {
            enemySoldiers[j].style.animation = ''
            enemySoldiers[j].style.animation = `${enemy}_move 1s infinite`
          }
        }
        var elem = document.getElementsByClassName(battleSites[key].allyName)[0]
        if (elem === undefined) {
          return
        }
        elem.parentNode.removeChild(elem)
        return
      } else if (battleEnemy === undefined) {
        const allyIdentity = `.${battleSites[key].allyName}`
        const soldierArmyAlly = battleAlly.closest(allyIdentity)
        if (soldierArmyAlly.classList[0] == battleSites[key].allyName) {
          const allySoldiers = soldierArmyAlly.children
          for (let i = 0; i < allySoldiers.length; i++) {
            allySoldiers[i].style.animation = ''
          }
        } /// Проблема

        var elem = document.getElementsByClassName(
          battleSites[key].enemyName
        )[0]
        if (elem === undefined) {
          continue
        }
        elem.parentNode.removeChild(elem)
        battleSites[key].enemy = 'dummy'
        battleSites[key].ally = 'dummy'
        battleSites[key].ongoing = 'dummy'
        battleSites[key].start = 'dummy'
        return
      }
    }
    continue
  }
}

function colision (
  armyLeft,
  armyRight,
  armyName_ally,
  armyName_enemy,
  ally_type,
  enemy_type,
  neutral_type,
  playerChoice,
  neutralArmy,
  armyName_neutral
) {
  // console.log(armyLeft instanceof Element);
  var computedStyleArmyRight
  if (armyLeft === undefined || armyRight === undefined) {
    if (neutralArmy === undefined) {
      return
    } else if (neutralArmy !== undefined) {
      computedStyleArmyRight = getComputedStyle(neutralArmy)
    }
  } else {
    computedStyleArmyRight = getComputedStyle(armyRight)
  }
  var computedStyleArmyLeft = getComputedStyle(armyLeft)

  //Get the height and position of the player
  var leftArmy_left = parseInt(computedStyleArmyLeft.left),
    leftArmy_width = parseInt(computedStyleArmyLeft.width),
    leftArmy_bottom = parseInt(computedStyleArmyLeft.bottom),
    leftArmy_height = parseInt(computedStyleArmyLeft.height),
    rightArmy_left = parseInt(computedStyleArmyRight.left),
    rightArmy_width = parseInt(computedStyleArmyRight.width),
    rightArmy_bottom = parseInt(computedStyleArmyRight.bottom),
    rightArmy_height = parseInt(computedStyleArmyRight.height),
    neutralArmy_left = parseInt(computedStyleArmyLeft.left),
    neutralArmy_width = parseInt(computedStyleArmyLeft.width),
    neutralArmy_bottom = parseInt(computedStyleArmyLeft.bottom),
    neutralArmy_height = parseInt(computedStyleArmyLeft.height)

  // rightArmy_left -= 5;
  //If the character's bottom is hitting the ground,
  //Stop moving
  if (playerChoice) {
    console.log(battleSites)
    //Вот тут остановился
    let inter = setInterval(() => {
      if (rightArmy_left < leftArmy_left) {
        if (leftArmy_left + leftArmy_width <= rightArmy_left) {
          leftArmy_left = rightArmy_left - leftArmy_width
        } else {
          leftArmy_left -= 5
        }
      } else {
        if (leftArmy_left + leftArmy_width >= rightArmy_left) {
          leftArmy_left = rightArmy_left - leftArmy_width
        } else {
          leftArmy_left += 5
        }
      }

      if (leftArmy_bottom < rightArmy_bottom) {
        leftArmy_bottom += 5
      } else if (leftArmy_bottom > rightArmy_bottom) {
        leftArmy_bottom -= 5
      }
      armyLeft.style.bottom = leftArmy_bottom + 'px'

      //Set the character's final position
      armyLeft.style.left = leftArmy_left + 'px'
      // armyRight.style.left = rightArmy_left + "px";
      var checkArmyLeft = rightArmy_left - leftArmy_width + 'px'
      var leftArmy_bottomPX = leftArmy_bottom + 'px'
      if (
        armyLeft.style.left === checkArmyLeft &&
        armyLeft.style.bottom === leftArmy_bottomPX
      ) {
        // footmanSpot = true;
        if (neutralArmy === undefined) {
          if (armyRight.classList.contains('enemy')) {
            var item = [...armyRight.classList]
            var choseEnemy = item[0]
            listOfEnemies[choseEnemy] = false
          }
        }

        chosen.enemy_army = 'dummy'
        chosen.enemy_army_type = 'dummy'
        chosen.ally_army = 'dummy'
        chosen.ally_army_type = 'dummy'

        var allyArmy = `${armyName_ally}_${ally_type}`
        var enemyArmy = `${armyName_enemy}_${enemy_type}`
        var writeCheck = false
        for (let key in battleSites) {
          if (
            battleSites[key].ally == allyArmy &&
            battleSites[key].enemy == enemyArmy
          ) {
            writeCheck = true
            continue
          }
          if (
            battleSites[key].ally == 'dummy' &&
            battleSites[key].enemy == 'dummy' &&
            writeCheck == false
          ) {
            battleSites[key].ally = allyArmy
            battleSites[key].enemy = enemyArmy
            battleSites[key].allyName = armyName_ally
            battleSites[key].enemyName = armyName_enemy
            battleSites[key].ongoing = true

            let armyName_neutral = neutralArmy
            writeCheck = true
            let ongoingBattle = key
            listOfEnemies[armyName_enemy] = false

            clearInterval(inter)
            startBattle(
              armyName_ally,
              armyName_enemy,
              armyName_neutral,
              ally_type,
              enemy_type,
              neutral_type,
              ongoingBattle
            )

            return
          }
        }
      }
    }, 33)
  } else if (!playerChoice) {
    if (
      leftArmy_left < rightArmy_left + rightArmy_width &&
      leftArmy_left + leftArmy_width > rightArmy_left &&
      leftArmy_bottom < rightArmy_bottom + rightArmy_height &&
      leftArmy_bottom + leftArmy_height > rightArmy_bottom
    ) {
      rightArmy_left = leftArmy_left + leftArmy_width
      armyRight.style.left = rightArmy_left + 'px'

      var allyArmy = `${armyName_ally}_${ally_type}`
      var enemyArmy = `${armyName_enemy}_${enemy_type}`
      var writeCheck = false
      for (let key in battleSites) {
        if (
          battleSites[key].ally == allyArmy &&
          battleSites[key].enemy == enemyArmy
        ) {
          writeCheck = true
          continue
        }
        if (
          battleSites[key].ally != allyArmy &&
          battleSites[key].enemy != enemyArmy &&
          writeCheck == false &&
          battleSites[key].ally === 'dummy' &&
          battleSites[key].enemy === 'dummy'
        ) {
          battleSites[key].ally = allyArmy
          battleSites[key].enemy = enemyArmy
          battleSites[key].allyName = armyName_ally
          battleSites[key].enemyName = armyName_enemy
          battleSites[key].ongoing = true
          writeCheck = true
          let ongoingBattle = key
          listOfEnemies[armyName_enemy] = false
          startBattle(
            armyName_ally,
            armyName_enemy,
            armyName_neutral,
            ally_type,
            enemy_type,
            neutral_type,
            ongoingBattle
          )
          break
        }
      }

      Object.keys(battleSites).forEach(function (key) {
        if (
          battleSites[key].ally == allyArmy &&
          battleSites[key].enemy == enemyArmy
        ) {
          // console.log("no battle!_____________")
        } else {
          writeCheck = false
        }
      })
    } else {
    }
  }
}

const battleSites = {
  battle1: {
    ally: 'dummy',
    enemy: 'dummy',
    start: false,
    ongoing: false,
    end: false
  },
  battle2: {
    ally: 'dummy',
    enemy: 'dummy',
    start: false,
    ongoing: false,
    end: false
  },
  battle3: {
    ally: 'dummy',
    enemy: 'dummy',
    start: false,
    ongoing: false,
    end: false
  },
  battle4: {
    ally: 'dummy',
    enemy: 'dummy',
    start: false,
    ongoing: false,
    end: false
  },
  battle5: {
    ally: 'dummy',
    enemy: 'dummy',
    start: false,
    ongoing: false,
    end: false
  }
}

var listOfEnemies = {
  vampire1: false,
  vampire2: false
}

class Army {
  constructor (name, type, allign) {
    this.name = name
    this.type = type
    this.allign = allign
  }

  create (name, type, allign) {
    const div = document.createElement('div')
    div.className = `${this.name} ${this.type} ${this.allign}`
    const parent = document.getElementsByClassName('border')[0]
    parent.append(div)
    const armyName_initial_hp = `${this.allign}_${this.name}_${this.type}_initial_hp`
    armyHpInitNames.push(armyName_initial_hp)
    const soldierCountName = `${this.allign}_${this.name}_${this.type}_soldiers`
    armySoldiersNames.push(soldierCountName) // Possible add extend class
  }

  addSoldier (name, type, allign) {
    const soldier = document.createElement('div')
    const soldierCountName = `${this.allign}_${this.name}_${this.type}_soldiers`
    const soldier_count = armies[soldierCountName]
    soldier.className = `${this.name}_${this.type}_${this.allign}${soldier_count} ${this.name}_${this.type}`
    const parent = document.getElementsByClassName(this.name)[0]
    parent.append(soldier)
    const trueName = this.name.substring(0, this.name.length - 1)
    const armyName_initial_hp = `${this.allign}_${this.name}_${this.type}_initial_hp`
    const armyName_hp = `${this.allign}_${this.name}_${this.type}_hp`
    const armyName_dmg = `${this.allign}_${this.name}_${this.type}_dmg`

    const soldierName_hp = `${trueName}_${this.type}_hp`
    const soldierName_dmg = `${trueName}_${this.type}_dmg`
    armies[armyName_initial_hp] =
      armies[armyName_initial_hp] + sourseSoldiers[soldierName_hp]
    armies[armyName_hp] = armies[armyName_hp] + sourseSoldiers[soldierName_hp]
    armies[armyName_dmg] =
      armies[armyName_dmg] + sourseSoldiers[soldierName_dmg]
    armies[soldierCountName] = armies[soldierCountName] + 1
  }
}

var armyMovements = {
  vampire1: function () {
    const vampire1 = document.getElementsByClassName('vampire1')[0]
    listOfEnemies.vampire1 = true
    this.movement_left(vampire1)
  },
  vampire2: function () {
    const vampire2 = document.getElementsByClassName('vampire2')[0]
    listOfEnemies.vampire2 = true
    this.movement_left(vampire2)
  },
  movement_left: async function (army, bool) {
    function timer (v) {
      return new Promise(function (r) {
        return setTimeout(r, v)
      })
    }
    const computedStyleArmyRight = getComputedStyle(army)
    let army_left = parseInt(computedStyleArmyRight.left)
    let item = [...army.classList]
    let choseEnemy = item[0]
    for (let i = 0; i < 450; i++) {
      if (!listOfEnemies[choseEnemy]) {
        break
      } else if (army_left == 800) {
        army.style.left = army_left + 'px'
        break
      } else {
        army_left = army_left - 1
        army.style.left = army_left + 'px'
        await timer(33)
      }
    }
  }
}
// хранение инфы о выборе армий мышкой
var chosen = {
  ally_army: 'dummy',
  ally_army_type: 'dummy',
  enemy_army: 'dummy',
  enemy_army_type: 'dummy',
  neutral_army: 'dummy',
  neutral_army_type: 'dummy'
}

setInterval(function () {
  if (chosen.ally_army != 'dummy' && chosen.neutral_army != 'dummy') {
    var armyLeft = document.getElementsByClassName(chosen.ally_army)[0]
    var neutralArmy = document.getElementsByClassName(chosen.neutral_army)[0]
    var armyName_ally = chosen.ally_army
    var armyName_neutral = chosen.neutral_army
    var ally_type = chosen.ally_army_type
    var neutral_type = chosen.neutral_army_type
    var playerChoice = true

    colision(
      armyLeft,
      armyRight,
      armyName_ally,
      armyName_enemy,
      ally_type,
      enemy_type,
      neutral_type,
      playerChoice,
      neutralArmy,
      armyName_neutral
    )
    chosen.enemy_army = 'dummy'
    chosen.enemy_army_type = 'dummy'
    chosen.ally_army = 'dummy'
    chosen.ally_army_type = 'dummy'
    chosen.neutral_army = 'dummy'
    chosen.neutral_army_type = 'dummy'
  } else if (chosen.enemy_army != 'dummy' && chosen.ally_army != 'dummy') {
    var armyLeft = document.getElementsByClassName(chosen.ally_army)[0]
    var armyRight = document.getElementsByClassName(chosen.enemy_army)[0]
    var neutralArmy = document.getElementsByClassName(chosen.neutral_army)[0]
    var armyName_ally = chosen.ally_army
    var armyName_enemy = chosen.enemy_army
    // var armyName_neutral = chosen.neutral_army;
    var ally_type = chosen.ally_army_type
    var enemy_type = chosen.enemy_army_type
    var neutral_type = chosen.neutral_army_type
    var playerChoice = true

    colision(
      armyLeft,
      armyRight,
      armyName_ally,
      armyName_enemy,
      ally_type,
      enemy_type,
      neutral_type,
      playerChoice,
      neutralArmy,
      armyName_neutral
    )
    chosen.enemy_army = 'dummy'
    chosen.enemy_army_type = 'dummy'
    chosen.ally_army = 'dummy'
    chosen.ally_army_type = 'dummy'
    chosen.neutral_army = 'dummy'
    chosen.neutral_army_type = 'dummy'
  }
}, 34)
// переделать что бы были только ally and enemy
document.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('enemy')) {
    chosen.enemy_army = e.target.classList[0]
    chosen.enemy_army_type = e.target.classList[1]
  } else if (e.target && e.target.classList.contains('ally')) {
    chosen.ally_army = e.target.classList[0]
    chosen.ally_army_type = e.target.classList[1]
  } else if (e.target && e.target.classList.contains('neutral')) {
    chosen.neutral_army = e.target.classList[0]
    chosen.neutral_army_type = e.target.classList[1]
  }
})

let chosenAll = {
  ally_army: 'dummy',
  ally_army_type: 'dummy',
  enemy_army: 'dummy',
  enemy_army_type: 'dummy'
}

setInterval(function checkEveryArmyCollision () {
  const ally = document.getElementsByClassName('ally')
  const enemy = document.getElementsByClassName('enemy')
  const len = 0
  const tempLen = 0
  const moreAlly = false
  const moreEnemy = false
  let singleAlly = false
  let singleEnemy = false

  for (let i = 0; i <= ally.length - 1; i++) {
    for (let k = 0; k <= enemy.length - 1; k++) {
      let enemyName = enemy[k].classList[0]
      chosenAll.enemy_army = enemyName
      let enemyType = enemy[k].classList[1]
      chosenAll.enemy_army_type = enemyType

      let allyName = ally[i].classList[0]
      chosenAll.ally_army = allyName
      let allyType = ally[i].classList[1]
      chosenAll.ally_army_type = allyType

      if (chosenAll.enemy_army != 'dummy' && chosenAll.ally_army != 'dummy') {
        // console.log("gocha " + chosenAll.ally_army + " " + chosenAll.enemy_army);
        if (singleAlly) {
          var armyLeft = document.getElementsByClassName('ally')[0]
        } else {
          var armyLeft = document.getElementsByClassName('ally')[i]
        }
        let armyRight = document.getElementsByClassName('enemy')[k]
        let armyName_ally = chosenAll.ally_army
        let armyName_enemy = chosenAll.enemy_army
        var neutralArmy = undefined
        let neutral_type = undefined
        let ally_type = chosenAll.ally_army_type
        let enemy_type = chosenAll.enemy_army_type
        let playerChoice = false
        let armyName_neutral = undefined
        var neutralArmy = undefined
        // console.log("Colision between " + armyName_ally + " and " + armyName_enemy);
        colision(
          armyLeft,
          armyRight,
          armyName_ally,
          armyName_enemy,
          ally_type,
          enemy_type,
          neutral_type,
          playerChoice,
          neutralArmy,
          armyName_neutral
        )
      }
    }
  }
}, 33)
// Тестовое объявление армий
let vampires1 = new Army('vampire1', 'thrall', 'enemy')

vampires1.create()
vampires1.addSoldier()
vampires1.addSoldier()
vampires1.addSoldier()
vampires1.addSoldier()

// armyMovements.vampire1();

let vampires2 = new Army('vampire2', 'thrall', 'enemy')
vampires2.create()
vampires2.addSoldier()
vampires2.addSoldier()
vampires2.addSoldier()

armyMovements.vampire2()

// var vampires3 = new Army("vampire3", "thrall", "enemy");
// vampires3.create();
// vampires3.addSoldier();
// vampires3.addSoldier();
// vampires3.addSoldier();

// var vampires4 = new Army("vampire4", "thrall", "enemy");
// vampires4.create();
// vampires4.addSoldier();
// vampires4.addSoldier();
// vampires4.addSoldier();

let human1 = new Army('human1', 'footman', 'ally')

human1.create()
human1.addSoldier()
human1.addSoldier()
human1.addSoldier()
human1.addSoldier()
human1.addSoldier()
human1.addSoldier()
human1.addSoldier()
human1.addSoldier()

let human2 = new Army('human2', 'footman', 'ally')

human2.create()
human2.addSoldier()
human2.addSoldier()
human2.addSoldier()
human2.addSoldier()
human2.addSoldier()
human2.addSoldier()
human2.addSoldier()
human2.addSoldier()

let human3 = new Army('human3', 'knight', 'ally')

human3.create()
human3.addSoldier()
human3.addSoldier()
human3.addSoldier()
human3.addSoldier()
human3.addSoldier()
human3.addSoldier()
// ______________________________ Building Handlers_________//
function addFarm () {
  const element = document.getElementsByClassName('farm1')[0]
  const parent = element.closest('div')
  parent.classList.add('farms_build')
  parent.classList.add('farm_position-1')
  parent.classList.remove('empty-small')
}

function addFarm2 () {
  const element = document.getElementsByClassName('farm2')[0]
  const parent = element.closest('div')
  parent.classList.add('farms_build2')
  parent.classList.add('farm_position-2')
  parent.classList.remove('empty-small')
}

function addFarm3 () {
  const element = document.getElementsByClassName('farm3')[0]
  const parent = element.closest('div')
  parent.classList.add('farms_build3')
  parent.classList.add('farm_position-3')
  parent.classList.remove('empty-small')
}

function addBaraks1 () {
  const element = document.getElementsByClassName('barracks1')[0]
  const parent = element.closest('div')
  parent.classList.add('barracks1_build')
  parent.classList.add('barracks_position1')
  parent.classList.remove('empty-medium')
}

function addBaraks2 () {
  const element = document.getElementsByClassName('barracks2')[0]
  const parent = element.closest('div')
  parent.classList.add('barracks2_build')
  parent.classList.add('barracks_position2')
  parent.classList.remove('empty-medium')
}
