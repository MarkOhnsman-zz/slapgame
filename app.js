var Joker = new Villian('Joker', 100, 0, 5, 5, 10, 10, 15)
var villian = Joker
var hits = 0


function Villian(name, health, pLow, pHigh, kLow, kHigh, sLow, sHigh) {
  this.name = name
  this.health = health
  this.attacks = {
    punch: { pLow: pLow, pHigh: pHigh },
    kick: { kLow: kLow, kHigh: kHigh },
    special: { sLow: sLow, sHigh: sHigh },
  }
}
function onPunch() {
  villian.strike(villian.attacks.punch.pLow, villian.attacks.punch.pHigh);
  document.getElementById('pow').className = ""
  setTimeout(function () {
    document.getElementById('pow').className = "hidden"
  }, 1000)
  hits += 1
  update()
  return health

}
function onKick() {
  villian.strike(villian.attacks.kick.kLow, villian.attacks.kick.kHigh);
  document.getElementById('pow').className = ""
  setTimeout(function () {
    document.getElementById('pow').className = "hidden"
  }, 1000)
  hits += 1
  update()
  return health
}

function onSpecial() {
  villian.strike(villian.attacks.special.sLow, villian.attacks.special.sHigh);
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
  var playerName = document.getElementById('villian')
  var damage = document.getElementById("damage")
  if (villian.health <= 0) {
    villian.health = 0
  }
  healthElem.innerHTML = villian.health
  hitCounter.innerHTML = hits
  playerName.innerHTML = villian.name
  damage.style.width = villian.health+'%'
}
function reset() {
  villian.health = 100
  hits = 0
  update()
}

function Villian(name, health, pLow, pHigh, kLow, kHigh, sLow, sHigh) {
  this.name = name
  this.health = health
  this.attacks = {
    punch: { pLow: pLow, pHigh: pHigh },
    kick: { kLow: kLow, kHigh: kHigh },
    special: { sLow: sLow, sHigh: sHigh },
  }
}

Villian.prototype.strike = function (max, min) {
  this.health -= Math.ceil(Math.random() * (max - min) + min)
  return this.health
}

var healthMeter = {
    x: 20,
    y: 30,
    width: 300,
    height: 20
};
