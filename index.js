let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let currentGame = 1

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    if (count > 0) {
        count -= 1
    }
    countEl.textContent = count
}

function save() {
    let countStr = `<li><span>Game ${currentGame}</span>: ${count} Points</li><br/>`
    saveEl.innerHTML += countStr
    countEl.textContent = 0
    count = 0
    currentGame++;
}

function reset() {
    count = 0;
    countEl.textContent = 0;
    saveEl.textContent = "Previous Games:";
    currentGame = 1;
}
