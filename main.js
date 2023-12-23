let Text = document.getElementById('text')
let Restart = document.getElementById('reset')
let Square = Array.from(document.getElementsByClassName('square'))

const playerX = "X"
const playerO = "O"
let currentplayer = playerX
let spaces = Array(9).fill(null)

const startGame = () => {
    Square.forEach(square => square.addEventListener('click', Clicked))
}

function Clicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentplayer
        e.target.innerText = currentplayer

        if(playerHasWon() !==false){
            Text.innerHTML = `${currentplayer} has won!`
        }

        currentplayer = currentplayer == playerX ? playerO : playerX
    }
}

const combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of combos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

Restart.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    Square.forEach( square => {
        square.innerText = ''
        square.style.backgroundColor=''
    })

    playerText.innerHTML = 'Tic Tac Toe'

    currentplayer = playerX
}

startGame()