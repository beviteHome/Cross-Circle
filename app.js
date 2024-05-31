let step = 'circle';
let turn = 'circle';
let spanWho = document.getElementById('spanWho')
let winner = ""

const who = () => {
    if (step == 'circle') {
        step = 'cross';
        spanWho.innerText = 'Крестики'
    } else {
        step = 'circle'
        spanWho.innerText = 'Нулики'
    }
}

who()

let blockItem = document.querySelectorAll('.blockItem')
let counter = 0;

let crossNumber = [];
let circleNumber = [];

blockItem.forEach((item) => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('circle') && !item.classList.contains('cross')) {
            item.classList.add(step)
            if (counter % 2 == 0) {
                item.innerText = 'X'
                crossNumber.unshift(item)
                if (crossNumber.length > 3) {
                    crossNumber[3].classList.remove('cross')
                    crossNumber[3].innerText = ' '
                    crossNumber[3].style.background = ''
                }
                if (crossNumber.length > 2) {
                    crossNumber[2].style.background = 'rgb(255, 0, 0)'

                }
            } if (counter % 2 !== 0) {
                item.innerText = 'O'
                circleNumber.unshift(item)
                if (circleNumber.length > 3) {
                    circleNumber[3].classList.remove('circle')
                    circleNumber[3].innerText = ''
                    circleNumber[3].style.background = ''
                }
                if (circleNumber.length > 2) {
                    circleNumber[2].style.background = 'rgb(0, 250, 0)'
                }
            }
            counter++
            console.log(counter)
            console.log(counter % 2 == 0)
            who()
            circleWin()
            crossWin()
        }
    })
})

let win =
    [
        [0, 1, 2],
        [0, 4, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]

let circleWin = () => {
    for (let i = 0; i < win.length; i++) {
        if (
            blockItem[win[i][0]].classList.contains('circle') &&
            blockItem[win[i][1]].classList.contains('circle') &&
            blockItem[win[i][2]].classList.contains('circle')
        ) {
            blockItem[win[i][0]].classList.add('winColor')
            blockItem[win[i][1]].classList.add('winColor')
            blockItem[win[i][2]].classList.add('winColor')

            winner = "Нулики"
            endGame(winner)
            return 1
        }
    }
}

let crossWin = () => {
    for (let i = 0; i < win.length; i++) {
        if (
            blockItem[win[i][0]].classList.contains('cross') &&
            blockItem[win[i][1]].classList.contains('cross') &&
            blockItem[win[i][2]].classList.contains('cross')
        ) {
            blockItem[win[i][0]].classList.add('winColor')
            blockItem[win[i][1]].classList.add('winColor')
            blockItem[win[i][2]].classList.add('winColor')
            winner = "Крестики"
            endGame(winner)
            return 1
        }
    }
}

let blockWinner = document.getElementById('blockWinner')
let spanWin = document.getElementById('spanWin')
let btnNewGame = document.getElementById('btnNewGame')

let blockArea = document.getElementById('blockArea')

let endGame = (winner) => {
    blockArea.style.pointerEvents = 'none';
    blockWinner.style.display = 'flex'
    spanWin.innerText = winner
    crossNumber[2].style.removeProperty("background")
    circleNumber[2].style.removeProperty("background")
}

btnNewGame.addEventListener('click', () => {
    document.location.reload()
})
