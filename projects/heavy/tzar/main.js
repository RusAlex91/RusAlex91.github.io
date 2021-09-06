// начало документа
// setInterval(logs,4000)
// function logs() {
// console.log(chosenTemp)
// console.log(chosenTemp2)
// }

//Economics
// var gold = 100;

// function changeMoney() {
//     let goldElement = document.getElementsByClassName("goldCount")[0];
//     goldElement.innerHTML = `${gold}`;
// }

setInterval(function battleCleanUp() {

        for (let key in battleSites) {

            var armyName = battleSites[key].allyName;
            if (battleSites[key].ongoing == true) {
                console.log("battle");

                listCleanUp();
                if (battleSites[key].end == true) {
                    console.log("its ally");
                    battleSites[key].ally = "dummy";
                    battleSites[key].end = false;
                    battleSites[key].allyName = "dummy";
                    battleSites[key].enemy = "dummy";
                    battleSites[key].enemyName = "dummy";
                    battleSites[key].ongoing = undefined;
                    battleSites[key].start = false;
                }
            } else if (battleSites[key].ongoing == false) {

                console.log("battle ended");
                battleSites[key].ally = "dummy";
                battleSites[key].allyName = "dummy";
                battleSites[key].enemy = "dummy";
                battleSites[key].enemyName = "dummy";
                battleSites[key].ongoing = undefined;
                battleSites[key].start = false;
                listCleanUp(armyName);
            }
        }
    }, 2500)
    //тестовое
function fieldCleanUp() {
    var parent = document.getElementsByClassName("battlefield")[0]
    var childs = parent.children
    for (child in childs) {
        console.log(childs[child]);
        var army = childs[child].className
    }

    //"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
}
var unitLimit = 0;
var unitsNow = document.getElementsByClassName("ally").length;
var enemyUnitsNow = document.getElementsByClassName("enemy").length;

function createFakeUnit(unit, y, x, side) {
    var genName = `human${unitsNow}`
    var sheet = window.document.styleSheets[1];
    sheet.insertRule(`.human${unitsNow} {
    position: absolute;
    display: flex;
    top: ${y}px;
    left: ${x}px;
    flex-direction: column;
    flex-wrap: wrap;
    transition: border 0.3s linear;
   }
    `, sheet.cssRules.length);
    sheet.insertRule(`.human${unitsNow}:hover {border: 1px solid blue;}
        `, sheet.cssRules.length);

    unitsNow++
    var human = new FakeArmy(genName, unit);

    human.create("mainLands");
    human.addFakeSoldier(unit);


    // armyMovements.movement_left(humanArmy);

    console.log("created");
}

function createunit2() {


    var genName = `human${unitsNow}`
    var sheet = window.document.styleSheets[1];
    sheet.insertRule(`.human${unitsNow} {
    position: absolute;
    display: flex;
    top: 500px;
    left: 600px;
    flex-direction: column;
    flex-wrap: wrap;
    transition: border 0.3s linear;
    border: 1px solid blue;}
    `, sheet.cssRules.length);
    sheet.insertRule(`.human${unitsNow}:hover {border: 1px solid blue;;}
        `, sheet.cssRules.length);
    sheet.insertRule(`.human${unitsNow}_archer_ally0 {
        position: relative;
        height: 40px;
        width: 40px;
        background-image: url("archer.png");
        background-repeat: no-repeat;}
            `, sheet.cssRules.length);
    unitsNow++
    var human = new Army(genName, "archer", "ally");

    human.create();
    human.addSoldier();
    human.addAreaofControl("archer");
    let humanArmy = document.getElementsByClassName(genName)[0];
    armyMovements.movement_left(humanArmy);
    console.log("created");



}

var tabelOfenemies = {
    thrall: {
        type: "thrall",
        count: 3
    }
}

async function createunit3() {


    function timer(v) {
        return new Promise(function(r) {
            return setTimeout(r, v);
        });
    }
    for (let i = 0; i < tabelOfenemies.thrall.count; i++) {




        var genName = `vampire${i}`
        var sheet = window.document.styleSheets[1];
        sheet.insertRule(`.vampire${i} {
    position: absolute;
    display: flex;
    top: 200px;
    left: 200px;
    
    flex-direction: column;
    flex-wrap: wrap;
    transition: border 0.3s linear;
    border: 1px solid blue;}
    `, sheet.cssRules.length);
        sheet.insertRule(`.vampire${i}:hover {border: 1px solid blue;;}
        `, sheet.cssRules.length);
        sheet.insertRule(`.vampire${i}_${tabelOfenemies.thrall.type}_enemy0 {
            position: relative;
        height: 100px;
        width: 100px;
        border: 1px solid red;
        background-image: url("h.gif");
        }
            `, sheet.cssRules.length);

        var vampires = new Army(genName, tabelOfenemies.thrall.type, "enemy");
        vampires.create();
        vampires.addSoldier();


        let vampireArmy = document.getElementsByClassName(genName)[0];
        armyMovements.movement_right(vampireArmy);
        enemyUnitsNow++
        console.log("created");
        await timer(4000);
    }
    // armyMovements.human4();
}



// Armies and etc
var armies = {
    // ally_human1_footman_initial_hp: 0,
    // ally_human1_footman_hp: 0,
    // ally_human1_footman_dmg: 0,
    // ally_human1_footman_soldiers: 0,
    // ally_human2_footman_initial_hp: 0,
    // ally_human2_footman_hp: 0,
    // ally_human2_footman_dmg: 0,
    // ally_human2_footman_soldiers: 0,
    // ally_human3_knight_initial_hp: 0,
    // ally_human3_knight_hp: 0,
    // ally_human3_knight_dmg: 0,
    // ally_human3_knight_soldiers: 0,
    // ally_human4_footman_initial_hp: 0,
    // ally_human4_footman_hp: 0,
    // ally_human4_footman_dmg: 0,
    // ally_human4_footman_soldiers: 0,
    // ally_human5_archer_initial_hp: 0,
    // ally_human5_archer_hp: 0,
    // ally_human5_archer_dmg: 0,
    // ally_human5_archer_soldiers: 0,
    // enemy_vampire1_thrall_initial_hp: 0,
    // enemy_vampire1_thrall_hp: 0,
    // enemy_vampire1_thrall_dmg: 0,
    // enemy_vampire1_thrall_soldiers: 0,
    // enemy_vampire2_thrall_initial_hp: 0,
    // enemy_vampire2_thrall_hp: 0,
    // enemy_vampire2_thrall_dmg: 0,
    // enemy_vampire2_thrall_soldiers: 0,
    // enemy_vampire3_thrall_initial_hp: 0,
    // enemy_vampire3_thrall_hp: 0,
    // enemy_vampire3_thrall_dmg: 0,
    // enemy_vampire3_thrall_soldiers: 0,
    // enemy_vampire4_thrall_initial_hp: 0,
    // enemy_vampire4_thrall_hp: 0,
    // enemy_vampire4_thrall_dmg: 0,
    // enemy_vampire4_thrall_soldiers: 0,
};

var sourseSoldiers = {
    human_peasant_hp: 10,
    human_peasant_dmg: 1,
    human_footman_hp: 10,
    human_footman_dmg: 1,
    human_archer_hp: 5,
    human_archer_dmg: 2,
    human_knight_hp: 25,
    human_knight_dmg: 2,
    vampire_thrall_hp: 5,
    vampire_thrall_dmg: 2,
    vampire_tower_hp: 10,
    vampire_tower_dmg: 5
};

var armyHpInitNames = [];
var armySoldiersNames = [];

var chosenTemp = {
    ally_army: "dummy",
    enemy_army: "dummy",
    ally_army_name: "dummy",
    enemy_army_name: "dummy",
    enemyName: "dummy",
    battle: false,
};

var chosenTemp2 = {
    ally_army: "dummy",
    enemy_army: "dummy",
    ally_army_name: "dummy",
    enemy_army_name: "dummy",
    enemyName: "dummy",
    battle: false,
};

async function startBattle(
    armyName_ally,
    armyName_enemy,
    armyName_neutral,
    ally_type,
    enemy_type,
    neutral_type,
    ongoingBattle
) {

    var whosArmyAlly = armyName_ally.replace(/[0-9]/g, '');
    var whosArmyEnemy = armyName_enemy.replace(/[0-9]/g, '');
    let allyArmyName = `${armyName_ally} ${ally_type} ally`;
    let enemyArmyName = `${armyName_enemy} ${enemy_type} enemy`;

    if (whosArmyAlly == "human" && whosArmyEnemy == "human") {
        battleSites[ongoingBattle].end = true;
    } else {
        battleSites[ongoingBattle].start = true;
    }
    // if (battleSites[ongoingBattle].start === false) {
    //     if (ongoingBattle) {
    //         battleSites[ongoingBattle].start = true;
    //     }
    // } else {
    //     return;
    // }

    var allyArmyInitialHP = `ally_${armyName_ally}_${ally_type}_initial_hp`;
    var enemyArmyInitialHP = `enemy_${armyName_enemy}_${enemy_type}_initial_hp`;
    var allyArmyHP = `ally_${armyName_ally}_${ally_type}_hp`;
    var enemyArmyHP = `enemy_${armyName_enemy}_${enemy_type}_hp`;
    var allyArmyDMG = `ally_${armyName_ally}_${ally_type}_dmg`;
    var enemyArmyDMG = `enemy_${armyName_enemy}_${enemy_type}_dmg`;
    var allySoldiers = `ally_${armyName_ally}_${ally_type}_soldiers`;
    var enemySoldiers = `enemy_${armyName_enemy}_${enemy_type}_soldiers`;

    var battle = `battle_ally_${armyName_ally}_${ally_type}`; //!
    var tempBattle;
    var tempBattle2;
    if (armyName_neutral !== undefined) {
        return;
    } else if (armies[allyArmyName][allyArmyHP] <= 0 || armies[enemyArmyName][enemyArmyHP] <= 0) {
        console.log("no battle");
    }
    console.log(
        "battle betweeen " +
        armyName_ally +
        " and " +
        armyName_enemy +
        " start HERE:____________________"
    );

    if (chosenTemp.ally_army == "dummy" && chosenTemp.enemy_army == "dummy") {
        chosenTemp.ally_army = document.getElementsByClassName(armyName_ally)[0];
        chosenTemp.enemy_army = document.getElementsByClassName(armyName_enemy)[0];
        chosenTemp.ally_army_name = allyArmyHP;
        chosenTemp.enemy_army_name = enemyArmyHP;
        chosenTemp.enemyName = armyName_enemy;
        tempBattle = chosenTemp;
        var ally = chosenTemp.ally_army;
        var enemy = chosenTemp.enemy_army;
    } else if (
        chosenTemp2.ally_army == "dummy" &&
        chosenTemp2.enemy_army == "dummy"
    ) {
        chosenTemp2.ally_army = document.getElementsByClassName(armyName_ally)[0];
        chosenTemp2.enemy_army = document.getElementsByClassName(armyName_enemy)[0];
        chosenTemp2.ally_army_name = allyArmyHP;
        chosenTemp2.enemy_army_name = enemyArmyHP;
        chosenTemp2.enemyName = armyName_enemy;
        tempBattle2 = chosenTemp2;
        var ally = chosenTemp2.ally_army;
        var enemy = chosenTemp2.enemy_army;
    }

    function timer(v) {
        return new Promise(function(r) {
            return setTimeout(r, v);
        });
    }
    loop1: for (
        let i = armies[allyArmyName][allyArmyHP]; i >= -3; i = i - armies[enemyArmyName][enemyArmyDMG]
    ) {
        if (armies[enemyArmyName][enemyArmyHP] <= 0) {
            armies[enemyArmyName][enemyArmyInitialHP] = 0;
            enemyUnitsNow--
            console.log("Enemy is defeated");
            battleSites[ongoingBattle].ongoing = false;

            try {
                tempBattle.battle = false;
                tempBattle2.battle = false;
            } catch (e) {
                // console.log(e);
            }
            armies[enemyArmyName][enemySoldiers] = 0;
            break;
        } else {
            try {
                tempBattle.battle = false;
                tempBattle2.battle = false;
            } catch (e) {
                // console.log(e);
            }
        }
        chosenTemp.ally_army = document.getElementsByClassName(armyName_ally)[0];
        chosenTemp.enemy_army = document.getElementsByClassName(armyName_enemy)[0];
        var ally = chosenTemp.ally_army;
        var enemy = chosenTemp.enemy_army;
        // i = i - armies[enemyArmyDMG];
        armies[allyArmyName][allyArmyHP] = i;
        checkHealthAlly(i, ally, allySoldiers, allyArmyInitialHP, allyArmyName);

        console.log("Ally:" + armies[allyArmyName][allyArmyHP]);
        loop2: for (
            let j = armies[enemyArmyName][enemyArmyHP]; j >= -3; j = j - armies[allyArmyName][allyArmyDMG]
        ) {
            j = j - armies[allyArmyName][allyArmyDMG];
            console.log("Enemy:" + armies[enemyArmyName][enemyArmyHP]);
            // console.log("!!!!" + armies[enemyArmyInitialHP]);
            armies[enemyArmyName][enemyArmyHP] = j;
            checkHealthEnemy(j, enemy, enemySoldiers, enemyArmyInitialHP, enemyArmyName);
            await timer(1000);
            break;
        }
    }

    if (armies[allyArmyName][allyArmyHP] <= 0) {
        unitsNow--
        console.log("Ally is defeated");
        battleSites[ongoingBattle].ongoing = false;
        armies[allyArmyName][allyArmyInitialHP] = 0;
        try {
            tempBattle.battle = false;
            tempBattle2.battle = false;
        } catch (e) {
            console.log(e);
        }
        // if (ally.firstChild) {
        //   ally.removeChild(ally.childNodes[1]); /////STOOOP!!!1111 удалить весь див если хп меньше 0
        // console.log("delite");
        // }
    }
    chosenTemp.ally_army = "dummy";
    chosenTemp.enemy_army = "dummy";
    chosenTemp2.ally_army = "dummy";
    chosenTemp2.enemy_army = "dummy";
}

function checkHealthAlly(i, ally, allySoldiers, allyArmyInitialHP, allyArmyName) {

    var health = (i / armies[allyArmyName][allyArmyInitialHP]) * 100;
    if (health >= 70 && health <= 80) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 8) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 60 && health <= 70) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 7) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 50 && health <= 60) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 6) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 40 && health <= 50) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 5) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 30 && health <= 40) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 4) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 20 && health <= 30) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 3) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= 10 && health <= 20) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 2) {
                ally.removeChild(ally.firstElementChild);
                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    } else if (health >= -10 && health <= 0) {
        if (ally.firstElementChild) {
            if (armies[allyArmyName][allySoldiers] == 1) {

                ally.removeChild(ally.firstElementChild);
                if (ally.classList[1] == "archer" || ally.classList[1] == "tower") {
                    ally.removeChild(ally.firstElementChild);
                }

                armies[allyArmyName][allySoldiers] = armies[allyArmyName][allySoldiers] - 1;
            }
        }
    }
}

function checkHealthEnemy(j, enemy, enemySoldiers, enemyArmyInitialHP, enemyArmyName) {
    var health = (j / armies[enemyArmyName][enemyArmyInitialHP]) * 100;
    if (health >= 70 && health <= 80) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 8) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 60 && health <= 70) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 7) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 50 && health <= 60) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 6) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 40 && health <= 50) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 5) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 30 && health <= 40) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 4) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 20 && health <= 30) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 3) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= 10 && health <= 20) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 2) {
                enemy.removeChild(enemy.firstElementChild);
                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    } else if (health >= -10 && health <= 0) {
        if (enemy.firstElementChild) {
            if (armies[enemyArmyName][enemySoldiers] == 1) {
                enemy.removeChild(enemy.firstElementChild);
                if (enemy.classList[1] == "tower" || enemy.classList[1] == "archer") {
                    enemy.removeChild(enemy.firstElementChild);
                }

                armies[enemyArmyName][enemySoldiers] = armies[enemyArmyName][enemySoldiers] - 1;
            }
        }
    }
}

// var army2 = document.getElementsByClassName("army-enemy")[0];

setInterval(checkBattle, 38);

