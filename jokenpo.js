const result = document.querySelector(".result")
const myscore = document.querySelector("#myscore")
const machinescore = document.querySelector("#machinescore")
const yourchoice = document.querySelector("#your-choice")
const machinechoice = document.querySelector("#machine-choice")
const textoresetar = document.querySelector("#mensagem-resetar")
const gamemodeselect = document.querySelector(".game-mode-select")
const selectbutton = document.querySelector("#select-button")
const container = document.querySelector(".container")
const container2 = document.querySelector(".container2")


let humanscorenumber = 0
let machinescorenumber = 0

const Game_options = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const traducao = {
    rock: 'Pedra',
    paper: 'Papel',
    scissors: 'Tesoura',
}

const playhuman = (humanchoice) => {


    playthegame(humanchoice, playmachine())

}

function Restart() {



    if (humanscorenumber === 0 && machinescorenumber === 0) {
        alert("a pontuação já está zerada")

    } else {

        humanscorenumber = 0
        machinescorenumber = 0

        myscore.innerHTML = humanscorenumber
        machinescore.innerHTML = machinescorenumber

        textoresetar.innerHTML = 'A partida foi resetada e todos os pontos foram zerados'
        textoresetar.style.display = "block"
        yourchoice.innerHTML = ""
        machinechoice.innerHTML = ""
        result.innerHTML = ""

        setTimeout(function () {

            textoresetar.innerHTML = ""
            textoresetar.style.display = "none"

        }, 5000);
    }


}

const playmachine = () => {

    const choices = [Game_options.ROCK, Game_options.PAPER, Game_options.SCISSORS]
    const RandomNumber = Math.floor(Math.random() * 3)

    return choices[RandomNumber]
}


const playthegame = (human, machine) => {

    console.log('humano: ' + human + ' maquina: ' + machine)


    if (human === machine) {

        result.innerHTML = "Deu empate"

    } else if (human === Game_options.PAPER && machine === Game_options.ROCK
        || human === Game_options.ROCK && machine === Game_options.SCISSORS
        || human === Game_options.SCISSORS && machine === Game_options.PAPER) {

        humanscorenumber++
        myscore.innerHTML = humanscorenumber
        result.innerHTML = "Você ganhou"

    }
    else {

        result.innerHTML = "Você perdeu"
        machinescorenumber++
        machinescore.innerHTML = machinescorenumber
    }

    if (human === Game_options.ROCK) {
        yourchoice.innerHTML = ('Você: ' + traducao.rock)
    } else if (human === Game_options.PAPER) {
        yourchoice.innerHTML = ('Você: ' + traducao.paper)
    } else if (human === Game_options.SCISSORS) {
        yourchoice.innerHTML = ('Você: ' + traducao.scissors)
    }

    if (machine === Game_options.ROCK) {
        machinechoice.innerHTML = ('Máquina: ' + traducao.rock)
    } else if (machine === Game_options.PAPER) {
        machinechoice.innerHTML = ('Máquina: ' + traducao.paper)
    } else if (machine === Game_options.SCISSORS) {
        machinechoice.innerHTML = ('Máquina: ' + traducao.scissors)
    }

}

selectbutton.addEventListener("click", changeGameMode);

function changeGameMode() {
    if (gamemodeselect.value === "jogarcontramaquina") {
        container.style.display = "flex";
        container2.style.display = "none";
        
        console.log("modo jogar contra máquina selecionado");
    } else if (gamemodeselect.value === "jogarcontralaguem") {
        container.style.display = "none";
        container2.style.display = "flex";
        
        console.log("modo jogar contra alguém offline selecionado");
    }
}
