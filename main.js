const scoreDisplay = document.getElementById('score')
const width = 28
let score = 0
const grid = document.querySelector('.grid')
const squares = []

const layout = [

    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]  

// array om te visualiseren hoe het eruit ziet

// 0 = point
// 1 = border
// 2 = evil cat 
// 3 = power pellet
// 4 = niks

// functie om het spelbord te maken

function createBoard() {

    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        square.id = i
        grid.appendChild(square)
        squares.push(square)


        if (layout[i] === 0) {
            squares[i].classList.add('point')
        }
        if (layout[i] === 1) {
            squares[i].classList.add('border')
        }
        if (layout[i] === 2) {
            squares[i].classList.add('evil-cat')
        }
        if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        }

        
    }

}
    
createBoard()

// pac cat maken

let pacCatCurrentIndex = 490
squares[pacCatCurrentIndex].classList.add('maincat')

// movement voor het spel

function moveMainCat(event) {
    squares[pacCatCurrentIndex].classList.remove('maincat')  // vers beginnen, anders laat je letterlijk een spoor van oude maincats achter
    switch (event.key) {


        case 'ArrowUp':
            
        if (
            pacCatCurrentIndex - width >= 0 &&
            !squares[pacCatCurrentIndex -width].classList.contains('border') &&
            !squares[pacCatCurrentIndex -width].classList.contains('evil-cat')
        ) {
            pacCatCurrentIndex -=28 // 1 lijn is 28 hokjes, want heel het bord is 28 x 28 dus om 1 lijn omhoog te gaan moet je 28 hokjes terug
        }

        break

        case 'ArrowLeft': 
            
            if (
                pacCatCurrentIndex % width !==0 &&
                !squares[pacCatCurrentIndex -1].classList.contains('border') &&
                !squares[pacCatCurrentIndex -1].classList.contains('evil-cat')
            ) {
                pacCatCurrentIndex -=1
            }

            if (squares[pacCatCurrentIndex -1] === squares[363]) {
                pacCatCurrentIndex = 391 // in pacman kan je door middel van een specifieke ?pijp? naar de andere kant van de map gaan, dit is de code daarvoor
            }
            break

        

            case 'ArrowDown':
                if
                (
                    pacCatCurrentIndex + width < width * width &&
                    !squares[pacCatCurrentIndex +width].classList.contains('border') &&
                    !squares[pacCatCurrentIndex +width].classList.contains('evil-cat')
                ) {
                    pacCatCurrentIndex +=28
                }
                break

        case 'ArrowRight':
            if (
                pacCatCurrentIndex % width < width -1 &&
                !squares[pacCatCurrentIndex +1].classList.contains('border') &&
                !squares[pacCatCurrentIndex +1].classList.contains('evil-cat')
            ) {
                pacCatCurrentIndex +=1
            }

            if (squares[pacCatCurrentIndex +1] === squares[392]) {
                pacCatCurrentIndex = 364
            }

            break

        

    }
    squares[pacCatCurrentIndex].classList.add('maincat')

    pointEaten()
    powerPelletEaten()
    checkWin()
    checkLose()


}

document.addEventListener('keyup', moveMainCat)

function pointEaten() {
    if (squares[pacCatCurrentIndex].classList.contains('point')) {
        score++
        scoreDisplay.innerHTML = score
        squares[pacCatCurrentIndex].classList.remove('point')
    }
}   

function powerPelletEaten() {
    if (squares[pacCatCurrentIndex].classList.contains('power-pellet')) {
        score += 10
        scoreDisplay.innerHTML = score
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(unScareGhosts, 10000)
        squares[pacCatCurrentIndex].classList.remove('power-pellet')
    }
}

//functie om de ghosts bang te maken

function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
}



//hor ik de ghosts maak
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.isScared = false
        this.currentIndex = startIndex
        this.timerId = NaN
   
    }
}


//de ghosts

const ghosts = [ 
    new Ghost('cat1', 348, 250),
    new Ghost('cat2', 376, 200),
    new Ghost('cat3', 351, 300),
    new Ghost('cat4', 379, 450),

]

console.log(ghosts)

//de cats op het borrd zetten
ghosts.forEach(ghost => 
    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost'))
    



ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
    const directions = [-1, 1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {

        if ( 

            !squares[ghost.currentIndex + direction].classList.contains('ghost') &&
            !squares[ghost.currentIndex + direction].classList.contains('border')
        ) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost' , 'scared-ghost')
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        } else direction = directions[Math.floor(Math.random() * directions.length)]

        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }

        // als de ghosts bang zijn

        if (ghost.isScared && squares[ghost.currentIndex].classList.contains('maincat')) {
            ghost.isScared = false
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex = ghost.startIndex
            score +=100
            scoreDisplay.innerHTML = score
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }

        
        
    }, ghost.speed) 
    }

    function checkLose() {
        if (
            squares[pacCatCurrentIndex].classList.contains('ghost') &&
            !squares[pacCatCurrentIndex].classList.contains('scared-ghost')
        ) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', moveMainCat)
            setTimeout(function() { alert('oei, je bent geklaard.')}, 500)
        }
    }

    function checkWin() {
        if (score === 300) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', moveMainCat)
            setTimeout(function() { alert('gg ez')}, 500)
        }
    }