function checkBattle() {

    // можно в отдельную ф запихнуть
    for (let key in battleSites) {
        if (battleSites[key].ongoing == true) {
            var whosArmyAlly = battleSites[key].ally.replace(/[_]/g, ' ');
            var whosArmyEnemy = battleSites[key].enemy.replace(/[_]/g, ' ');
            let allyArmyName = `${whosArmyAlly} ally`;
            let enemyArmyName = `${whosArmyEnemy} enemy`;
            let enemyHPname = `enemy_${battleSites[key].enemy}_hp`;
            let allyHPname = `ally_${battleSites[key].ally}_hp`;
            let allyHP = armies[allyArmyName][allyHPname];
            if (battleSites[key].end == false) {
                var enemyHP = armies[enemyArmyName][enemyHPname];
            }

            if (allyHP <= 0) {
                var elem = document.getElementsByClassName(battleSites[key].ally)[0];
                if (elem === undefined) {
                    return;
                }
                elem.parentNode.removeChild(elem);
            } else if (enemyHP <= 0) {
                let name = battleSites[key].enemy;
                let nameElement = name.split("_");
                var elem = document.getElementsByClassName(nameElement[0])[0];
                if (elem === undefined) {
                    continue;
                }
                elem.parentNode.removeChild(elem);
            }
        }
    }
    if (
        chosenTemp.ally_army != "dummy" &&
        chosenTemp.enemy_army != "dummy" &&
        chosenTemp.battle == false
    ) {
        if (
            armies[chosenTemp.enemy_army_name] >= 0 &&
            armies[chosenTemp.ally_army_name] <= 0
        ) {
            armyMovements[chosenTemp.enemyName]();
            chosenTemp.ally_army = "dummy";
            chosenTemp.enemy_army = "dummy";
            chosenTemp.ally_army_name = "dummy";
            chosenTemp.enemy_army_name = "dummy";
            chosenTemp.enemyName = "dummy";
            chosenTemp.battle = false;
        } else if (armies[chosenTemp.ally_army_name] <= 0) {
            chosenTemp.ally_army = "dummy";
            chosenTemp.enemy_army = "dummy";
            chosenTemp.ally_army_name = "dummy";
            chosenTemp.enemy_army_name = "dummy";
            chosenTemp.enemyName = "dummy";
            chosenTemp.battle = false;
        } else if (armies[chosenTemp.enemy_army_name] <= 0) {
            chosenTemp.ally_army = "dummy";
            chosenTemp.enemy_army = "dummy";
            chosenTemp.ally_army_name = "dummy";
            chosenTemp.enemy_army_name = "dummy";
            chosenTemp.enemyName = "dummy";
            chosenTemp.battle = false;
        }
    } else if (
        chosenTemp2.ally_army != "dummy" &&
        chosenTemp2.enemy_army != "dummy" &&
        chosenTemp2.battle == false
    ) {
        if (
            armies[chosenTemp2.enemy_army_name] >= 0 &&
            armies[chosenTemp2.ally_army_name] <= 0
        ) {
            armyMovements[chosenTemp2.enemyName]();
            chosenTemp2.ally_army = "dummy";
            chosenTemp2.enemy_army = "dummy";
            chosenTemp2.ally_army_name = "dummy";
            chosenTemp2.enemy_army_name = "dummy";
            chosenTemp2.enemyName = "dummy";
            chosenTemp2.battle = false;
        } else if (armies[chosenTemp2.ally_army_name] <= 0) {
            chosenTemp2.ally_army = "dummy";
            chosenTemp2.enemy_army = "dummy";
            chosenTemp2.ally_army_name = "dummy";
            chosenTemp2.enemy_army_name = "dummy";
            chosenTemp2.enemyName = "dummy";
            chosenTemp2.battle = false;
        } else if (armies[chosenTemp2.enemy_army_name] <= 0) {
            chosenTemp2.ally_army = "dummy";
            chosenTemp2.enemy_army = "dummy";
            chosenTemp2.ally_army_name = "dummy";
            chosenTemp2.enemy_army_name = "dummy";
            chosenTemp2.enemyName = "dummy";
            chosenTemp2.battle = false;
        }
    }
}

function movementChanger() {}

setInterval(checkBattle2, 35);

function checkBattle2() {
    for (let key in battleSites) {
        if (battleSites[key].ongoing == true) {
            let ally = battleSites[key].ally;
            let enemy = battleSites[key].enemy;

            let battleAlly = document.getElementsByClassName(ally)[0];
            let battleEnemy = document.getElementsByClassName(enemy)[0];
            if (battleAlly === undefined || battleEnemy === undefined) {
                continue;
            }
            let allyIdentity = `.${battleSites[key].allyName}`;
            let soldierArmyAlly = battleAlly.closest(allyIdentity);
            let enemyIdentity = `.${battleSites[key].enemyName}`;
            let soldierArmyEnemy = battleEnemy.closest(enemyIdentity);
            if (
                soldierArmyAlly.classList[0] == battleSites[key].allyName &&
                soldierArmyEnemy.classList[0] == battleSites[key].enemyName
            ) {
                let allySoldiers = soldierArmyAlly.children;
                for (let i = 0; i < allySoldiers.length; i++) {
                    allySoldiers[i].style.animation = "";
                    allySoldiers[i].style.animation = `${ally}_attack 1s infinite`;
                }
                let enemySoldiers = soldierArmyEnemy.children;
                for (let j = 0; j < enemySoldiers.length; j++) {
                    enemySoldiers[j].style.animation = "";
                    enemySoldiers[j].style.animation = `${enemy}_attack 1s infinite`;
                }
            }
        } else if (battleSites[key].ongoing == false) {
            let ally = battleSites[key].ally;
            let enemy = battleSites[key].enemy;

            let battleAlly = document.getElementsByClassName(ally)[0];
            let battleEnemy = document.getElementsByClassName(enemy)[0];
            if (battleAlly === undefined && battleEnemy === undefined) {
                return;
            }
            if (battleAlly === undefined) {
                let enemyIdentity = `.${battleSites[key].enemyName}`;
                let soldierArmyEnemy = battleEnemy.closest(enemyIdentity);
                if (soldierArmyEnemy.classList[0] == battleSites[key].enemyName) {
                    let enemySoldiers = soldierArmyEnemy.children;
                    for (let j = 0; j < enemySoldiers.length; j++) {
                        enemySoldiers[j].style.animation = "";
                        enemySoldiers[j].style.animation = `${enemy}_move 1s infinite`;
                    }
                }
                var elem = document.getElementsByClassName(
                    battleSites[key].allyName
                )[0];
                if (elem === undefined) {
                    return;
                }
                elem.parentNode.removeChild(elem);
                return;
            } else if (battleEnemy === undefined) {
                let allyIdentity = `.${battleSites[key].allyName}`;
                let soldierArmyAlly = battleAlly.closest(allyIdentity);
                if (soldierArmyAlly.classList[0] == battleSites[key].allyName) {
                    let allySoldiers = soldierArmyAlly.children;
                    for (let i = 0; i < allySoldiers.length; i++) {
                        allySoldiers[i].style.animation = "";
                    }
                } ///Проблема

                var elem = document.getElementsByClassName(
                    battleSites[key].enemyName
                )[0];
                if (elem === undefined) {
                    continue;
                }
                elem.parentNode.removeChild(elem);
                battleSites[key].enemy = "dummy";
                battleSites[key].ally = "dummy";
                battleSites[key].ongoing = "dummy";
                battleSites[key].start = "dummy";
                return;
            }
        }
        continue;
    }
}

