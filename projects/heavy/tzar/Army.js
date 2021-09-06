export class Army {
  constructor(name, type, allign) {
    this.name = name;
    this.type = type;
    this.allign = allign;
  }
  create(name, type, allign) {
    let div = document.createElement("div");
    div.className = `${this.name} ${this.type} ${this.allign}`;
    let parent = document.getElementsByClassName("border")[0];
    parent.append(div);
    let armyName_initial_hp = `${this.allign}_${this.name}_${this.type}_initial_hp`;
    armyHpInitNames.push(armyName_initial_hp);
    let soldierCountName = `${this.allign}_${this.name}_${this.type}_soldiers`;
    armySoldiersNames.push(soldierCountName); //Possible add extend class
  }
  addSoldier(name, type, allign) {
    let soldier = document.createElement("div");
    let soldierCountName = `${this.allign}_${this.name}_${this.type}_soldiers`;
    let soldier_count = armies[soldierCountName]
    soldier.className = `${this.name}_${this.type}_${this.allign}${soldier_count} ${this.name}_${this.type}`;
    let parent = document.getElementsByClassName(this.name)[0];
    parent.append(soldier);
    let trueName = this.name.substring(0, this.name.length - 1);
    let armyName_initial_hp = `${this.allign}_${this.name}_${this.type}_initial_hp`;
    let armyName_hp = `${this.allign}_${this.name}_${this.type}_hp`;
    let armyName_dmg = `${this.allign}_${this.name}_${this.type}_dmg`;

    let soldierName_hp = `${trueName}_${this.type}_hp`;
    let soldierName_dmg = `${trueName}_${this.type}_dmg`;
    armies[armyName_initial_hp] =
      armies[armyName_initial_hp] + sourseSoldiers[soldierName_hp];
    armies[armyName_hp] = armies[armyName_hp] + sourseSoldiers[soldierName_hp];
    armies[armyName_dmg] = armies[armyName_dmg] + sourseSoldiers[soldierName_dmg];
    armies[soldierCountName] = armies[soldierCountName] + 1;
  }
}
import 
