let nameChar = 'stan'
let health = 100
let energy = 100
let mood = 'Отличное'


function updateInfo() {
   let info = document.getElementById('info')
   info.innerHTML = `
   <p>
        <b>Имя: ${nameChar}</b>
    </p>

   <p>
        <b>Здоровье: ${health}</b>
    </p>
   <p>
        <b>Энергия: ${energy}</b>
    </p>
   <p>
        <b>Настроение: ${mood}</b>
    </p>
    `
}

function eat() {
    energy = energy + 10
    if (energy > 100) {
        energy = 100
    }
    updateInfo()
}

function sleepChar() {
    if (energy > 80) {
        return
    }
    energy = energy + 20
    health = health + 5
    if (health > 100) {
        health = 100
    }
    updateInfo()
}

function playGame() {
    energy = energy - 15
    if (energy < 0) {
        energy = 0 
    }
    mood = 'Супер'
    updateInfo()
}

function study() {
    if (energy < 20) {
        return
    }
    energy = energy - 20
    updateInfo()
}

updateInfo()

function sick() {
    health = health - 20
    if (health < 0) {
        health = 0
    }
    energy = energy - 15
    if (energy < 0) {
        energy = 0
    }
    updateInfo()
}

updateInfo()