//
function checkColisionAll(
    // и в этот момент должны идти колижены между оставшимися

) {
    for (let i = 0; i < listOfAlly.length; i++) {
        for (let k = 0; k < listOfAlly.length; k++) {
            colision(
                listOfAlly[i],
                listOfAlly[k],
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

function listCleanUp(armyName) {
    for (let i = 0; i < listOfAlly.length; i++) {
        for (let k = 0; k < listOfAlly.length; k++) {
            // console.log("______________");
            // console.log(listOfAlly[i]);
            // console.log(listOfAlly[k]);

            if (listOfAlly[i] == listOfAlly[k] && i != k) {
                listOfAlly.splice(i, 1);
            }
        }
        if (listOfAlly[i] == armyName) {
            listOfAlly.splice(i, 1);
        }
    }
    // console.log(listOfAlly);
}

//
function colision(
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
    if (ally_type == "peasant") {
        return
    }
    var computedStyleArmyRight;
    if (armyLeft === undefined || armyRight === undefined) {
        if (neutralArmy === undefined) {
            return;
        } else if (neutralArmy !== undefined) {
            computedStyleArmyNeutral = getComputedStyle(neutralArmy);
        } else {
            var computedStyleArmyNeutral
        }
    } else {
        computedStyleArmyRight = getComputedStyle(armyRight);
    }

    if (ally_type == "archer" && enemy_type != "archer") {
        var archerArea = armyLeft.children[1]

        var computedArea = getComputedStyle(archerArea);
        var computedArea_width = parseInt(computedArea.width)

        var computedStyleArmyLeft = getComputedStyle(armyLeft);
        var leftArmy_left = parseInt(computedStyleArmyLeft.left),
            leftArmy_width = parseInt(computedStyleArmyLeft.width),
            leftArmy_top = parseInt(computedStyleArmyLeft.top),
            leftArmy_height = parseInt(computedStyleArmyLeft.height);
        leftArmy_left -= computedArea_width;
    } else {
        var computedStyleArmyLeft = getComputedStyle(armyLeft);
        var leftArmy_left = parseInt(computedStyleArmyLeft.left),
            leftArmy_width = parseInt(computedStyleArmyLeft.width),
            leftArmy_top = parseInt(computedStyleArmyLeft.top),
            leftArmy_height = parseInt(computedStyleArmyLeft.height)
    }

    //Get the height and position of the player
    if (enemy_type == "tower") {
        var towerArea = armyRight.children[1]

        var computedArea = getComputedStyle(towerArea);
        var computedArea_width = parseInt(computedArea.width)


        var rightArmy_left = parseInt(computedStyleArmyRight.left),
            rightArmy_width = parseInt(computedStyleArmyRight.width),
            rightArmy_top = parseInt(computedStyleArmyRight.top),
            rightArmy_height = parseInt(computedStyleArmyRight.height)
        rightArmy_left = rightArmy_left + (computedArea_width / 2);
    } else if (computedStyleArmyRight != undefined) {
        var rightArmy_left = parseInt(computedStyleArmyRight.left),
            rightArmy_width = parseInt(computedStyleArmyRight.width),
            rightArmy_top = parseInt(computedStyleArmyRight.top),
            rightArmy_height = parseInt(computedStyleArmyRight.height)
    }
    if (computedStyleArmyNeutral != undefined) {
        var neutralArmy_left = parseInt(computedStyleArmyNeutral.left),
            neutralArmy_width = parseInt(computedStyleArmyNeutral.width),
            neutralArmy_top = parseInt(computedStyleArmyNeutral.top),
            neutralArmy_height = parseInt(computedStyleArmyNeutral.height);
    }

    // rightArmy_left -= 5;
    //If the character's bottom is hitting the ground,
    //Stop moving
    if (playerChoice) {
        console.log(battleSites);

        //Вот тут остановился
        let inter = setInterval(() => {
            if (armyRight != undefined) {
                if (rightArmy_left < leftArmy_left) {
                    if (leftArmy_left + leftArmy_width <= rightArmy_left) {
                        leftArmy_left = rightArmy_left - leftArmy_width;
                    } else {
                        leftArmy_left -= 5;
                    }
                } else {
                    if (leftArmy_left + leftArmy_width >= rightArmy_left) {
                        leftArmy_left = rightArmy_left - leftArmy_width;
                    } else {
                        leftArmy_left += 5;
                    }
                }
            }

            if (neutralArmy_left < leftArmy_left) {
                if (leftArmy_left + leftArmy_width <= neutralArmy_left) {
                    leftArmy_left = neutralArmy_left - leftArmy_width;
                } else {
                    leftArmy_left -= 5;
                }
            } else {
                if (leftArmy_left == neutralArmy_left) {
                    leftArmy_left = neutralArmy_left;
                } else {
                    leftArmy_left += 5;
                }
            }

            if (leftArmy_top < rightArmy_top) {
                leftArmy_top += 5;
            } else if (leftArmy_top > rightArmy_top) {
                leftArmy_top -= 5;
            } else if (leftArmy_top < neutralArmy_top) {
                leftArmy_top += 5;
            } else if (leftArmy_top > neutralArmy_top) {
                leftArmy_top -= 5;
            }
            armyLeft.style.top = leftArmy_top + "px";

            //Set the character's final position
            armyLeft.style.left = leftArmy_left + "px";
            // armyRight.style.left = rightArmy_left + "px";
            var checkArmyLeft = rightArmy_left - leftArmy_width + "px";
            var neutralArmy_topPX = neutralArmy_top + "px";
            if (parseInt(armyLeft.style.left) == neutralArmy_left &&
                parseInt(armyLeft.style.top) == neutralArmy_top) {
                clearInterval(inter);
            }
            if (
                armyLeft.style.left === checkArmyLeft &&
                armyLeft.style.top === neutralArmy_topPX
            ) {
                // footmanSpot = true;
                if (neutralArmy === undefined) {
                    if (armyRight.classList.contains("enemy")) {
                        var item = [...armyRight.classList];
                        var choseEnemy = item[0];
                        listOfEnemies[choseEnemy] = false;
                    }
                }

                chosen.enemy_army = "dummy";
                chosen.enemy_army_type = "dummy";
                chosen.ally_army = "dummy";
                chosen.ally_army_type = "dummy";

                var allyArmy = `${armyName_ally}_${ally_type}`;
                var enemyArmy = `${armyName_enemy}_${enemy_type}`;
                var writeCheck = false;
                for (let key in battleSites) {
                    if (
                        battleSites[key].ally == allyArmy &&
                        battleSites[key].enemy == enemyArmy
                    ) {
                        writeCheck = true;
                        continue;
                    }
                    if (
                        battleSites[key].ally == "dummy" &&
                        battleSites[key].enemy == "dummy" &&
                        writeCheck == false
                    ) {
                        battleSites[key].ally = allyArmy;
                        battleSites[key].enemy = enemyArmy;
                        battleSites[key].allyName = armyName_ally;
                        battleSites[key].enemyName = armyName_enemy;
                        battleSites[key].ongoing = true;

                        let armyName_neutral = neutralArmy;
                        writeCheck = true;
                        let ongoingBattle = key;
                        listOfEnemies[armyName_enemy] = false;

                        clearInterval(inter);
                        startBattle(
                            armyName_ally,
                            armyName_enemy,
                            armyName_neutral,
                            ally_type,
                            enemy_type,
                            neutral_type,
                            ongoingBattle
                        );

                        return;
                    }
                }
            }
        }, 33);
    } else if (!playerChoice) {
        if (
            leftArmy_left < rightArmy_left + rightArmy_width &&
            leftArmy_left + leftArmy_width > rightArmy_left &&
            leftArmy_top < rightArmy_top + rightArmy_height &&
            leftArmy_top + leftArmy_height > rightArmy_top
        ) {
            // var armyNumber = armyName_ally
            // let armyNameNuber = armyNumber.match(/\d+/)
            // if (armyName_ally) {

            // }



            var allyWithNoDigits = armyName_ally.replace(/[0-9]/g, '');
            var enemyWithNoDigits = armyName_enemy.replace(/[0-9]/g, '');

            if (allyWithNoDigits == enemyWithNoDigits) {
                var allyWithNoLetters = armyName_ally.match(/\d+/)
                var enemyWithNoLetters = armyName_enemy.match(/\d+/)
                if (allyWithNoLetters < enemyWithNoLetters) {
                    if (allyWithNoDigits == "human" &&
                        enemyWithNoDigits == "vampire") {
                        leftArmy_left = leftArmy_left + leftArmy_width;
                        armyRight.style.left = leftArmy_left + "px";
                    } else if (allyWithNoDigits == "human" &&
                        enemyWithNoDigits == "human") {
                        leftArmy_left = leftArmy_left + leftArmy_width;
                        armyRight.style.left = leftArmy_left + "px";
                    }
                } else if (allyWithNoLetters > enemyWithNoLetters) {
                    if (allyWithNoDigits == "vampire" &&
                        enemyWithNoDigits == "vampire") {
                        rightArmy_left = rightArmy_left - rightArmy_width;
                        armyLeft.style.left = rightArmy_left + "px";
                    }
                } else {

                    rightArmy_left = rightArmy_left + leftArmy_width;


                    armyLeft.style.left = rightArmy_left + "px";

                    console.log("not player choice");
                }
            }
            var allyArmy = `${armyName_ally}_${ally_type}`;
            var enemyArmy = `${armyName_enemy}_${enemy_type}`;
            var writeCheck = false;
            for (let key in battleSites) {
                if (
                    battleSites[key].ally == allyArmy &&
                    battleSites[key].enemy == enemyArmy
                ) {
                    writeCheck = true;
                    continue;
                }
                // else if (
                //     allyMovementsFlags.army1 == armyName_ally &&
                //     allyMovementsFlags.army2 == armyName_enemy) {
                //     if (allyMovementsFlags.flag1 == false &&
                //         allyMovementsFlags.flag2 == false) {
                //         alert("lox")
                //     }
                // }
                if (
                    battleSites[key].ally != allyArmy &&
                    battleSites[key].enemy != enemyArmy &&
                    writeCheck == false &&
                    battleSites[key].ally === "dummy" &&
                    battleSites[key].enemy === "dummy"
                ) {
                    battleSites[key].ally = allyArmy;
                    battleSites[key].enemy = enemyArmy;
                    battleSites[key].allyName = armyName_ally;
                    battleSites[key].enemyName = armyName_enemy;
                    battleSites[key].ongoing = true;
                    writeCheck = true;
                    let ongoingBattle = key;
                    listOfEnemies[armyName_enemy] = false;

                    startBattle(
                        armyName_ally,
                        armyName_enemy,
                        armyName_neutral,
                        ally_type,
                        enemy_type,
                        neutral_type,
                        ongoingBattle
                    );
                    break;
                }
            }

            Object.keys(battleSites).forEach(function(key) {
                if (
                    battleSites[key].ally == allyArmy &&
                    battleSites[key].enemy == enemyArmy
                ) {
                    // console.log("no battle!_____________")
                } else {
                    writeCheck = false;
                }
            });
        } else if (
            leftArmy_left < rightArmy_left + rightArmy_width &&
            leftArmy_left + leftArmy_width > rightArmy_left &&
            leftArmy_top < rightArmy_top + rightArmy_height &&
            leftArmy_top + leftArmy_height > rightArmy_top
        ) {
            return;
        }
    }
}

const battleSites = {
    battle1: {
        ally: "dummy",
        enemy: "dummy",
        start: false,
        ongoing: undefined,
        end: false,
    },
    battle2: {
        ally: "dummy",
        enemy: "dummy",
        start: false,
        ongoing: undefined,
        end: false,
    },
    battle3: {
        ally: "dummy",
        enemy: "dummy",
        start: false,
        ongoing: undefined,
        end: false,
    },
    battle4: {
        ally: "dummy",
        enemy: "dummy",
        start: false,
        ongoing: undefined,
        end: false,
    },
    battle5: {
        ally: "dummy",
        enemy: "dummy",
        start: false,
        ongoing: undefined,
        end: false,
    },
};

var listOfEnemies = {
    vampire1: false,
    vampire2: false,
    human1: false,
};

var listOfAlly = [];

class Army {
    constructor(name, type, allign) {
        this.name = name;
        this.type = type;
        this.allign = allign;
    }
    create(where) {
        let soldierHp = `${this.allign}_${this.name}_${this.type}_hp`;
        let soldierDmg = `${this.allign}_${this.name}_${this.type}_dmg`;
        let soldierCountName = `${this.allign}_${this.name}_${this.type}_soldiers`;
        let armyName_initial_hp = `${this.allign}_${this.name}_${this.type}_initial_hp`;
        let armyName = `${this.name} ${this.type} ${this.allign}`;
        let army = {}

        army[armyName_initial_hp] = 0;
        army[soldierHp] = 0;
        army[soldierDmg] = 0;
        army[soldierCountName] = 0;
        armies[armyName] = army;
        let div = document.createElement("div");
        div.className = `${this.name} ${this.type} ${this.allign}`;
        let parent = document.getElementsByClassName(where)[0];
        parent.append(div);
        armyHpInitNames.push(armyName_initial_hp);
        armySoldiersNames.push(soldierCountName); //Possible add extend class
        listOfAlly.push(this.name);




    }
    addSoldier(name, type, allign) {
        let armyName = `${this.name} ${this.type} ${this.allign}`;
        let soldier = document.createElement("div");
        let soldierCountName = `${this.allign}_${this.name}_${this.type}_soldiers`;
        let soldier_count = armies[armyName][soldierCountName];
        soldier.className = `${this.name}_${this.type}_${this.allign}${soldier_count} ${this.name}_${this.type}`;
        let parent = document.getElementsByClassName(this.name)[0];
        parent.append(soldier);
        let trueName = this.name.substring(0, this.name.length - 1);
        let armyName_initial_hp = `${this.allign}_${this.name}_${this.type}_initial_hp`;
        let armyName_hp = `${this.allign}_${this.name}_${this.type}_hp`;
        let armyName_dmg = `${this.allign}_${this.name}_${this.type}_dmg`;

        let soldierName_hp = `${trueName}_${this.type}_hp`;
        let soldierName_dmg = `${trueName}_${this.type}_dmg`;
        armies[armyName][armyName_initial_hp] =
            armies[armyName][armyName_initial_hp] + sourseSoldiers[soldierName_hp];
        armies[armyName][armyName_hp] = armies[armyName][armyName_hp] + sourseSoldiers[soldierName_hp];
        armies[armyName][armyName_dmg] =
            armies[armyName][armyName_dmg] + sourseSoldiers[soldierName_dmg];
        armies[armyName][soldierCountName] = armies[armyName][soldierCountName] + 1;
    }
    addAreaofControl(thing) {

        let area = document.createElement("div");
        let areaName = `${this.allign}_${this.name}_${this.type} ${thing}_attack_area`
        area.className = areaName
        let parent = document.getElementsByClassName(this.name)[0];
        parent.append(area);
    }

    addFakeSoldier(name, type, allign) {
        let armyName = `${this.name} ${this.type} ${this.allign}`;
        let soldier = document.createElement("img");
        let soldierCountName = `${this.allign}_${this.name}_${this.type}_soldiers`;
        let soldier_count = armies[armyName][soldierCountName];
        soldier.className = `${this.name}_${this.type}_${this.allign}${soldier_count} ${this.name}_${this.type}`;
        let parent = document.getElementsByClassName(this.name)[0];
        parent.append(soldier);
        let trueName = this.name.substring(0, this.name.length - 1);
        let armyName_initial_hp = `${this.allign}_${this.name}_${this.type}_initial_hp`;
        let armyName_hp = `${this.allign}_${this.name}_${this.type}_hp`;
        let armyName_dmg = `${this.allign}_${this.name}_${this.type}_dmg`;

        let soldierName_hp = `${trueName}_${this.type}_hp`;
        let soldierName_dmg = `${trueName}_${this.type}_dmg`;
        armies[armyName][armyName_initial_hp] =
            armies[armyName][armyName_initial_hp] + sourseSoldiers[soldierName_hp];
        armies[armyName][armyName_hp] = armies[armyName][armyName_hp] + sourseSoldiers[soldierName_hp];
        armies[armyName][armyName_dmg] =
            armies[armyName][armyName_dmg] + sourseSoldiers[soldierName_dmg];
        armies[armyName][soldierCountName] = armies[armyName][soldierCountName] + 1;
    }

}

class FakeArmy {
    constructor(name, type) {
        this.name = name;
        this.type = type;

    }
    create(where) {
        let div = document.createElement("div");
        div.className = `${this.name} ${this.type}`;
        let parent = document.getElementsByClassName(where)[0];
        parent.append(div);

    }
    addFakeSoldier(type) {

        let soldier = document.createElement("img");
        soldier.className = `${this.name}_${this.type}_unit`;
        let parent = document.getElementsByClassName(this.name)[0];
        parent.append(soldier);

    }

}

var armyMovements = {

    vampire1: function() {

        let vampire1 = document.getElementsByClassName("vampire1")[0];
        listOfEnemies.vampire1 = true;
        this.movement_right(vampire1);
    },
    vampire2: function() {
        let vampire2 = document.getElementsByClassName("vampire2")[0];
        listOfEnemies.vampire2 = true;
        this.movement_left(vampire2);
    },
    human5: function() {
        let human5 = document.getElementsByClassName("human5")[0];

        this.movement_left(human5);

    },
    moveHumanArmy: function(army) {
        let moveArmy = document.getElementsByClassName(army)[0];
        // listOfEnemies.human1 = true;
        this.movement_left(moveArmy);
    },
    human4: function() {
        let human4 = document.getElementsByClassName("human4")[0];
        // listOfEnemies.human1 = true;
        this.movement_left(human4);
    },
    movement_left: async function(army, left) {
        function timer(v) {
            return new Promise(function(r) {
                return setTimeout(r, v);
            });
        }
        let computedStyleArmyRight = getComputedStyle(army);
        let army_left = parseInt(computedStyleArmyRight.left);
        var item = [...army.classList];
        var choseEnemy = item[0];
        for (let i = 0; i < 2; i++) {
            // if (!listOfEnemies[choseEnemy]) {
            //     break;
            // } else

            // || allyflag == true

            var checkOngoing = ongoingArmyName(choseEnemy);
            if (checkOngoing) {

                break;
                //For loop or something, this just for testing
            } else if (army_left == left) {

                army.style.left = army_left + "px";
                break;
            } else {
                army_left = army_left - 1;
                army.style.left = army_left + "px";
                await timer(33);
            }
        }
    },

    movement_right: async function(army, right) {
        function timer(v) {
            return new Promise(function(r) {
                return setTimeout(r, v);
            });
        }
        let computedStyleArmyRight = getComputedStyle(army);
        let army_right = parseInt(computedStyleArmyRight.left);
        var item = [...army.classList];
        var choseEnemy = item[0];
        for (let i = 0; i < 2; i++) {
            // if (!listOfEnemies[choseEnemy]) {
            //     break;
            // } else

            // || allyflag == true

            var checkOngoing = ongoingArmyName(choseEnemy);
            if (checkOngoing) {

                break;
                //For loop or something, this just for testing
            } else if (army_right == right) {

                army.style.left = army_right + "px";
                break;
            } else {
                army_right = army_right + 1;
                army.style.left = army_right + "px";
                await timer(33);
            }
        }
    },
    movement_top: async function(army, top) {
        function timer(v) {
            return new Promise(function(r) {
                return setTimeout(r, v);
            });
        }
        let computedStyleArmyRight = getComputedStyle(army);
        let army_top = parseInt(computedStyleArmyRight.top);
        var item = [...army.classList];
        var choseEnemy = item[0];
        for (let i = 0; i < 2; i++) {
            // if (!listOfEnemies[choseEnemy]) {
            //     break;
            // } else

            // || allyflag == true

            var checkOngoing = ongoingArmyName(choseEnemy);
            if (checkOngoing) {

                break;
                //For loop or something, this just for testing
            } else if (army_top == top) {

                army.style.top = army_top + "px";
                break;
            } else {
                army_top = army_top - 1;
                army.style.top = army_top + "px";
                await timer(33);
            }
        }


    },
    movement_bottom: async function(army, bottom) {
        function timer(v) {
            return new Promise(function(r) {
                return setTimeout(r, v);
            });
        }
        let computedStyleArmyRight = getComputedStyle(army);
        let army_bottom = parseInt(computedStyleArmyRight.top);
        var item = [...army.classList];
        var choseEnemy = item[0];
        for (let i = 0; i < 2; i++) {
            // if (!listOfEnemies[choseEnemy]) {
            //     break;
            // } else

            // || allyflag == true

            var checkOngoing = ongoingArmyName(choseEnemy);
            if (checkOngoing) {

                break;
                //For loop or something, this just for testing
            } else if (army_bottom == bottom) {

                army.style.top = army_bottom + "px";
                break;
            } else {
                army_bottom = army_bottom + 1;
                army.style.top = army_bottom + "px";
                await timer(33);
            }
        }


    }
};

//Добавить такое, чтоб после остановки они вновь пытались пойти чекая.
//

// setInterval(function movementtest() {
//     // console.log(unitsNow)
//     var movementPoint1 = 500;
//     var movementPoint2 = 400;
//     var movementPoint3 = 300;
//     var movementPoint1Top = 800;
//     loop1:
//         for (let o = 0; o <= unitsNow; o++) {
//             // if (unitsNow == 0) {
//             //     break
//             // }
//             var genName = `human${o}`
//             let human = document.getElementsByClassName(genName)[0];
//             if (human == undefined) {

//                 continue loop1
//             }
//             var computedStyleArmy = getComputedStyle(human);
//             var leftNumber = parseInt(computedStyleArmy.left)
//             var topNumber = parseInt(computedStyleArmy.top)
//                 // console.log("top " + topNumber);
//                 // console.log("left " + leftNumber);
//             if (leftNumber >= movementPoint1 && movementPoint1 <= leftNumber) {
//                 armyMovements.movement_left(human)
//                 armyMovements.movement_top(human)
//                     // console.log("point 1");
//             } else if (leftNumber >= movementPoint2 && movementPoint2 <= leftNumber) {
//                 armyMovements.movement_left(human)
//                     // console.log("point 2");
//             } else if (leftNumber >= movementPoint3 && movementPoint3 <= leftNumber) {
//                 armyMovements.movement_left(human)
//                     // console.log("point 3");
//             }
//         }
// }, 66)
// Тут от армейки работает
// setInterval(function movementtestEnemy() {
//     // console.log(unitsNow)
//     var movementPoint1 = 500;
//     var movementPoint2 = 400;
//     var movementPoint3 = 300;
//     loop1:
//         for (let o = 0; o <= enemyUnitsNow; o++) {
//             // if (unitsNow == 0) {
//             //     break
//             // }
//             var genName = `vampire${o}`
//             let vampire = document.getElementsByClassName(genName)[0];
//             if (vampire == undefined) {

//                 continue loop1
//             }
//             var computedStyleArmy = getComputedStyle(vampire);
//             var leftNumber = parseInt(computedStyleArmy.left)
//             var topNumber = parseInt(computedStyleArmy.top)
//                 // console.log("top " + topNumber);
//                 // console.log("left " + leftNumber);
//             if (leftNumber >= movementPoint1 && movementPoint1 <= leftNumber) {
//                 armyMovements.movement_right(vampire)
//                     // console.log("point 1");
//             } else if (leftNumber >= movementPoint2 && movementPoint2 <= leftNumber) {
//                 armyMovements.movement_right(vampire)
//                     // console.log("point 2");
//             } else if (leftNumber >= movementPoint3 && movementPoint3 <= leftNumber) {
//                 armyMovements.movement_right(vampire)
//                     // console.log("point 3");
//             }
//         }
// }, 1000)

function checkMovementsAll() {

}


var allyMovementsFlags = {

}

function ongoingArmyName(army) {
    for (key in battleSites) {
        if (battleSites[key].ongoing == true && battleSites[key].allyName == army || battleSites[key].enemyName == army) {
            return true;
        }
    }
}

//хранение инфы о выборе армий мышкой
var chosen = {
    ally_army: "dummy",
    ally_army_type: "dummy",
    enemy_army: "dummy",
    enemy_army_type: "dummy",
    neutral_army: "dummy",
    neutral_army_type: "dummy",
};

setInterval(function() {
    if (chosen.ally_army != "dummy" && chosen.neutral_army != "dummy") {
        var armyLeft = document.getElementsByClassName(chosen.ally_army)[0];
        var neutralArmy = document.getElementsByClassName(chosen.neutral_army)[0];
        var armyName_ally = chosen.ally_army;
        var armyName_neutral = chosen.neutral_army;
        var ally_type = chosen.ally_army_type;
        var neutral_type = chosen.neutral_army_type;
        var playerChoice = true;

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
        );
        chosen.enemy_army = "dummy";
        chosen.enemy_army_type = "dummy";
        chosen.ally_army = "dummy";
        chosen.ally_army_type = "dummy";
        chosen.neutral_army = "dummy";
        chosen.neutral_army_type = "dummy";
    } else if (chosen.enemy_army != "dummy" && chosen.ally_army != "dummy") {
        var armyLeft = document.getElementsByClassName(chosen.ally_army)[0];
        var armyRight = document.getElementsByClassName(chosen.enemy_army)[0];
        var neutralArmy = document.getElementsByClassName(chosen.neutral_army)[0];
        var armyName_ally = chosen.ally_army;
        var armyName_enemy = chosen.enemy_army;
        // var armyName_neutral = chosen.neutral_army;
        var ally_type = chosen.ally_army_type;
        var enemy_type = chosen.enemy_army_type;
        var neutral_type = chosen.neutral_army_type;
        var playerChoice = true;

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
        );
        chosen.enemy_army = "dummy";
        chosen.enemy_army_type = "dummy";
        chosen.ally_army = "dummy";
        chosen.ally_army_type = "dummy";
        chosen.neutral_army = "dummy";
        chosen.neutral_army_type = "dummy";
    }
}, 300);
//переделать что бы были только ally and enemy
document.addEventListener("click", function(e) {

    if (e.target && e.target.classList.contains("enemy")) {
        chosen.enemy_army = e.target.classList[0];
        chosen.enemy_army_type = e.target.classList[1];
    } else if (e.target.parentNode && e.target.parentNode.classList.contains("ally")) {
        chosen.ally_army = e.target.parentNode.classList[0];
        chosen.ally_army_type = e.target.parentNode.classList[1];
    } else if (e.target && e.target.classList.contains("neutral")) {
        chosen.neutral_army = e.target.classList[0];
        chosen.neutral_army_type = e.target.classList[1];
    }
});

var chosenAll = {
    ally_army: "dummy",
    ally_army_type: "dummy",
    enemy_army: "dummy",
    enemy_army_type: "dummy",
};

setInterval(function checkEveryArmyCollision() {
    let ally = document.getElementsByClassName("ally");
    let enemy = document.getElementsByClassName("enemy");
    let len = 0;
    let tempLen = 0;
    let moreAlly = false;
    let moreEnemy = false;
    var singleAlly = false;
    var singleEnemy = false;

    for (let i = 0; i <= ally.length - 1; i++) {
        for (let h = 1; h < ally.length; h++) {
            if (ally[i] == ally[h]) {
                break
            }
            var enemyName = ally[h].classList[0];
            chosenAll.enemy_army = enemyName;
            var enemyType = ally[h].classList[1];
            chosenAll.enemy_army_type = enemyType;

            var allyName = ally[i].classList[0];
            chosenAll.ally_army = allyName;
            var allyType = ally[i].classList[1];
            chosenAll.ally_army_type = allyType;

            if (chosenAll.enemy_army != "dummy" && chosenAll.ally_army != "dummy") {
                // console.log("gocha " + chosenAll.ally_army + " " + chosenAll.enemy_army);
                if (singleAlly) {
                    var armyLeft = document.getElementsByClassName("ally")[0];
                } else {
                    var armyLeft = document.getElementsByClassName("ally")[i];
                }
                var armyRight = document.getElementsByClassName("ally")[h];
                var armyName_ally = chosenAll.ally_army;
                var armyName_enemy = chosenAll.enemy_army;
                var neutralArmy = undefined;
                var neutral_type = undefined;
                var ally_type = chosenAll.ally_army_type;
                var enemy_type = chosenAll.enemy_army_type;
                var playerChoice = false;
                var armyName_neutral = undefined;
                var neutralArmy = undefined;
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
                );

            }
        }
        for (let k = 0; k <= enemy.length - 1; k++) {

            var enemyName = enemy[k].classList[0];
            chosenAll.enemy_army = enemyName;
            var enemyType = enemy[k].classList[1];
            chosenAll.enemy_army_type = enemyType;

            var allyName = ally[i].classList[0];
            chosenAll.ally_army = allyName;
            var allyType = ally[i].classList[1];
            chosenAll.ally_army_type = allyType;

            if (chosenAll.enemy_army != "dummy" && chosenAll.ally_army != "dummy") {
                // console.log("gocha " + chosenAll.ally_army + " " + chosenAll.enemy_army);
                if (singleAlly) {
                    var armyLeft = document.getElementsByClassName("ally")[0];
                } else {
                    var armyLeft = document.getElementsByClassName("ally")[i];
                }
                var armyRight = document.getElementsByClassName("enemy")[k];
                var armyName_ally = chosenAll.ally_army;
                var armyName_enemy = chosenAll.enemy_army;
                var neutralArmy = undefined;
                var neutral_type = undefined;
                var ally_type = chosenAll.ally_army_type;
                var enemy_type = chosenAll.enemy_army_type;
                var playerChoice = false;
                var armyName_neutral = undefined;
                var neutralArmy = undefined;
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
                );
            }
        }

    }
}, 33);

