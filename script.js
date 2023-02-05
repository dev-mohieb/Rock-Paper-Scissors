const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const pcScoreEl = document.getElementById("pc-score")
const pcChoice = document.getElementById("pc-choice")
const playerNameEl = document.getElementById("player-name")
const playerScoreEl = document.getElementById("player-score")
const playerChoice = document.getElementById("player-choice")
const playArea = document.querySelector(".play-area")
const statusEl = document.getElementById("status-el")
const vsEl = document.getElementById("vs-el")
const startGameBtn = document.getElementById("start-game-btn")
const nameInput = document.getElementById("name-el")
const rockSymbol = '<i class="fa-solid fa-hand-back-fist"></i>'
const paperSymbol = '<i class="fa-solid fa-hand"></i>'
const scissorsSymbol = '<i class="fa-solid fa-hand-scissors"></i>'
const array = [rockSymbol,paperSymbol,scissorsSymbol]

let pcScore = 0
let playerScore = 0
let playerWin = false
let pcWin = false
let playerName = 'PLAYER 1'

rockBtn.disabled = true
paperBtn.disabled = true
scissorsBtn.disabled = true

startGameBtn.addEventListener("click", () => {
    if (nameInput.value){
        playerName = nameInput.value.toUpperCase()
        } else {
        playerName = 'PLAYER'}
    
    playerNameEl.textContent = playerName
    nameInput.classList.add("hidden")
    startGameBtn.classList.add("hidden")
    vsEl.textContent = 'VS'
    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorsBtn.disabled = false
    playerScoreEl.textContent = 0
    pcScoreEl.textContent = 0
})

function renderGame() {
    playerScoreEl.textContent = 0
    pcScoreEl.textContent = 0

    if (playerChoice.innerHTML == rockSymbol &&
        pcChoice.innerHTML == scissorsSymbol) {
            playerScore++
        } else if (playerChoice.innerHTML == paperSymbol &&
            pcChoice.innerHTML == rockSymbol) {
                playerScore++
        } else if (playerChoice.innerHTML == scissorsSymbol &&
            pcChoice.innerHTML == paperSymbol) {
                playerScore++
        } else if (pcChoice.innerHTML == rockSymbol &&
            playerChoice.innerHTML == scissorsSymbol) {
                pcScore++
        } else if (pcChoice.innerHTML == paperSymbol &&
            playerChoice.innerHTML == rockSymbol) {
                pcScore++
        } else if (pcChoice.innerHTML == scissorsSymbol &&
            playerChoice.innerHTML == paperSymbol) {
                pcScore++
            }

    renderScore()
}

function renderScore() {
    playerScoreEl.textContent = playerScore
    pcScoreEl.textContent = pcScore
    checkWinner()
}

function checkWinner() {
    if (playerScore == 5) {
        vsEl.textContent = `${playerName} WON!`
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorsBtn.disabled = true
        pcWin = false
        playerWin = true
        reset()

    } else if (pcScore == 5) {
        vsEl.textContent = `A.I WON!`
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorsBtn.disabled = true
        pcWin = true
        playerWin = false
        reset()
    }
}

function reset() {
    playerScore = 0
    pcScore = 0
    pcChoice.innerHTML = ""
    playerChoice.innerHTML = ""
    startGameBtn.classList.remove("hidden")
    startGameBtn.textContent = `Play Again`
}


rockBtn.addEventListener("click", () => {
    playerChoice.innerHTML = `${rockSymbol}`
    pcChoice.innerHTML = `${array[Math.floor(Math.random() * 3)]}`
        renderGame()

})
paperBtn.addEventListener("click", () => {
    playerChoice.innerHTML = `${paperSymbol}`
    pcChoice.innerHTML = `${array[Math.floor(Math.random() * 3)]}`
        renderGame()

})
scissorsBtn.addEventListener("click", () => {
    playerChoice.innerHTML = `${scissorsSymbol}`
    
    pcChoice.innerHTML = `${array[Math.floor(Math.random() * 3)]}`
    renderGame()
})
