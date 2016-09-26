var Joker = new Villain('Joker', 100, 0, 5, 5, 10, 10, 15)
var villain = Joker
var hits = 0
var items = {
  gas:new Items("Joker Gas",-0.5,"Oh no! HAHAHAHA can't hit HAHAHAHA as HAHAHAHARD!"),
  gloves:new Items("Kevlar Gloves",0.5,"Tougher Gloves means harder hits"),
  batarang:new Items("Improved Batarang",0.2,"A new coating makes the Batarang deliver more damage")
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
Villain.prototype.strike = function (max, min) {
  this.health -= (Math.ceil(Math.random() * (max - min) + min))*addMods()
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
  healthElem.innerHTML = Math.ceil(villain.health)
  hitCounter.innerHTML = hits
  playerName.innerHTML = villain.name
  damage.style.width = villain.health+'%'
}
function reset() {
  villain.health = 100
  hits = 0
  villain.mods = []
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
     return '<div class="item">'+ this.name +': '+this.description +'</div>';
  }
}
function addMods(){
  var allMods= 1
  for(var i = 0; i<villain.mods.length; i++){
    allMods += villain.mods[i].modifier
}return allMods;
}

Joker["mods"] = []

function giveGas(){
  villain.mods.push(items.gas);
} 

function giveGloves(){
  villain.mods.push(items.gloves);
}

function giveBatarang(){
  villain.mods.push(items.batarang)
}