setInterval(() => {
    let enemy = document.getElementsByClassName("enemy");
    for (let i = 0; i < enemy.length; i++) {
        for (let o = 0; o < enemy.length; o++) {
            if (enemy[i] == enemy[o]) {
                break
            }
            var enemyName = enemy[o].classList[0];
            chosenAll.enemy_army = enemyName;
            var enemyType = enemy[o].classList[1];
            chosenAll.enemy_army_type = enemyType;

            var allyName = enemy[i].classList[0];
            chosenAll.ally_army = allyName;
            var allyType = enemy[i].classList[1];
            chosenAll.ally_army_type = allyType;

            if (chosenAll.enemy_army != "dummy" && chosenAll.ally_army != "dummy") {
                // console.log("gocha " + chosenAll.ally_army + " " + chosenAll.enemy_army);

                var armyLeft = document.getElementsByClassName("enemy")[i];

                var armyRight = document.getElementsByClassName("enemy")[o];
                var armyName_ally = chosenAll.ally_army;
                var armyName_enemy = chosenAll.enemy_army;
                var neutralArmy = undefined;
                var neutral_type = undefined;
                var ally_type = chosenAll.ally_army_type;
                var enemy_type = chosenAll.enemy_army_type;
                var playerChoice = false;
                var armyName_neutral = undefined;
                var neutralArmy = undefined;
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
                );

            }
        }
    }
}, 33);


//Тестовое объявление армий
// var vampires1 = new Army("vampire1", "tower", "enemy");

// vampires1.create();
// vampires1.addSoldier();
// vampires1.addAreaofControl("tower")
// vampires1.addSoldier();
// vampires1.addSoldier();
// vampires1.addSoldier();

// armyMovements.vampire1();

// var vampires2 = new Army("vampire2", "thrall", "enemy");
// vampires2.create();
// vampires2.addSoldier();
// vampires2.addSoldier();
// vampires2.addSoldier();

// // armyMovements.vampire2();

// var vampires3 = new Army("vampire3", "thrall", "enemy");
// vampires3.create();
// vampires3.addSoldier();

// // var vampires4 = new Army("vampire4", "thrall", "enemy");
// // vampires4.create();
// // vampires4.addSoldier();
// // vampires4.addSoldier();
// // vampires4.addSoldier();

// var human2 = new Army("human2", "footman", "ally");

// human2.create();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();
// human2.addSoldier();

// var human3 = new Army("human3", "knight", "ally");

// human3.create();
// human3.addSoldier();
// human3.addSoldier();
// human3.addSoldier();
// human3.addSoldier();
// human3.addSoldier();
// human3.addSoldier();
// ______________________________ Building Handlers_________//
var movementTest = {
    movement_bottom: async function(army) {
        function timer(v) {
            return new Promise(function(r) {
                return setTimeout(r, v);
            });
        }
        let computedStyleArmyRight = getComputedStyle(army);
        let army_top = parseInt(computedStyleArmyRight.top);
        var item = [...army.classList];
        var choseEnemy = item[0];
        for (let i = 0; i < 200; i++) {
            // if (!listOfEnemies[choseEnemy]) {
            //     break;
            // } else

            // || allyflag == true


            army_top = army_top + 1;
            army.style.top = army_top + "px";
            await timer(33);

        }
    }
}

function createUnitTest() {
    var army = document.getElementsByClassName("test")[0]
    movementTest.movement_bottom(army)
}


//enable build start
//icons handlers
var barracksButton = document.getElementsByClassName("barracks-icon")[0]
barracksButton.addEventListener("click", posBuild.bind(window, "barracks"))

var houseButton = document.getElementsByClassName("house-icon")[0]
houseButton.addEventListener("click", posBuild.bind(window, "house"))

var fieldButton = document.getElementsByClassName("field-icon")[0]
fieldButton.addEventListener("click", posBuild.bind(window, "field"))

var demolishButton = document.getElementsByClassName("demolish-state-icon")[0]
demolishButton.addEventListener("click", demolishState)

var buildButton = document.getElementsByClassName("build-state-icon")[0]
buildButton.addEventListener("click", buildState)

var leftButton = document.getElementsByClassName("sub-controls_left")[0]
leftButton.addEventListener("click", returnToMain)

var resourse_gold = document.getElementsByClassName("summon-worker-gold")[0]
resourse_gold.addEventListener("click", spawnResourseWorker.bind(window, event, "gold"))

var resourse_stone = document.getElementsByClassName("summon-worker-stone")[0]
resourse_stone.addEventListener("click", spawnResourseWorker.bind(window, event, "stone"))


//переменные для доступа к строительству
var buildMode = false;
var buildModeHidden = true;
var canBuildBarracks = false;
var canBuildHouse = false;
var buildComplete = false;
var buildSmall = false;
var buildMedium = false;
var buildBig = false;
var buildTiny = false;
var buildField = false;
var canBuildField = false;
// var buildingNow = {
//     stadia1: false,
//     stadia2: false,
//     stadia3: false,
//     stadia4: false
// }

//stone and gold button and spawn
var goldWorkers = 100;
var stoneWorkers = 200;

function spawnResourseWorker(event, resourse) {

    //временное (но постоянно, хех), решение, без расширения

    var distL = 0;
    var distT = 0;
    debugger
    if (resourse == "gold") {
        if (100 <= goldWorkers && goldWorkers <= 102) {
            direction = "n"
            switch (goldWorkers) {
                case 100:
                    distT = 90;
                    distL = 0;
                    break;
                case 101:
                    distT = 90;
                    distL = 45;
                    break;
                case 102:
                    distT = 90;
                    distL = 90;
                    break;
                default:
                    break;
            }
        } else if (103 <= goldWorkers && goldWorkers <= 104) {
            direction = "w"
            switch (goldWorkers) {
                case 103:
                    distT = 0;
                    distL = 110;
                    break;
                case 104:
                    distT = 45;
                    distL = 110;
                    break;

                default:
                    break;
            }
        } else if (105 <= goldWorkers && goldWorkers <= 106) {
            direction = "e"
            switch (goldWorkers) {
                case 105:
                    distT = 0;
                    distL = -50;
                    break;
                case 106:
                    distT = 45;
                    distL = -50;
                    break;

                default:
                    break;
            }
        } else if (107 <= goldWorkers && goldWorkers <= 109) {
            direction = "s"
            switch (goldWorkers) {
                case 107:
                    distT = -40;
                    distL = 0;
                    break;
                case 108:
                    distT = -40;
                    distL = 45;
                    break;
                case 109:
                    distT = -40;
                    distL = 90;
                    break;
                default:
                    break;
            }
        }
        spawnMineWorker("spot70", goldWorkers, direction, "mine", distL, distT)
        goldWorkers++

    } else if (resourse == "stone") {
        if (200 <= stoneWorkers && stoneWorkers <= 202) {
            direction = "n"
            switch (stoneWorkers) {
                case 200:
                    distT = 90;
                    distL = 0;
                    break;
                case 201:
                    distT = 90;
                    distL = 45;
                    break;
                case 202:
                    distT = 90;
                    distL = 90;
                    break;
                default:
                    break;
            }
        } else if (203 <= stoneWorkers && stoneWorkers <= 204) {
            direction = "w"
            switch (stoneWorkers) {
                case 203:
                    distT = 0;
                    distL = 110;
                    break;
                case 204:
                    distT = 45;
                    distL = 110;
                    break;

                default:
                    break;
            }
        } else if (205 <= stoneWorkers && stoneWorkers <= 206) {
            direction = "e"
            switch (stoneWorkers) {
                case 205:
                    distT = 0;
                    distL = -50;
                    break;
                case 206:
                    distT = 45;
                    distL = -50;
                    break;

                default:
                    break;
            }
        } else if (207 <= stoneWorkers && stoneWorkers <= 209) {
            direction = "s"
            switch (stoneWorkers) {
                case 207:
                    distT = -40;
                    distL = 0;
                    break;
                case 208:
                    distT = -40;
                    distL = 45;
                    break;
                case 209:
                    distT = -40;
                    distL = 90;
                    break;
                default:
                    break;
            }
        }
        spawnMineWorker("spot71", stoneWorkers, direction, "mine", distL, distT)
        stoneWorkers++

    }
}

function spawnResWorkCarrier() {
    createWorker(
        pointsToBuilding.initWorkerPos.topPoint,
        pointsToBuilding.initWorkerPos.leftPoint,
        "w", 200, "idle")
    let spot = 'spot70'
    startIntervalPeasantFood(event,
        pointsToBuilding[spot].topPoint_2,
        pointsToBuilding[spot].leftPoint_2,
        pointsToBuilding[spot].topPoint_1,
        pointsToBuilding[spot].leftPoint_1,
        pointsToBuilding.initWorkerPos.topPoint, pointsToBuilding.initWorkerPos.leftPoint, 200,
        "carry-stone",
        spot,
        pointsToBuilding[spot].topPoint_3,
        pointsToBuilding[spot].leftPoint_3, )
}




//stone and gold
var stone = document.getElementsByClassName("stone-resourse")[0]
stone.addEventListener("click", showResoursesInterface)

var gold = document.getElementsByClassName("gold-resourse")[0]
gold.addEventListener("click", showResoursesInterface)

function showResoursesInterface(event) {
    event.stopPropagation()

    var interface = document.getElementsByClassName("resourse-interface")[0]
    interface.classList.remove("hidden")
    var goldIcon = document.getElementsByClassName("summon-worker-gold")[0]
    var stoneIcon = document.getElementsByClassName("summon-worker-stone")[0]
    var stoneActive = document.getElementsByClassName("stone-resourse-active")[0]
    var goldActive = document.getElementsByClassName("gold-resourse-active")[0]

    if (event.target.classList[0] == "stone-resourse") {
        stoneIcon.classList.remove("disabled")
        goldIcon.classList.add("disabled")
        event.target.classList.add("stone-resourse-active")
        try {
            goldActive.classList.remove("gold-resourse-active")
        } catch (error) {
            console.log("ещё не выделено золото")
        }

        hideAllMainInterface()
        hideCastleInterface()
        try {
            hideBarracksInterface()
        } catch (error) {
            console.log("бараки ещё не построены")
        }
    } else if (event.target.classList[0] == "gold-resourse") {

        goldIcon.classList.remove("disabled")
        stoneIcon.classList.add("disabled")
        event.target.classList.add("gold-resourse-active")
        try {
            stoneActive.classList.remove("stone-resourse-active")
        } catch (error) {
            console.log("ещё не выделен камень")
        }

        hideAllMainInterface()
        hideCastleInterface()
        try {
            hideBarracksInterface()
        } catch (error) {
            console.log("бараки ещё не построены, что бы прятать интерфейс")
        }
    }




}

///

function buildMediumStart(event) {
    var building = document.getElementsByClassName("buildProsesessBig_stadia1")[0]
    setTimeout(() => {
        building.classList.remove("buildProsesessBig_stadia1")
        building.classList.add("buildProsesessBig_stadia2")
    }, 1500);
    setTimeout(() => {
        building.classList.remove("buildProsesessBig_stadia2")
        building.classList.add("buildProsesessBig_stadia3")
    }, 3000);
    setTimeout(() => {
        building.classList.remove("buildProsesessBig_stadia3")
        building.classList.add("buildProsesessBig_stadia4")
    }, 4500);
    setTimeout(() => {
        buildComplete = true;
        finalBuild(event)
    }, 5000);
}

function buildTinyStart(event) {
    var building = document.getElementsByClassName("buildProsesessTiny_stadia1")[0]
    setTimeout(() => {
        building.classList.remove("buildProsesessTiny_stadia1")
        building.classList.add("buildProsesessTiny_stadia2")
    }, 1500);
    setTimeout(() => {
        building.classList.remove("buildProsesessTiny_stadia2")
        building.classList.add("buildProsesessTiny_stadia3")
    }, 3000);
    setTimeout(() => {
        building.classList.remove("buildProsesessTiny_stadia3")
        building.classList.add("buildProsesessTiny_stadia4")
    }, 4500);
    setTimeout(() => {
        buildComplete = true;
        finalBuild(event)
    }, 5000);

}

function buildFieldStart(event) {
    var building = document.getElementsByClassName("buildProsesessField_stadia1")[0]
    setTimeout(() => {
        building.classList.remove("buildProsesessField_stadia1")
        building.classList.add("buildProsesessField_stadia2")
    }, 1500);
    setTimeout(() => {
        building.classList.remove("buildProsesessField_stadia2")
        building.classList.add("buildProsesessField_stadia3")
    }, 3000);
    setTimeout(() => {
        building.classList.remove("buildProsesessField_stadia3")
        building.classList.add("buildProsesessField_stadia4")
    }, 4500);
    setTimeout(() => {
        buildComplete = true;
        finalBuild(event)
    }, 5000);

}

var alreadySelected = false;

