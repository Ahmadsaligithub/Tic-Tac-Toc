console.log('tic tac toe');

let audioTing = new Audio('ting.mp3');
let music = new Audio('music.mp3')
let gameover = new Audio('gameover.mp3')
let turn = 'X';
let isgameover = false

//function change 'X' ->'0'
const changeTurn = () => {
    

    if (turn === 'X') {
        return '0'
    }
    else {
        return 'X'
    }
}

//function to check win
const checkWin = () => {
    let box = document.getElementsByClassName('box')
    let wins = [
        [0, 1, 2, 5, 5, 0], //x=5,y=15,degree rotate=90
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach((e) => {
        if ((box[e[0]].innerText === box[e[1]].innerText) && (box[e[1]].innerText === box[e[2]].innerText) && (box[e[0]].innerText !== '')) {
            document.querySelector('.Info').innerText = box[e[0]].innerText + ' has won'
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '150px'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = '20vw'
        }
    })
}


//Game Logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {

    element.addEventListener('click', () => {
        if (element.innerText === '') {  
            element.innerText = turn    
            turn = changeTurn();  
            audioTing.play();
            checkWin();
            if (!isgameover) {
                let Info = document.getElementsByClassName('Info')[0].innerText = 'Turn For ' + turn
            }
        }
    })
})

//reset button
let Reset = document.getElementById('Reset')
Reset.addEventListener('click', () => {
    let AllBoxes = document.getElementsByClassName('box')
    Array.from(AllBoxes).forEach(e => {
        e.innerText = ''
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
        turn = 'X';
        isgameover=false
        let Info = document.getElementsByClassName('Info')[0].innerText = 'Turn For ' + turn
        
        document.querySelector('.line').style.width = '0vw'

    })
    
})

