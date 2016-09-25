var Joker = new Villain('Joker', 100, 0, 5, 5, 10, 10, 15)
var villain = Joker
var hits = 0
var items = {
  gas:new Items("Joker Gas",0.1,"Oh no! HAHAHAHA can't hit HAHAHAHA as HAHAHAHARD!"),
  gloves:new Items("Kevlar Gloves",1.3,"Tougher Gloves means harder hits"),
  batarang:new Items("Improved Batarang",1.2,"A new coating makes the Batarang deliver more damage")
}

function Villain(name, health, pLow, pHigh, kLow, kHigh, sLow, sHigh) {
  this.name = name
  this.health = health
  this.mods = [ items.gas  ]
  this.attacks = {
    punch: { pLow: pLow, pHigh: pHigh },
    kick: { kLow: kLow, kHigh: kHigh },
    special: { sLow: sLow, sHigh: sHigh },
  }
} 
Villain.prototype.strike = function (max, min) {
  this.health -= Math.ceil(Math.random() * (max - min) + min)
  return this.health
}
function onPunch() {
  villain.strike(villain.attacks.punch.pLow, villain.attacks.punch.pHigh);
  document.getElementById('pow').className = ""
  setTimeout(function () {
    document.getElementById('pow').className = "hidden"
  }, 1000)
  hits += 1
  update()
  return health
}
function onKick() {
  villain.strike(villain.attacks.kick.kLow, villain.attacks.kick.kHigh);
  document.getElementById('pow').className = ""
  setTimeout(function () {
    document.getElementById('pow').className = "hidden"
  }, 1000)
  hits += 1
  update()
  return health
}
function onSpecial() {
  villain.strike(villain.attacks.special.sLow, villain.attacks.special.sHigh);
  document.getElementById('pow').className = ""
  setTimeout(function () {
    document.getElementById('pow').className = "hidden"
  }, 1000)
  hits += 1
  update()
  return health
}
function update() {
  var healthElem = document.getElementById('health')
  var hitCounter = document.getElementById('hitCount')
  var playerName = document.getElementById('villain')
  var damage = document.getElementById("damage")
  if (villain.health <= 0) {
    villain.health = 0
  }
  healthElem.innerHTML = villain.health
  hitCounter.innerHTML = hits
  playerName.innerHTML = villain.name
  damage.style.width = villain.health+'%'
}
function reset() {
  villain.health = 100
  hits = 0
  update()
}
function Villain(name, health, pLow, pHigh, kLow, kHigh, sLow, sHigh) {
  this.name = name
  this.health = health
  this.attacks = {
    punch: { pLow: pLow, pHigh: pHigh },
    kick: { kLow: kLow, kHigh: kHigh },
    special: { sLow: sLow, sHigh: sHigh },
  }
}
function Items(name, modifier, description){
  this.name= name;
  this.modifier = modifier;
  this.description = description;
  this.draw = function(){

  }

}
function addMods(){
  debugger
  var allMods=0
  for(var i = 0; i<villain.mods.length; i++){
    allMods += villain.mods.modifier
}return allMods;
}