function finalBuild(event) {
    var barracks = document.getElementsByClassName("barracks building")[0]
    var house = document.getElementsByClassName("house building")[0]
    var field = document.getElementsByClassName("field building")[0]
    if (canBuildBarracks && buildComplete) {
        buildComplete = false;
        canBuildBarracks = false;
        barracks.childNodes[1].classList.remove("buildProsesessBig_stadia4")
        barracks.classList.remove("building")
        barracks.classList.add("build")
        barracks.childNodes[1].classList.add("barracks-complete")
        createBarracksInterface(event.target.parentNode.classList[1])
        barracks.addEventListener('click', barracksHireListner)

    } else if (canBuildHouse && buildComplete) {
        buildComplete = false;
        canBuildHouse = false;
        house.childNodes[1].classList.remove("buildProsesessTiny_stadia4")
        house.classList.remove("building")
        house.classList.add("build")
        house.childNodes[1].classList.add("house-complete")
            // createBarracksInterface(event.target.parentNode.classList[1])
            // house.addEventListener('click', barracksHireListner)
    } else if (canBuildField && buildComplete) {
        buildComplete = false;
        canBuildField = false;
        field.childNodes[1].classList.remove("buildProsesessField_stadia4")
        field.classList.remove("building")
        field.classList.add("build")
        let number = getRandomInt(1, 10)
        let searchQuery = `field-${number}`
        field.childNodes[1].classList.add(searchQuery)
        console.log("lox")
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

var ELcreated = false;

//Event Listners состояния закрепленности на интерфейсе постройке солдат в бараках


function barracksHireListner(event) {
    let leftPanelBuildings = document.getElementsByClassName("main-controls")[0]
    leftPanelBuildings.classList.add("hidden")

    let name = `barracks-interface ${event.currentTarget.classList[1]}-slot`
    let leftPanelHirebarracks = document.getElementsByClassName(name)[0]
    leftPanelHirebarracks.classList.remove("hidden")
    event.stopPropagation()
    if (!alreadySelected) {
        event.currentTarget.classList.add("barracks-complete-highlighted")
        event.currentTarget.classList.add("selected")
        alreadySelected = true;
        if (event.currentTarget.classList[1] == "spot1" && elBarracksLocks.spot1 == false) {
            if (!buildUnitLock) {
                elBarracksLocks.spot1 = true; // сделать false когда будешь делать удаление зданий
                barracksHire.footman(event.currentTarget.classList[1])
                barracksHire.maceman(event.currentTarget.classList[1])
                barracksHire.archer(event.currentTarget.classList[1])
                barracksHire.longbowman(event.currentTarget.classList[1])
            }
        } else if (event.currentTarget.classList[1] == "spot2" && elBarracksLocks.spot2 == false) {
            console.log("second barracks listners")
            elBarracksLocks.spot2 = true; // сделать false когда будешь делать удаление зданий
            barracksHire.footman(event.currentTarget.classList[1])
            barracksHire.maceman(event.currentTarget.classList[1])
            barracksHire.archer(event.currentTarget.classList[1])
            barracksHire.longbowman(event.currentTarget.classList[1])
        }

    }




}

function createBarracksInterface(spot) {
    let div = document.createElement("div");
    let iconName = ["footman", "archer", "maceman", "longbowman"]
    div.className = `barracks-interface ${spot}-slot hidden`;
    let parent = document.getElementsByClassName("interface-left")[0];
    parent.append(div);

    let divName = `barracks-interface ${spot}-slot`
    var d1 = document.getElementsByClassName(divName)[0];
    d1.innerHTML = `
    <div class="tier-1">
    <img class="${iconName[0]}-icon-${spot} icon" src="icons/footman.png" alt="">
    <span class="build-count-${iconName[0]} build-counter"></span>
    <img class="${iconName[1]}-icon-${spot} icon" src="icons/archer.png" alt="">
<span class="build-count-${iconName[1]} build-counter"></span>
</div>

<div class="tier-2">
    <img class="${iconName[2]}-icon-${spot} icon" src="icons/maceman.png" alt="">
<span class="build-count-${iconName[2]} build-counter"></span>
    <img class="${iconName[3]}-icon-${spot} icon" src="icons/longbowman.png" alt="">
    <span class="build-count-${iconName[3]} build-counter"></span>
</div>`;
    for (let i = 0; i < iconName.length; i++) {
        var sheet = window.document.styleSheets[1];
        sheet.insertRule(`.${iconName[i]}-icon-${spot}:hover {
        border: 1px solid transparent;
    }
`, sheet.cssRules.length);
    }

}




var mainWindow = document.getElementsByClassName("mainLands")[0]


mainWindow.addEventListener("click", function(event) {
    event.stopPropagation()
        // var barracksListners = document.getElementsByClassName("barracks");
        // for (let i = 0; i < barracksListners.length; i++) {
        //     barracksListners[i].addEventListener("click", function() {
        //         console.log("Бараки")
        //         barracksListners[i].removeEventListener('click', barracksHireListner)
        //         barracksListners[i].addEventListener('click', barracksHireListner)

    //     })
    // }

    let leftPanelHirebarracks = document.getElementsByClassName("barracks-interface")
    var length = leftPanelHirebarracks.length
    for (let i = 0; i < length; i++) {
        leftPanelHirebarracks[i].classList.add("hidden")

    }
    var subLeftBtn = document.getElementsByClassName("sub-controls_left")[0]
    if (subLeftBtn.children[0].classList[0] == "sub-controls_left-img_active") {
        subLeftBtn.classList.add("sub-controls_left-img_inactive")
        subLeftBtn.classList.remove("sub-controls_left-img_active")
        console.log("убрано");
    }



    let leftPanel = document.getElementsByClassName("main-controls")[0];
    leftPanel.classList.remove("hidden")

    let leftPanelBuild = document.getElementsByClassName("buildings-wrapper")[0];
    leftPanelBuild.classList.add("hidden")

    hideCastleInterface()
        //откатываем строительство на дефолт
    buildMode = false;
    // canBuildBarracks = false
    // canBuildField = false
    // canBuildHouse = false


    cancelBuildMedium()
    cancelBuildTiny()
        //отключил глянуть как будет без этого (!!!!!!!)
        // var demolishButton = document.getElementsByClassName("demolish-state-icon")[0]
        // demolishButton.classList.remove("disabled")
    demolishMediumSupport()
    demolishTinySupport()
    hideResourceInterface()


    if (alreadySelected) {
        alreadySelected = false;
        let barracks = document.getElementsByClassName("selected")[0];
        // if (event.currentTarget.classList.contains == "") {

        // }
        barracks.classList.remove("barracks-complete-highlighted")
        barracks.classList.remove("selected")

        // var man = `footman-icon-spot1`
        // var footmanBtn = document.getElementsByClassName(man)[0]
        // footmanBtn.removeEventListener("click", hireMan)
    }
})





// var mainLand = document.getElementsByClassName("spot")
// for (let i = 0; i < mainLand.length; i++) {
//     mainLand[i].addEventListener("click", function(event) {
//         if (event.currentTarget.classList[5] == "selected") {
//             console.log("selected")
//         }
//     })

// }

function hideAllMainInterface() {
    let leftPanel = document.getElementsByClassName("main-controls")[0];
    leftPanel.classList.add("hidden")

    let leftPanelBuildings = document.getElementsByClassName("buildings-wrapper")[0];
    leftPanelBuildings.classList.add("hidden")
}

function hideResourceInterface() {
    let interface = document.getElementsByClassName("resourse-interface")[0]
    interface.classList.add("hidden")
    var stone = document.getElementsByClassName("stone-resourse-active")[0]
    var gold = document.getElementsByClassName("gold-resourse-active")[0]
    try {

        stone.classList.add("stone-resourse")
        stone.classList.remove("stone-resourse-active")
    } catch (error) {

    }

    try {
        gold.classList.add("gold-resourse")
        gold.classList.remove("gold-resourse-active")
    } catch (error) {

    }

}

function hideCastleInterface() {
    let interface = document.getElementsByClassName("castle-interface")[0]
    interface.classList.add("hidden")
    let castle = document.getElementsByClassName("castle")[0];
    castle.classList.remove("spot0-active")
}

function hideBarracksInterface() {
    let interface = document.getElementsByClassName("barracks-interface")[0]
    interface.classList.add("hidden")
    let barracks = document.getElementsByClassName("selected")[0];
    // if (event.currentTarget.classList.contains == "") {

    // }
    barracks.classList.remove("barracks-complete-highlighted")
    barracks.classList.remove("selected")
}

var castleListner = document.getElementsByClassName("castle")[0]

castleListner.addEventListener("click", function(event) {
    hideAllMainInterface()
    hideResourceInterface()
    try {
        hideBarracksInterface()
    } catch (error) {
        console.log("бараки ещё не построены")
    }

    let castle = document.getElementsByClassName("castle")[0];
    castle.classList.add("spot0-active")
    event.stopPropagation()
    let interface = document.getElementsByClassName("castle-interface")[0]
    interface.classList.remove("hidden")
})

var elBarracksLocks = {
    spot1: false,
    spot2: false,
    spot3: false,
    spot4: false
}


var barracksHire = {
    footman: function(spot) {
        var man = `footman-icon-${spot}`
        var unitBtn = document.getElementsByClassName(man)[0]
        event.stopPropagation()
        let unit = "footman"
        unitBtn.addEventListener("click", hireMan.bind(event, event, spot, unit, "first"))
    },
    archer: function(spot) {
        var man = `archer-icon-${spot}`
        var unitBtn = document.getElementsByClassName(man)[0]
        let unit = "archer"
        unitBtn.addEventListener("click", hireMan.bind(event, event, spot, unit, "second"))
    },
    maceman: function(spot) {
        var man = `maceman-icon-${spot}`
        var unitBtn = document.getElementsByClassName(man)[0]
        let unit = "maceman"
        unitBtn.addEventListener("click", hireMan.bind(event, event, spot, unit, "third"))
    },
    longbowman: function(spot) {
        var man = `longbowman-icon-${spot}`
        var unitBtn = document.getElementsByClassName(man)[0]
        let unit = "longbowman"
        unitBtn.addEventListener("click", hireMan.bind(event, event, spot, unit, "fourth"))
    }
}

//initial listners for barraks


function posBuild(building, event) {

    event.stopPropagation()
    if (gold >= 250 && building == "barracks") {
        if (buildMode) {


            // buildModeHidden = true;
            canBuildBarracks = true;
            showBarracksImg()
        }

    } else if (gold <= 250 && building == "barracks") {
        alert("нет бабла/еще строится")
    }
    if (gold >= 50 && building == "house") {
        if (buildMode) {


            // buildModeHidden = true;
            canBuildHouse = true;
            showHouseImg()
        }

    } else if (gold <= 50 && building == "house") {
        alert("нет бабла/еще строится")
    }
    if (wood >= 75 && building == "field") {
        console.log("here we go filed mazafacka")
        if (buildMode) {
            // buildModeHidden = true;
            canBuildField = true;
            showHouseImg()
        }
    }
}

function toggleBuild() {
    var iconBuild = document.getElementsByClassName("build-state-icon")[0]
    iconBuild.classList.toggle("disabled")
    tempDisableDemolish()
}

function tempDisableDemolish() {
    var iconBuild = document.getElementsByClassName("demolish-state-icon")[0]
    iconBuild.classList.toggle("disabled")
}


function cancelBuildMedium() {

    if (buildModeHidden) {
        buildMode = false;
        removeDisabledBuild()
    } else if (!buildModeHidden) {
        buildMode = false;
    }
    showBarracksImg()
}

function cancelBuildTiny() {
    if (buildModeHidden) {
        buildMode = false;
        removeDisabledBuild()
    } else if (!buildModeHidden) {
        buildMode = false;
    }
    showHouseImg()

}

function removeDisabledBuild() {
    var iconBuild = document.getElementsByClassName("build-state-icon")[0]
    iconBuild.classList.remove("disabled")
}

function showBarracksImg() {
    var mediumBuildings = document.getElementsByClassName("building-medium");
    var mediumBuildings_img = document.getElementsByClassName("building-medium_img");
    for (let i = 0; i < mediumBuildings.length; i++) {
        if (mediumBuildings[i].classList[3] == "not-build" && buildMode == true && canBuildBarracks == true) {
            console.log("можем строить")
            mediumBuildings_img[i].classList.add("possible-barracks")
            mediumBuildings_img[i].classList.add("grayscale")

        } else if (mediumBuildings[i].classList[3] == "not-build" && buildMode == false) {

            mediumBuildings_img[i].classList.remove("possible-barracks")
            mediumBuildings_img[i].classList.remove("grayscale")
        }
    }
}

function showHouseImg() {
    var tinyBuildings = document.getElementsByClassName("building-tiny");
    var tinyBuildings_img = document.getElementsByClassName("building-tiny_img");

    //house
    for (let i = 0; i < tinyBuildings.length; i++) {
        if (tinyBuildings[i].classList[3] == "not-build" && canBuildHouse == true && buildMode) {
            console.log("можем строить")
            tinyBuildings_img[i].classList.add("possible-house")
            tinyBuildings_img[i].classList.add("grayscale")

        } else if (tinyBuildings[i].classList[3] == "not-build" && !buildMode) {

            tinyBuildings_img[i].classList.remove("possible-house")
            tinyBuildings_img[i].classList.remove("grayscale")
        }
        //field

        if (tinyBuildings[i].classList[3] == "not-build" && buildMode && canBuildField == true) {
            console.log("можем строить")

            tinyBuildings_img[i].classList.add("possible-field")
            tinyBuildings_img[i].classList.add("grayscale")
        } else if (tinyBuildings[i].classList[3] == "not-build" && buildMode == false) {
            tinyBuildings_img[i].classList.remove("possible-field")
            tinyBuildings_img[i].classList.remove("grayscale")
        }
    }
}
//следующий этап - ниже


//только для бараков?
//отслеживания кликов на площадки строительные
var mediumBuildingSites = document.querySelectorAll("img.building-medium_img");

[].forEach.call(mediumBuildingSites, function(el) {
    el.addEventListener('click', function(e) {
        var parent = el.parentNode.classList[3]
        if (buildMode == true &&
            canBuildBarracks == true && parent == "not-build") {
            e.stopPropagation()
            el.classList.remove("possible-barracks")
            el.classList.remove("grayscale")
            el.parentNode.classList.add("barracks")
            el.classList.add("buildProsesessBig_stadia1")
            el.parentNode.classList.remove("not-build")
            el.parentNode.classList.add("building")

            gold = gold - 250;
            //находим место на котором построено и вычисляем как будет называться юнит
            var spot = el.parentNode.classList[1]
            var unitNumber = spot.replace(/[a-z]/gi, '')
            console.log(unitNumber)



            let buildingsInterface = document.getElementsByClassName("buildings-wrapper")[0]
            buildingsInterface.classList.toggle("hidden")

            let mainInterface = document.getElementsByClassName("main-controls")[0]
            mainInterface.classList.toggle("hidden")
                //вместе два
            buildModeHidden = false;
            cancelBuildMedium()


            createWorker(
                pointsToBuilding.initWorkerPos.topPoint,
                pointsToBuilding.initWorkerPos.leftPoint,
                "w", unitNumber, "idle")
            startIntervalPeasant(
                e,
                pointsToBuilding[spot].topPoint_1,
                pointsToBuilding[spot].leftPoint_1,
                pointsToBuilding[spot].topPoint_2,
                pointsToBuilding[spot].leftPoint_2,
                pointsToBuilding[spot].topPoint_3,
                pointsToBuilding[spot].leftPoint_3,
                unitNumber,
                "constructBuilding", spot)
            buildMedium = true;
        }
        if (buildMode == true &&
            canBuildBlacksmith == true && parent == "not-build") {
            //код для новой постройки
        }
    })
});



var tinyBuildingSites = document.querySelectorAll("img.building-tiny_img");

[].forEach.call(tinyBuildingSites, function(el) {
    el.addEventListener('click', function(e) {
        var parent = el.parentNode.classList[3]
        if (buildMode == true &&
            canBuildHouse == true && parent == "not-build") {
            e.stopPropagation()
            el.classList.remove("possible-house")
            el.classList.remove("grayscale")
            el.parentNode.classList.add("house")
            el.classList.add("buildProsesessTiny_stadia1")
            el.parentNode.classList.remove("not-build")
            el.parentNode.classList.add("building")

            gold = gold - 50;
            //находим место на котором построено и вычисляем как будет называться юнит
            var spot = el.parentNode.classList[1]
            var unitNumber = spot.replace(/[a-z]/gi, '')
            console.log(unitNumber)



            let buildingsInterface = document.getElementsByClassName("buildings-wrapper")[0]
            buildingsInterface.classList.toggle("hidden")

            let mainInterface = document.getElementsByClassName("main-controls")[0]
            mainInterface.classList.toggle("hidden")

            //вместе два
            buildModeHidden = false;
            cancelBuildTiny()


            buildTiny = true;
            createWorker(
                pointsToBuilding.initWorkerPos.topPoint,
                pointsToBuilding.initWorkerPos.leftPoint,
                "w", unitNumber, "idle")
            startIntervalPeasant(
                e,
                pointsToBuilding[spot].topPoint_1,
                pointsToBuilding[spot].leftPoint_1,
                pointsToBuilding[spot].topPoint_2,
                pointsToBuilding[spot].leftPoint_2,
                pointsToBuilding[spot].topPoint_3,
                pointsToBuilding[spot].leftPoint_3,
                unitNumber,
                "constructBuilding")

        }
        if (buildMode == true &&
            canBuildField == true && parent == "not-build") {
            e.stopPropagation()
            el.classList.remove("possible-field")
            el.classList.remove("grayscale")


            el.parentNode.classList.add("field")
            el.classList.add("buildProsesessField_stadia1")
            el.parentNode.classList.remove("not-build")
            el.parentNode.classList.add("building")

            wood = wood - 50;
            //находим место на котором построено и вычисляем как будет называться юнит
            var spot = el.parentNode.classList[1]
            var unitNumber = spot.replace(/[a-z]/gi, '')
            console.log(unitNumber)

            buildModeHidden = false;

            let buildingsInterface = document.getElementsByClassName("buildings-wrapper")[0]
            buildingsInterface.classList.toggle("hidden")

            let mainInterface = document.getElementsByClassName("main-controls")[0]
            mainInterface.classList.toggle("hidden")

            cancelBuildTiny()
            buildField = true;

            createWorker(
                pointsToBuilding.initWorkerPos.topPoint,
                pointsToBuilding.initWorkerPos.leftPoint,
                "w", unitNumber, "idle")
            startIntervalPeasant(
                e,
                pointsToBuilding[spot].topPoint_1,
                pointsToBuilding[spot].leftPoint_1,
                pointsToBuilding[spot].topPoint_2,
                pointsToBuilding[spot].leftPoint_2,
                pointsToBuilding[spot].topPoint_3,
                pointsToBuilding[spot].leftPoint_3,
                unitNumber,
                "field",
                spot)
        }
    })
});


var workersNow = 0;


function createWorker(y, x, position, unitNumber, work) {
    var genName = `humans${unitNumber}`
    var sheet = window.document.styleSheets[1];
    sheet.insertRule(`.humans${unitNumber} {
    position: absolute;
    display: flex;
    top: ${y}px;
    left: ${x}px;
    flex-direction: column;
    flex-wrap: wrap;
    transition: border 0.3s linear;
    
    }
    `, sheet.cssRules.length);
    sheet.insertRule(`.humans${unitNumber}_worker_unit {
      
    }
        `, sheet.cssRules.length);


    var human = new FakeArmy(genName, "worker");

    human.create("mainLands");
    human.addFakeSoldier("worker");

    let name = `humans${unitNumber}_worker_unit`
    let mane = document.getElementsByClassName(name)[0]
    mane.classList.add(`worker-${work}-${position}`);
    // workersNow++
    console.log("created worker");
}



// function createInterval(f, dynamicParameter, interval) {
//     setInterval(function() {



//     }, interval);
// }

//построено ли здание или нет
var spotBuildingsState = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,
    35: false,
    36: false,
    37: false,
    38: false,
    39: false,
    40: false,
    41: false,
    42: false,
    43: false,
    44: false,
    45: false,
    46: false,
    47: false,
    48: false,
    49: false,
    50: false,
}

var pointsToBuilding = {
    initWorkerPos: {
        // Не трогать, это на новый год:
        topPoint: 1007,
        leftPoint: 637
    },
    spot1: {
        topPoint_1: 872,
        leftPoint_1: 637,

        topPoint_2: 872,
        leftPoint_2: 367,

        topPoint_3: 872,
        leftPoint_3: 367,
    },
    spot2: {
        topPoint_1: 875,
        leftPoint_1: 637,

        topPoint_2: 875,
        leftPoint_2: 831,

        topPoint_3: 553,
        leftPoint_3: 831,
    },
    spot3: {
        leftPoint: 300,
        topPoint: 850
    },
    spot4: {
        leftPoint: 300,
        topPoint: 850
    },
    spot5: {
        topPoint_1: 1122,
        leftPoint_1: 637,

        topPoint_2: 1122,
        leftPoint_2: 422,

        topPoint_3: 1080,
        leftPoint_3: 422,
    },
    spot6: {
        topPoint_1: 1060,
        leftPoint_1: 637,

        topPoint_2: 1060,
        leftPoint_2: 690,

        topPoint_3: 1160,
        leftPoint_3: 690,
    },
    spot7: {
        topPoint_1: 1060,
        leftPoint_1: 637,

        topPoint_2: 1060,
        leftPoint_2: 690,

        topPoint_3: 1160,
        leftPoint_3: 690,
    },
    spot8: {
        topPoint_1: 1060,
        leftPoint_1: 637,

        topPoint_2: 1060,
        leftPoint_2: 690,

        topPoint_3: 1160,
        leftPoint_3: 690,
    },
    //gold
    spot70: {
        topPoint_1: 1060,
        leftPoint_1: 637,

        topPoint_2: 1060,
        leftPoint_2: 690,

        topPoint_3: 1160,
        leftPoint_3: 690,
    },

    //stone

    spot71: {
        topPoint_1: 1060,
        leftPoint_1: 637,

        topPoint_2: 1060,
        leftPoint_2: 690,

        topPoint_3: 1160,
        leftPoint_3: 690,
    }
}

var pointsToCastle = {

    spot1: {
        leftPoint: 615,
        topPoint: 850
    },
    spot2: {
        leftPoint: 300,
        topPoint: 850
    },
    spot3: {
        leftPoint: 300,
        topPoint: 850
    },
    spot4: {
        leftPoint: 300,
        topPoint: 850
    }

}

var intervalId;

function startIntervalRevPeasant(event, left, top) {
    // Store the id of the interval so we can clear it later
    intervalId = setInterval(movementtestReverse.bind(window, left, top, event), 66);
}

function startIntervalPeasant(event, topPoint1, leftPoint1, topPoint2, leftPoint2, topPoint3, leftPoint3, unitNumber, workType, spot, reverse) {
    // Store the id of the interval so we can clear it later
    id_array_workers[unitNumber] = setInterval(movementBuild.bind(window, event, topPoint1, leftPoint1, topPoint2, leftPoint2, topPoint3, leftPoint3, unitNumber, workType, spot, reverse), 66)
}
//для ручного теста
var iSAY = false;

var id_array_workers = []

function startIntervalPeasantFood(event, topPoint1, leftPoint1, topPoint2, leftPoint2, topPoint3, leftPoint3, unitNumber, workType, spot, initialPosTop, initialPosLeft, reverse) {
    // Store the id of the interval so we can clear it later
    id_array_food_workers[unitNumber] = setInterval(movementFood.bind(window, event, topPoint1, leftPoint1, topPoint2, leftPoint2, topPoint3, leftPoint3, unitNumber, workType, spot, initialPosTop, initialPosLeft, reverse), 66)
}

var id_array_food_workers = []

function movementBuild(event, topPoint1, leftPoint1, topPoint2, leftPoint2, topPoint3, leftPoint3, unitNumber, workType, spot, reverse) {
    // console.log(unitsNow)
    var movementPoint1Top = topPoint1;
    var movementPointLeft1 = leftPoint1;
    var movementPoint2Top = topPoint2;
    var movementPointLeft2 = leftPoint2;
    var movementPoint3Top = topPoint3;
    var movementPointLeft3 = leftPoint3;
    var buildingSpot = spot;

    //её рили нужно переделать под 3-4 поинта посмотри ту, которая для боевых
    var genName = `humans${unitNumber} worker`;
    var human = document.getElementsByClassName(genName)[0];
    var genName2 = `humans${unitNumber}_worker_unit`;
    var humanImage = document.getElementsByClassName(genName2)[0];

    var computedStyleArmy = getComputedStyle(human);

    var unitTop = parseInt(computedStyleArmy.top) //1007
    var unitLeft = parseInt(computedStyleArmy.left) //637
    var unitN = parseInt(unitNumber)
        // if (!changePointsTogglerKeys[unitN]Keys[unitN]) {
        //     var changePointsTogglerKeys[unitN] = {
        //         1: false,
        //         2: false,
        //         3: false,
        //         4: false,
        //         finished: false,

    //     }
    //     changePointsTogglerKeys[unitN]Keys[unitN] = true;
    // }

    // if (!changePointsTogglerKeys[unitN][1]) {
    changePointsTogglerKeys[unitN]
    if (((topPoint1 < unitTop || topPoint1 > unitTop) || (leftPoint1 < unitLeft || leftPoint1 > unitLeft)) && !changePointsTogglerKeys[unitN][1]) {
        changePointsTogglerKeys[unitN][1] = false;
        var changePoints1 = changeMovePoints(
                topPoint1,
                leftPoint1,
                unitTop,
                unitLeft,
                1)
            // console.log(unitN + " FIRST POINT")
        let changePointsClearSide = changePoints1.replace(/[0-9]/gi, '')
        if (changePoints1 == "s1") {
            humanImage.classList.remove(humanImage.classList.item(1))
            humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
            armyMovements.movement_bottom(human, movementPoint1Top);
            // console.log("S")
        } else if (changePoints1 == "n1") {
            humanImage.classList.remove(humanImage.classList.item(1))
            humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
            armyMovements.movement_top(human, movementPoint1Top);
            // console.log("N")
        } else if (changePoints1 == "e1") {
            humanImage.classList.remove(humanImage.classList.item(1))
            humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
            armyMovements.movement_left(human, movementPointLeft1);
            // console.log("E")
        } else if (changePoints1 == "w1") {
            humanImage.classList.remove(humanImage.classList.item(1))
            humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
            armyMovements.movement_right(human, movementPointLeft1);
            // console.log("W")
        }
    } else {
        changePointsTogglerKeys[unitN][1] = true;
    }
    if (changePointsTogglerKeys[unitN][1] && !changePointsTogglerKeys[unitN][2] && !changePointsTogglerKeys[unitN][3]) {
        var changePoints2 = changeMovePoints(
                topPoint2,
                leftPoint2,
                unitTop,
                unitLeft,
                2)
            // console.log(unitN + " SECOND POINT")
            // } else if (!changePointsTogglerKeys[unitN][3] && changePointsTogglerKeys[unitN][2] && changePointsTogglerKeys[unitN][1]) {
        if (changePoints2 != undefined) {
            let changePointsClearSide = changePoints2.replace(/[0-9]/gi, '')


            if (changePoints2 == "s2") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
                armyMovements.movement_bottom(human, movementPoint2Top);
                // console.log("S2")
            } else if (changePoints2 == "n2") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
                armyMovements.movement_top(human, movementPoint2Top);
                // console.log("N2")
            } else if (changePoints2 == "e2") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
                armyMovements.movement_right(human, movementPointLeft2);
                // console.log("E2")
            } else if (changePoints2 == "w2") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
                armyMovements.movement_left(human, movementPointLeft2);
                // console.log("W2")
            }
        } else {
            changePointsTogglerKeys[unitN][2] = true;
        }

    }

    if (changePointsTogglerKeys[unitN][2] && changePointsTogglerKeys[unitN][1] && !changePointsTogglerKeys[unitN][3]) {
        var changePoints3 = changeMovePoints(
                topPoint3,
                leftPoint3,
                unitTop,
                unitLeft,
                3)
            // console.log(unitN + " THIRD POINT")
            // } else if (!changePointsTogglerKeys[unitN][3] && changePointsTogglerKeys[unitN][2] && changePointsTogglerKeys[unitN][1]) {
        if (changePoints3 != undefined) {
            let changePointsClearSide = changePoints3.replace(/[0-9]/gi, '')
            if (changePoints3 == "s3") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
                armyMovements.movement_bottom(human, movementPoint3Top);
                // console.log("S3")
            } else if (changePoints3 == "n3") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
                armyMovements.movement_top(human, movementPoint3Top);
                // console.log("N3")
            } else if (changePoints3 == "e3") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
                armyMovements.movement_left(human, movementPointLeft3);
                // console.log("E3")
            } else if (changePoints3 == "w3") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-walk-${changePointsClearSide}`);
                armyMovements.movement_right(human, movementPointLeft3);
                // console.log("W3")
            }
        } else {
            changePointsTogglerKeys[unitN][3] = true;
            changePointsTogglerKeys[unitN].finished = true;
        }
    }

    if (changePointsTogglerKeys[unitN].finished) {

        // var result = id_array_workers.indexOf(intervalID)
        clearInterval(id_array_workers[unitN])
            // id_array_workers.splice(result, 1);

        if (workType == "constructBuilding" && !spotBuildingsState[unitN]) {
            humanImage.classList.remove(humanImage.classList.item(1));
            humanImage.classList.add("worker-idle-n");
            setTimeout(() => {
                humanImage.classList.remove("worker-idle-n");
                humanImage.classList.add("worker-build-n");

                canBuild(event)
                setTimeout(() => {
                    humanImage.classList.add("worker-idle-n");
                    humanImage.classList.remove("worker-build-n");
                    setTimeout(() => {
                        spotBuildingsState[unitN] = true
                        startIntervalPeasant(event, topPoint2, leftPoint2, topPoint1, leftPoint1, pointsToBuilding.initWorkerPos.topPoint, pointsToBuilding.initWorkerPos.leftPoint, unitNumber, workType, spot, true)
                        console.log("Обратный интервал");

                        console.log("Достроилось")
                    }, 2000);
                }, 5000);
            }, 1000);
            console.log("finished interval")
            changePointsTogglerKeys[unitN][1] = false;
            changePointsTogglerKeys[unitN][2] = false;
            changePointsTogglerKeys[unitN][3] = false;
            changePointsTogglerKeys[unitN][4] = false;
            changePointsTogglerKeys[unitN].finished = false;
            return
        } else if (workType == "constructBuilding" && reverse) {
            clearInterval(intervalId)
            console.log("finished interval else")
            changePointsTogglerKeys[unitN][1] = false;
            changePointsTogglerKeys[unitN][2] = false;
            changePointsTogglerKeys[unitN][3] = false;
            changePointsTogglerKeys[unitN][4] = false;
            changePointsTogglerKeys[unitN].finished = false;

            humanImage.classList.remove(humanImage.classList.item(1))
            humanImage.classList.add("worker-idle-e");
            setTimeout(() => {
                buildMode = true;
                buildModeHidden = true;
                removeUnit(human)
                toggleBuild()
            }, 1500);
            return
        }


        if (workType == "field" && !spotBuildingsState[unitN]) {
            humanImage.classList.remove(humanImage.classList.item(1));

            //а если не N? А?
            humanImage.classList.add("worker-idle-n");
            setTimeout(() => {
                humanImage.classList.remove("worker-idle-n");
                humanImage.classList.add("worker-dig-n");

                canBuild(event)
                setTimeout(() => {
                    humanImage.classList.add("worker-idle-n");
                    humanImage.classList.remove("worker-dig-n");
                    setTimeout(() => {
                        spotBuildingsState[unitN] = true
                        buildMode = true;
                        buildModeHidden = true;
                        removeUnit(human)
                        toggleBuild()
                        console.log("Достроилось")
                            //старт интервала на перенос и копание
                        startFoodProdaction(spot)

                    }, 2000);
                }, 5000);
            }, 1000);
            console.log("finished interval")
            changePointsTogglerKeys[unitN][1] = false;
            changePointsTogglerKeys[unitN][2] = false;
            changePointsTogglerKeys[unitN][3] = false;
            changePointsTogglerKeys[unitN][4] = false;
            changePointsTogglerKeys[unitN].finished = false;
            return
        } else if (workType == "gold") {
            //тут туда и обратно а потом вновь через таймаут но уже не с начала а с гардена (добавление значений?)
        } else if (workType == "wood") {
            //тут туда и обратно а потом вновь через таймаут но уже не с начала а с гардена (добавление значений?)
        } else if (workType == "food") {
            //тут туда и обратно а потом вновь через таймаут но уже не с начала а с гардена (добавление значений?)
        } else if (workType == "stone") {
            //тут туда и обратно а потом вновь через таймаут но уже не с начала а с гардена (добавление значений?)
        }
        return
    }


    // else {


    //     setTimeout(() => {
    //         startIntervalRevPeasant(event, pointsToCastle.medium1.leftPoint, pointsToCastle.medium1.topPoint)
    //         console.log("Интервал пащеел");
    //     }, 6000);


    // }



}

function movementFood(event, topPoint1, leftPoint1, topPoint2, leftPoint2, topPoint3, leftPoint3, unitNumber, workType, spot, initialPosTop, initialPosLeft, reverse) {

    // function timer(v) {
    //     return new Promise(function(r) {
    //         return setTimeout(r, v);
    //     });
    // }

    var unitN = parseInt(unitNumber)
    if (!changePointsTogglerKeys[unitN].spawned_to_field) {

        spawnFieldWorker(spot, unitNumber, direction, "dig")
        changePointsTogglerKeys[unitN].spawned_to_field = true
            // await timer(10000);
    }
    // console.log(unitsNow)
    var movementPoint1Top = topPoint1;
    var movementPointLeft1 = leftPoint1;
    var movementPoint2Top = topPoint2;
    var movementPointLeft2 = leftPoint2;
    var movementPoint3Top = topPoint3;
    var movementPointLeft3 = leftPoint3;
    var buildingSpot = spot;



    //её рили нужно переделать под 3-4 поинта посмотри ту, которая для боевых
    var genName = `humans${unitNumber} worker`;
    var human = document.getElementsByClassName(genName)[0];
    var genName2 = `humans${unitNumber}_worker_unit`;
    var humanImage = document.getElementsByClassName(genName2)[0];


    var computedStyleArmy = getComputedStyle(human);

    var unitTop = parseInt(computedStyleArmy.top) //1007
    var unitLeft = parseInt(computedStyleArmy.left) //637



    //setTimeout на время копания



    if (!changePointsTogglerKeys[unitN].spawned) {

        var direction = makeDirection()
        removeUnit(human)
        createWorker(
            initialPosTop,
            initialPosLeft,
            direction,
            unitN,
            "walk"
        )
        changePointsTogglerKeys[unitN].spawned = true;
    }

    changePointsTogglerKeys[unitN]
    if (((topPoint1 < unitTop || topPoint1 > unitTop) || (leftPoint1 < unitLeft || leftPoint1 > unitLeft)) && !changePointsTogglerKeys[unitN][1]) {
        changePointsTogglerKeys[unitN][1] = false;
        var changePoints1 = changeMovePoints(
                topPoint1,
                leftPoint1,
                unitTop,
                unitLeft,
                1)
            // console.log(unitN + " FIRST POINT")
        let changePointsClearSide = changePoints1.replace(/[0-9]/gi, '')
        if (changePoints1 == "s1") {
            humanImage.classList.remove(humanImage.classList.item(1))
            humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
            armyMovements.movement_bottom(human, movementPoint1Top);
            // console.log("S")
        } else if (changePoints1 == "n1") {
            humanImage.classList.remove(humanImage.classList.item(1))
            humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
            armyMovements.movement_top(human, movementPoint1Top);
            // console.log("N")
        } else if (changePoints1 == "e1") {
            humanImage.classList.remove(humanImage.classList.item(1))
            humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
            armyMovements.movement_left(human, movementPointLeft1);
            // console.log("E")
        } else if (changePoints1 == "w1") {
            humanImage.classList.remove(humanImage.classList.item(1))
            humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
            armyMovements.movement_right(human, movementPointLeft1);
            // console.log("W")
        }
    } else {
        changePointsTogglerKeys[unitN][1] = true;
    }
    if (changePointsTogglerKeys[unitN][1] && !changePointsTogglerKeys[unitN][2] && !changePointsTogglerKeys[unitN][3]) {
        var changePoints2 = changeMovePoints(
                topPoint2,
                leftPoint2,
                unitTop,
                unitLeft,
                2)
            // console.log(unitN + " SECOND POINT")
            // } else if (!changePointsTogglerKeys[unitN][3] && changePointsTogglerKeys[unitN][2] && changePointsTogglerKeys[unitN][1]) {
        if (changePoints2 != undefined) {
            let changePointsClearSide = changePoints2.replace(/[0-9]/gi, '')


            if (changePoints2 == "s2") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
                armyMovements.movement_bottom(human, movementPoint2Top);
                // console.log("S2")
            } else if (changePoints2 == "n2") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
                armyMovements.movement_top(human, movementPoint2Top);
                // console.log("N2")
            } else if (changePoints2 == "e2") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
                armyMovements.movement_right(human, movementPointLeft2);
                // console.log("E2")
            } else if (changePoints2 == "w2") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
                armyMovements.movement_left(human, movementPointLeft2);
                // console.log("W2")
            }
        } else {
            changePointsTogglerKeys[unitN][2] = true;
        }

    }

    if (changePointsTogglerKeys[unitN][2] && changePointsTogglerKeys[unitN][1] && !changePointsTogglerKeys[unitN][3]) {
        var changePoints3 = changeMovePoints(
                topPoint3,
                leftPoint3,
                unitTop,
                unitLeft,
                3)
            // console.log(unitN + " THIRD POINT")
            // } else if (!changePointsTogglerKeys[unitN][3] && changePointsTogglerKeys[unitN][2] && changePointsTogglerKeys[unitN][1]) {
        if (changePoints3 != undefined) {
            let changePointsClearSide = changePoints3.replace(/[0-9]/gi, '')
            if (changePoints3 == "s3") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
                armyMovements.movement_bottom(human, movementPoint3Top);
                // console.log("S3")
            } else if (changePoints3 == "n3") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
                armyMovements.movement_top(human, movementPoint3Top);
                // console.log("N3")
            } else if (changePoints3 == "e3") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
                armyMovements.movement_left(human, movementPointLeft3);
                // console.log("E3")
            } else if (changePoints3 == "w3") {
                humanImage.classList.remove(humanImage.classList.item(1))
                humanImage.classList.add(`worker-${workType}-${changePointsClearSide}`);
                armyMovements.movement_right(human, movementPointLeft3);
                // console.log("W3")
            }
        } else {
            changePointsTogglerKeys[unitN][3] = true;
            changePointsTogglerKeys[unitN].finished = true;
        }
    }

    if (changePointsTogglerKeys[unitN].finished) {

        // var result = id_array_workers.indexOf(intervalID)
        clearInterval(id_array_food_workers[unitN])
            // id_array_workers.splice(result, 1);

        if (workType == "carry-food" && reverse == undefined) {
            humanImage.classList.remove(humanImage.classList.item(1));
            humanImage.classList.add("worker-idle-n");
            humanImage.classList.add("worker-idle-n");
            // !!
            humanImage.classList.remove("worker--n");

            food = food + 25

            setTimeout(() => {
                spotBuildingsState[unitN] = true

                startIntervalPeasantFood(event, topPoint2, leftPoint2, topPoint1, leftPoint1, initialPosTop, initialPosLeft, unitNumber, "walk", spot, pointsToBuilding.initWorkerPos.topPoint, pointsToBuilding.initWorkerPos.leftPoint, true)
                console.log("Обратный интервал");
            }, 3000)
            changePointsTogglerKeys[unitN][1] = false;
            changePointsTogglerKeys[unitN][2] = false;
            changePointsTogglerKeys[unitN][3] = false;
            changePointsTogglerKeys[unitN][4] = false;
            changePointsTogglerKeys[unitN].finished = false;
            return
        } else if ((workType == "walk" || workType == "carry-food") &&
            reverse) {

            clearInterval(id_array_food_workers[unitN])
            console.log("finished interval else")
            changePointsTogglerKeys[unitN][1] = false;
            changePointsTogglerKeys[unitN][2] = false;
            changePointsTogglerKeys[unitN][3] = false;
            changePointsTogglerKeys[unitN][4] = false;
            changePointsTogglerKeys[unitN].finished = false;
            changePointsTogglerKeys[unitN].spawned_to_field = false;
            humanImage.classList.remove(humanImage.classList.item(1))
            humanImage.classList.add("worker-idle-e");
            setTimeout(() => {
                changePointsTogglerKeys[unitN].spawned = false;

                removeUnit(human)

                spawnFieldWorker(spot, unitNumber, direction, "dig")

                setTimeout(() => {
                    removeUnit(human)
                    createWorker(
                        pointsToBuilding[spot].topPoint_3,
                        pointsToBuilding[spot].leftPoint_3,
                        direction,
                        unitN,
                        "walk"
                    )
                    startIntervalPeasantFood(event,
                        pointsToBuilding[spot].topPoint_2,
                        pointsToBuilding[spot].leftPoint_2,
                        pointsToBuilding[spot].topPoint_1,
                        pointsToBuilding[spot].leftPoint_1,
                        pointsToBuilding.initWorkerPos.topPoint, pointsToBuilding.initWorkerPos.leftPoint, unitNumber, "carry-food", spot,
                        pointsToBuilding[spot].topPoint_3,
                        pointsToBuilding[spot].leftPoint_3)
                    console.log("Обратный интервал");
                }, timers.field);
            }, 1500);
            return
        }
    }

}

var timers = {
    field: 30000
}

function makeDirection() {
    var text = "";
    var possible = "news";

    for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function startFoodProdaction(spot) {

    let event = "dummy"
    let unitNumber = spot.replace(/[a-z]/gi, '')
    startIntervalPeasantFood(
        event,
        pointsToBuilding[spot].topPoint_2,
        pointsToBuilding[spot].leftPoint_2,
        pointsToBuilding[spot].topPoint_1,
        pointsToBuilding[spot].leftPoint_1,
        pointsToBuilding.initWorkerPos.topPoint, pointsToBuilding.initWorkerPos.leftPoint, unitNumber,
        "carry-food",
        spot,
        pointsToBuilding[spot].topPoint_3,
        pointsToBuilding[spot].leftPoint_3, )
}

function spawnFieldWorker(spot, unitNumber, direction, work) {
    var site = document.getElementsByClassName(spot)[0];
    var siteTop = parseInt(window.getComputedStyle(site, null).getPropertyValue("top"));
    var siteleft = parseInt(window.getComputedStyle(site, null).getPropertyValue("left"));


    siteTop = siteTop + getRandomInt(10, 35)
    siteleft = siteleft + getRandomInt(10, 35)

    var directionNew = makeDirection()
    if (direction == undefined) {
        createWorker(
            siteTop,
            siteleft,
            directionNew,
            unitNumber,
            work
        )
    } else {
        createWorker(
            siteTop,
            siteleft,
            direction,
            unitNumber,
            work
        )
    }
}

function spawnMineWorker(spot, unitNumber, direction, work, distL, distT) {

    var site = document.getElementsByClassName(spot)[0];
    var siteTop = parseInt(window.getComputedStyle(site, null).getPropertyValue("top"));
    var siteLeft = parseInt(window.getComputedStyle(site, null).getPropertyValue("left"));

    if (direction == "n") {
        siteTop = siteTop + distT
        siteLeft = siteLeft + distL
    } else if (direction == "s") {
        siteTop = siteTop + distT
        siteLeft = siteLeft + distL
    } else if (direction == "w") {
        siteTop = siteTop + distT
        siteLeft = siteLeft + distL
    } else if (direction == "e") {
        siteTop = siteTop + distT
        siteLeft = siteLeft + distL
    }




    createWorker(
        siteTop,
        siteLeft,
        direction,
        unitNumber,
        work
    )

}

var pointChangeLock = false;

var changePointsTogglerKeys = {
    1: {
        1: false,
        2: false,
        3: false,
        4: false,
        finished: false,
        spawned: false
    },
    2: {
        1: false,
        2: false,
        3: false,
        4: false,
        finished: false,
        spawned: false
    },
    3: {
        1: false,
        2: false,
        3: false,
        4: false,
        finished: false,
        spawned: false
    },
    4: {
        1: false,
        2: false,
        3: false,
        4: false,
        finished: false,
        spawned: false,
        spawned_to_field: false
    },
    5: {
        1: false,
        2: false,
        3: false,
        4: false,
        finished: false,
        spawned: false
    },
    6: {
        1: false,
        2: false,
        3: false,
        4: false,
        finished: false,
        spawned: false
    },
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,
    35: false,
    36: false,
    37: false,
    38: false,
    39: false,
    40: false,
    41: false,
    42: false,
    43: false,
    44: false,
    35: false,
    46: false,
    47: false,
    48: false,
    49: false,
    50: false,
    51: false,
    52: false,
    53: false,
    54: false,
    55: false,
    56: false,
    57: false,
    58: false,
    59: false,
    60: false,
    61: false,
    62: false,
    63: false,
    64: false,
    65: false,
    66: false,
    67: false,
    68: false,
    69: false,
    70: false,
    200: {
        1: false,
        2: false,
        3: false,
        4: false,
        finished: false,
        spawned: false,
        spawned_to_field: false
    },
}


function changeMovePoints(topPoint, leftPoint, unitTop, unitLeft, i) {


    if (unitTop >= topPoint && !pointChangeLock) {
        if (unitTop == topPoint) {
            pointChangeLock = true;
            // changePointsTogglerKeys[unitN][i] = true;
            // return "none"
        } else {
            return `n${i}`
        }

    } else {
        pointChangeLock = false;

    }

    if (unitTop <= topPoint && !pointChangeLock) {
        if (unitTop == topPoint) {
            pointChangeLock = true;
            // changePointsTogglerKeys[unitN][i] = true;
            // return "none"
        } else {
            return `s${i}`
        }
    } else {
        pointChangeLock = false;

    }

    if (unitLeft <= leftPoint && !pointChangeLock) {
        if (unitLeft == leftPoint) {
            pointChangeLock = true;
            // changePointsTogglerKeys[unitN][i] = true;
            // return "none"
        } else {
            return `e${i}`
        }
    } else {
        pointChangeLock = false;

    }

    if (unitLeft >= leftPoint && !pointChangeLock) {
        if (unitLeft == leftPoint) {
            pointChangeLock = true;
            // changePointsTogglerKeys[unitN][i] = true;
            // return "none"
        } else {
            return `w${i}`
        }
    } else {
        pointChangeLock = false;
    }

}


//id change
function startIntervalRevUnit(event, left, top, unit, lock, o) {
    console.log("Интервал создан")
        // Store the id of the interval so we can clear it later
    id_array.push(setInterval(movementUnitReverse.bind(window, left, top, unit, lock, o), 66));
}

var id_array = []

// function startIntervalUnit(event, left, top, unit) {
//     // Store the id of the interval so we can clear it later
//     intervalId = setInterval(movementUnit.bind(window, left, top, unit), 66)
// }


// function movementUnit(leftPoint, topPoint, unit) {
//     // console.log(unitsNow)
//     var movementPointLeft1 = leftPoint;
//     var movementPoint1Top = topPoint;
//     loop1:
//         for (let o = 0; o <= unitsNow; o++) {
//             var genName = `human${o} ${unit}`
//             let human = document.getElementsByClassName(genName)[0];
//             var genName2 = `human${o}_${unit}_ally0`
//             let humanImage = document.getElementsByClassName(genName2)[0];
//             if (human == undefined) {
//                 continue loop1
//             }
//             var computedStyleArmy = getComputedStyle(human);
//             var leftNumber = parseInt(computedStyleArmy.left)
//             if (leftNumber >= movementPointLeft1) {
//                 armyMovements.movement_left(human)
//                 armyMovements.movement_top(human, movementPoint1Top)
//             } else {
//                 humanImage.classList.add(`${unit}-idle-n`);
//                 setTimeout(() => {
//                     humanImage.classList.remove(`${unit}-idle-n`);
//                     humanImage.classList.add(`${unit}-build-n`);
//                 }, 1000);
//                 clearInterval(intervalId)
//                     // setTimeout(() => {
//                     //     startIntervalRevPeasant(event, pointsToCastle.medium1.leftPoint, pointsToCastle.medium1.topPoint)
//                     //     console.log("Интервал пащеел");
//                     // }, 6000);


//             }

//         }

// }
//movement Animation Cotrollers
var movementAC = {
    // Гененировать автоматически типа бесконечный аррай
    first: {
        left: false,
        wait: false
    },
    second: {
        left: false,
        wait: false
    },
    third: {
        left: false,
        wait: false
    },
    fourth: {
        left: false,
        wait: false
    }

}

var unitsReserveTotal = 0;

var unitsReserve = {
    footman: {
        count: 0
    },
    archer: {
        count: 0
    },
    maceman: {
        count: 0
    },
    longbowman: {
        count: 0
    }
}

var buildUnitLock = false;

function movementUnitReverse(leftPoint, topPoint, unit, lock, o) {
    // console.log(unitsNow)

    console.log("Интервал работает")
    buildUnitLock = true;
    var movementPointLeft1 = leftPoint;
    var movementPoint1Top = topPoint;
    loop1:
        for (let o = 0; o <= unitsNow; o++) {
            var genName = `human${o} ${unit}`
            let human = document.getElementsByClassName(genName)[0];
            var genName2 = `human${o}_${unit}_unit`
            let humanImage = document.getElementsByClassName(genName2)[0];
            if (human == undefined) {
                continue loop1
            }
            var computedStyleArmy = getComputedStyle(human);
            var leftNumber = parseInt(computedStyleArmy.left)

            var locks = Object.keys(movementAC)
            for (key of locks) {
                if (lock == key) {
                    movementAC[lock].wait = true;
                    humanImage.classList.remove(`${unit}-idle-s`);
                    humanImage.classList.add(`${unit}-idle-se`);
                }
            }

            // if (!movementAC[lock].wait) {
            //     movementAC[lock].wait = true;
            //     humanImage.classList.remove(`${unit}-idle-s`);
            //     humanImage.classList.add(`${unit}-idle-se`);
            // } else if (!movementAC[lock].wait) {
            //     movementAC[lock].wait = true;
            //     humanImage.classList.remove(`${unit}-idle-s`);
            //     humanImage.classList.add(`${unit}-idle-se`);
            // } else if (!movementAC[lock].wait) {
            //     movementAC[lock].wait = true;
            //     humanImage.classList.remove(`${unit}-idle-s`);
            //     humanImage.classList.add(`${unit}-idle-se`);
            // } else if (!movementAC[lock].wait) {
            //     movementAC[lock].wait = true;
            //     humanImage.classList.remove(`${unit}-idle-s`);
            //     humanImage.classList.add(`${unit}-idle-se`);
            // }

            if (leftNumber <= movementPointLeft1 && movementPointLeft1 >= leftNumber) {
                for (key of locks) {
                    if (lock == key) {
                        movementAC[key].left = true;
                        humanImage.classList.add(`${unit}-walk-e`);
                        humanImage.classList.remove(`${unit}-idle-se`);
                    }
                }
                armyMovements.movement_right(human)
                armyMovements.movement_top(human, movementPoint1Top)
            } else if (leftNumber >= movementPointLeft1 && movementPointLeft1 <= leftNumber) {


                humanImage.classList.remove(`${unit}-walk-e`);
                humanImage.classList.add(`${unit}-idle-e`);

                for (key of locks) {
                    movementAC[key].wait = false;
                    movementAC[key].left = false;
                }
                setTimeout(() => {
                    humanImage.classList.remove(`${unit}-idle-e`);
                    removeUnit(human)
                }, 1500);
                clearInterval(id_array[o])
                    // id_array.shift()
                return
            }



        }
}

function removeInterval(interval, id) {
    // for (let i = 0; i < id_array.length; i++) {
    // if (id_array.length - 1) {
    //     setTimeout(() => {
    //         clearInterval(id_array[i])
    //         id_array.shift()
    //         console.log("Очищен через сек " + i);
    //     }, 1000);
    // } else {

    console.log(interval)
    clearInterval(interval[id])
        // id_array.shift()
        // console.log("Очищен " + 0);
        // }
        // }
}


function canBuild(event) {
    if (buildTiny) {
        buildTinyStart(event)
        buildTiny = false;
    } else if (buildSmall) {
        buildSmallStart(event)
        buildSmall = false;
    } else if (buildMedium) {
        buildMediumStart(event)
        buildMedium = false;
    } else if (buildBig) {
        buildBigStart(event)
        buildBig = false;
    } else if (buildField) {
        buildFieldStart(event)
        buildField = false;
    }
}



// var movePeasantReverse = setInterval(movementtestReverse.bind(window, points.leftPoint, points.topPoint), 66)
var changed = false;

function movementtestReverse(leftPoint, topPoint) {
    // console.log(unitsNow)
    var movementPointLeft1 = leftPoint;
    var movementPoint1Top = topPoint;
    loop1:
        for (let o = 0; o <= workersNow; o++) {
            var genName = `humans${o} worker`
            let human = document.getElementsByClassName(genName)[0];
            var genName2 = `humans${o}_worker_unit`
            let humanImage = document.getElementsByClassName(genName2)[0];
            if (human == undefined) {
                continue loop1
            }
            var computedStyleArmy = getComputedStyle(human);
            var leftNumber = parseInt(computedStyleArmy.left)
            if (leftNumber <= movementPointLeft1 && movementPointLeft1 >= leftNumber) {
                armyMovements.movement_right(human)
                armyMovements.movement_top(human, movementPoint1Top)
            } else {
                humanImage.classList.add("worker-idle-e");
                humanImage.classList.remove("worker-walk-e");
                setTimeout(() => {
                    // buildMode = false;
                    clearInterval(intervalId)
                    removeUnit(human)

                    // if (!changed) {
                    //     unitsNow = unitsNow - 1
                    //     changed = true;
                    // }
                }, 1000);
            }
        }
}


function removeUnit(element) {
    element.remove()
}
var counter = 0;
var code = "";
var prevPointTop = 0;
var prevPointLeft = 0;
//указатель координат
var lands = document.getElementsByClassName("mainLands")[0];
// lands.addEventListener("mousemove", function(event) {
//     var position = "top Coord: " + event.offsetX + " left Coord: " + event.offsetY;
//     let block = document.getElementsByClassName("coordinates")[0]
//     let block2 = document.getElementsByClassName("coordinates2")[0]

//     if (prevPointTop == event.offsetY) {
//         block.style.backgroundColor = "#d6e00d"
//         console.log("по ТОПУ выровнялся")
//         console.log(event.offsetY)
//     } else if (prevPointLeft == event.offsetX) {
//         console.log("по ЛЕФТУ выровнялся")
//         block2.style.backgroundColor = "#d6e00d"
//         console.log(event.offsetX)
//     }
// })

lands.addEventListener("click", function(event) {
    console.log(`coordinates ${event.offsetY} and ${event.offsetX}`)
})

// lands.addEventListener("click", function(event) {

//     if (counter == 0) {
//         let div = document.createElement("div");
//         div.className = `coordinates ${event.offsetY} and ${event.offsetX}`;
//         let parent = document.getElementsByClassName("mainLands")[0];
//         parent.append(div);
//         let block = document.getElementsByClassName("coordinates")[0]

//         let div2 = document.createElement("div");
//         div2.className = `coordinates2 ${event.offsetY} and ${event.offsetX}`;
//         let parent2 = document.getElementsByClassName("mainLands")[0];
//         parent2.append(div2);
//         let block2 = document.getElementsByClassName("coordinates2")[0]


//         block.style.top = event.offsetY + "px"
//         block.style.left = event.offsetX + "px"

//         block2.style.top = event.offsetY + "px"
//         block2.style.left = event.offsetX + "px"

//         code = `
//         spot: {
//             topPoint_1: ${event.offsetY + 20},
//             leftPoint_1: ${event.offsetX + 11},
//         `
//         counter++
//         console.log(code, counter);
//         prevPointTop = event.offsetY
//         prevPointLeft = event.offsetX
//     } else if (counter == 1) {

//         code = code + `
//         topPoint_2: ${event.offsetY+ 20},
//         leftPoint_2: ${event.offsetX+ 11},
//         `
//         counter++
//         console.log(code, counter);
//         prevPointTop = event.offsetY
//         prevPointLeft = event.offsetX
//     } else if (counter == 2) {
//         code = code + `
//         topPoint_3: ${event.offsetY+ 20},
//             leftPoint_3: ${event.offsetX+ 11},
//         `
//         counter++
//         console.log(code, counter);
//         prevPointTop = event.offsetY
//         prevPointLeft = event.offsetX
//     } else if (counter == 3) {
//         code = code + `
//         topPoint_4: ${event.offsetY+ 20},
//             leftPoint_4: ${event.offsetX+ 11},
//     }
//         `
//         counter++
//         console.log(code, counter);
//         prevPointTop = event.offsetY
//         prevPointLeft = event.offsetX
//     }



// });

//ресурсы

var gold = 500;
var wood = 500;
var stone = 500;
var food = 500;

const showresources = setInterval(() => {
    let goldValue = document.getElementsByClassName("gold")[0]
    let woodValue = document.getElementsByClassName("wood")[0]
    let stoneValue = document.getElementsByClassName("stone")[0]
    let foodValue = document.getElementsByClassName("food")[0]
    let unitsValue = document.getElementsByClassName("units")[0]
    goldValue.innerHTML = gold;
    woodValue.innerHTML = wood;
    stoneValue.innerHTML = stone;
    foodValue.innerHTML = food;
    unitsValue.innerHTML = unitsNow + "/" + unitLimit;

    let footmanReserve = document.getElementsByClassName("count-footman")[0]
    footmanReserve.innerHTML = unitsReserve.footman.count;
    let archerReserve = document.getElementsByClassName("count-archer")[0]
    archerReserve.innerHTML = unitsReserve.archer.count;
    let macemanReserve = document.getElementsByClassName("count-maceman")[0]
    macemanReserve.innerHTML = unitsReserve.maceman.count;
    let longbowmanReserve = document.getElementsByClassName("count-longbowman")[0]
    longbowmanReserve.innerHTML = unitsReserve.longbowman.count;

    // let footmanReserveBuild = document.getElementsByClassName("build-count-footman")[0]
    // footmanReserveBuild.innerHTML = buildQue.spot1.footman.count;
    // let archerReserveBuild = document.getElementsByClassName("build-count-archer")[0]
    // archerReserveBuild.innerHTML = buildQue.archer;
    // let macemanReserveBuild = document.getElementsByClassName("build-count-maceman")[0]
    // macemanReserveBuild.innerHTML = buildQue.maceman;
    // let longbowmanReserveBuild = document.getElementsByClassName("build-count-longbowman")[0]
    // longbowmanReserveBuild.innerHTML = buildQue.longbowman;
}, 250);




function unitCreateAnimations(unit, action) {

    var direction = ["s", "se", "e", "ne", "n", "nw", "w", "sw"]
    var sheet = window.document.styleSheets[1];
    // if (unit == "worker") {
    //     for (let i = 0; i < 8; i++) {
    //         sheet.insertRule(`.${unit}-${action}-${direction[i]} {
    //             position: relative;
    //             height: 40px;
    //             width: 40px;
    //             background-image: url("units/${unit}/${action}/${direction[i]} (1).gif") !important;
    //             background-repeat: no-repeat;
    // }`, sheet.cssRules.length);
    //     }
    // } else {
    for (let i = 0; i < 8; i++) {
        sheet.insertRule(`.${unit}-${action}-${direction[i]} {
            
            content: url("units/${unit}/${action}/${direction[i]} (1).gif")
    }`, sheet.cssRules.length);
    }
    // }

}

(function insertAnimations() {
    var units = Object.keys(unitsReserve)
    for (unit of units) {
        unitCreateAnimations(unit, "idle")
        unitCreateAnimations(unit, "walk")
        unitCreateAnimations(unit, "attack")
        unitCreateAnimations(unit, "die")
    }

    //дополнительные анимации


    unitCreateAnimations("footman", "attack2")

    unitCreateAnimations("worker", "idle")
    unitCreateAnimations("worker", "walk")
    unitCreateAnimations("worker", "build")
    unitCreateAnimations("worker", "dig")
    unitCreateAnimations("worker", "mine")
    unitCreateAnimations("worker", "carry-food")
    unitCreateAnimations("worker", "carry-stone")
}())


// var testELMouse = document.getElementsByTagName("body")[0]
// testELMouse.addEventListener("click", callme);

// function callme(e) {
//     var myImage = document.getElementsByClassName("human1_footman_ally0")[0]
//     console.log('My width is: ', this.naturalWidth);
//     console.log('My height is: ', this.naturalHeight);

//     console.log(e.layerX + " " + e.layerY)

//     if (e.layerY <= 200) {
//         console.log("border")
//     } else {
//         // createFakeUnit("footman", e.layerY - 15, e.layerX - 10, "s")
//     }
// }


//попытка сделать нормальное строительство с произвольным размещением.
// var myImage = document.getElementsByClassName("castle-img")[0]

// myImage.addEventListener('click', function() {
//     console.log('My width is: ', this.naturalWidth);
//     console.log('My height is: ', this.naturalHeight);
// });

// var restrictedAreas = {
//     spot1: [1, 6]

// }



// var man = `barracks-icon`
// var footmanBtn = document.getElementsByClassName(man)[0]

// footmanBtn.addEventListener("click", abc, true)

// function abc(event) {
//     console.log("footman created")

//     let unit = "footman"
//     createFakeUnit(unit, pointsToBuilding.medium1.topPoint, pointsToBuilding.medium1.leftPoint, "e")
//     let name = `human${unitsNow-1}_${unit}_unit`
//     let mane = document.getElementsByClassName(name)[0]
//     mane.classList.add(`${unit}-idle-s`);
//     event.stopPropagation()
//     elBarracksLocks.spot1 = true;
//     startIntervalRevUnit(event, pointsToCastle.medium1.leftPoint, pointsToCastle.medium1.topPoint, "footman")

// }
var unitCost = {
    footman: {
        gold: 15,
        food: 30
    }
}

var buildQue = {
        spot1: {
            footman: {
                count: 0,
                lock: "first"
            },
            archer: {
                count: 0,
                lock: "second"
            },
            maceman: {
                count: 0,
                lock: "third"
            },
            longbowman: {
                count: 0,
                lock: "fourth"
            }
        }

    }
    //4
var buildQueTotal = 0;
//размножить на все споты
var buildQueSpot = buildQue.spot1.footman.count +
    buildQue.spot1.archer.count +
    buildQue.spot1.maceman.count +
    buildQue.spot1.longbowman.count
var ready = false;


//Создание юнитов в барраках
function startIntervalHire(event, spot, unit, lock) {

    // Store the id of the interval so we can clear it later
    intervalId = setInterval(finalCreateUnit.bind(window, event, spot, unit, lock), 1200);
}

function hireMan(event, spot, unit, lock) {
    console.log("обучение солдата")
        // && buildUnitLock == false удален из условий
    if (spot == "spot1") {

        buildQue.spot1[unit].count++
            buildQueTotal++
            startIntervalHire(event, spot, unit, lock)
    } else if (spot == "spot2") {

    }
}

async function finalCreateUnit() {

    debugger

    function timer(v) {
        return new Promise(function(r) {
            return setTimeout(r, v);
        });
    }
    // var timeout = timeout + (buildQueTotal * 1000)
    //размножить на все споты пока что только СПОТ1!
    for (let i = 0; i < buildQueTotal; i++) {
        var spots = Object.keys(buildQue)
        for (spot of spots) {
            var units = Object.keys(buildQue[spot])
            for (unit of units) {
                if (buildQue[spot][unit].count > 0) {

                    createFakeUnit(unit, pointsToBuilding.spot1.topPoint_3, pointsToBuilding.spot1.leftPoint_3, "e")
                        //тут было Unitsnow-1
                    let name = `human${unitsNow-1}_${unit}_unit`
                    let mane = document.getElementsByClassName(name)[0]
                    mane.classList.add(`${unit}-idle-s`);
                    //unit1 change
                    intervalCleared = false;

                    startIntervalRevUnit(event, pointsToBuilding.initWorkerPos.topPoint, pointsToBuilding.initWorkerPos.leftPoint, unit, buildQue[spot][unit].lock)

                    // event.stopPropagation()
                    console.log(unit + " created" + " in " + spot)
                    gold = gold - unitCost.footman.gold
                    food = food - unitCost.footman.food

                    unitsReserveTotal++
                    unitsReserve[unit].count++
                        buildQue[spot][unit].count--
                        buildQueTotal--
                        i--
                        await timer(unitBuildTime[unit] * 100);
                    // тутн ужно мутить с интервалами что-то и временем. Пока работает интервал и оно не удалило все - работает но потом... мб есть другой способ передвижения юнитов?

                }
            }
        }

    }
    ready = false;
}

var unitBuildTime = {
    footman: 4,
    archer: 5,
    maceman: 8,
    longbowman: 10
}

function demolishState(event) {
    event.target.classList.toggle("disabled")
    console.log("demolish on")
        // event.stopPropagation()
    var mainLandMedium = document.getElementsByClassName("building-medium spot build")
    for (let spot = 0; spot < mainLandMedium.length; spot++) {
        mainLandMedium[spot].addEventListener("click", demolishMedium)
    }

    var mainLandTiny = document.getElementsByClassName("building-tiny spot build")
    for (let spot = 0; spot < mainLandTiny.length; spot++) {
        mainLandTiny[spot].addEventListener("click", demolishTiny)
    }

}

function returnToMain(event) {

    if (event.target.classList[0] == "sub-controls_left-img_active") {
        let buildings = document.getElementsByClassName("buildings-wrapper")[0]
        buildings.classList.toggle("hidden")
        let mainCotrols = document.getElementsByClassName(" main-controls")[0]
        mainCotrols.classList.toggle("hidden")
        var subLeftBtn = document.getElementsByClassName("sub-controls_left-img_active")[0]

        subLeftBtn.classList.toggle("sub-controls_left-img_inactive")
        subLeftBtn.classList.toggle("sub-controls_left-img_active")
    }
}

function buildState() {
    toggleBuild()

    buildMode = true;
    var buildInterface = document.getElementsByClassName("buildings-wrapper")[0]

    buildInterface.classList.toggle("hidden")

    var mainCotrols = document.getElementsByClassName(" main-controls")[0]

    mainCotrols.classList.toggle("hidden")

    var subLeftBtn = document.getElementsByClassName("sub-controls_left-img_inactive")[0]

    subLeftBtn.classList.toggle("sub-controls_left-img_inactive")
    subLeftBtn.classList.toggle("sub-controls_left-img_active")

}

function demolishMedium(event) {
    console.log(event.currentTarget)
    demolishMediumStart(event)
}

function demolishTiny(event) {
    console.log(event.currentTarget)
    demolishTinyStart(event)
}

function demolishMediumSupport() {
    var mainLand = document.getElementsByClassName("building-medium spot build")
    for (let spot = 0; spot < mainLand.length; spot++) {
        mainLand[spot].removeEventListener("click", demolishMedium)
    }
}

function demolishMediumStart(event) {
    var building = event.currentTarget

    //убираем слухатели
    demolishMediumSupport()

    //Возможные проблемы с наслоением слушателей
    event.currentTarget.removeEventListener('click', barracksHireListner)



    var spot = building.classList[1]
    var unitNumber = spot.replace(/[a-z]/gi, '')
    spotBuildingsState[unitNumber] = false

    building.classList.remove(building.classList.item(3), building.classList.item(4), building.classList.item(5), building.classList.item(6))
    building.classList.add("not-build")
    building.childNodes[1].classList.remove(building.childNodes[1].classList.item(1))

    building.classList.add("demolishProsesessBig_stadia1")

    setTimeout(() => {
        building.classList.remove("demolishProsesessBig_stadia1")
        building.classList.add("demolishProsesessBig_stadia2")
    }, 1500);
    setTimeout(() => {
        building.classList.remove("demolishProsesessBig_stadia2")
        building.classList.add("demolishProsesessBig_stadia3")
    }, 3000);
    setTimeout(() => {
        building.classList.remove("demolishProsesessBig_stadia3")
        building.classList.add("demolishProsesessBig_stadia4")
    }, 4500);
    setTimeout(() => {
        building.classList.remove("demolishProsesessBig_stadia4")

    }, 7000);
}

function demolishTinySupport() {
    var mainLand = document.getElementsByClassName("building-tiny spot build")
    for (let spot = 0; spot < mainLand.length; spot++) {
        mainLand[spot].removeEventListener("click", demolishTiny)
    }

}

function demolishTinyStart(event) {
    var building = event.currentTarget

    //убираем слухатели
    demolishTinySupport()

    var spot = building.classList[1]
    var unitNumber = spot.replace(/[a-z]/gi, '')
    spotBuildingsState[unitNumber] = false



    building.classList.remove(building.classList.item(3), building.classList.item(4), building.classList.item(5), building.classList.item(6))
    building.classList.add("not-build")
    building.childNodes[1].classList.remove(building.childNodes[1].classList.item(1))


    building.classList.add("demolishProsesessTiny_stadia1")

    setTimeout(() => {
        building.classList.remove("demolishProsesessTiny_stadia1")
        building.classList.add("demolishProsesessTiny_stadia2")
    }, 1500);
    setTimeout(() => {
        building.classList.remove("demolishProsesessTiny_stadia2")
        building.classList.add("demolishProsesessTiny_stadia3")
    }, 3000);
    setTimeout(() => {
        building.classList.remove("demolishProsesessTiny_stadia3")
        building.classList.add("demolishProsesessTiny_stadia4")
    }, 4500);
    setTimeout(() => {
        building.classList.remove("demolishProsesessTiny_stadia4")

        //ещё один способ убрать и создать заного
        // building.remove()

        // let div = document.createElement("div");
        // div.className = `${building.classList.item(0)} ${building.classList.item(1)} ${building.classList.item(2)} not-build`;
        // let parent = document.getElementsByClassName("mainLands")[0];
        // parent.append(div);

        // let img = document.createElement("img");
        // img.className = "building-tiny_img"
        // let parentName = `${building.classList.item(0)} ${building.classList.item(1)} ${building.classList.item(2)} not-build`
        // let parentDiv = document.getElementsByClassName(parentName)[0];
        // parentDiv.append(img);
    }, 7000);

}