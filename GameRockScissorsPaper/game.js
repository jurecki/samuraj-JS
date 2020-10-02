// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: null,
    aiHand: null,
    playerHandHTML: "",
}

const options = document.querySelectorAll('.select img')
const btnStartGame = document.querySelector('button')

const optionSelection = function (e) {
    e.preventDefault();
    // console.log(this);
    clearOption();
    this.classList.add('active')
    // game.playerHand = this.getAttribute('data-option')
    game.playerHand = this.dataset.option;
    // console.log(game.playerHand);

}

options.forEach(option => {
    option.addEventListener('click', optionSelection)
})

function computerChoise() {
    const options = ['papier', 'kamien', 'nozyczki'];
    const aiHand = options[Math.floor(Math.random() * options.length)];

    return aiHand
}

function clearOption() {
    options.forEach(option => option.classList.remove('active'))
}

function checkResult(player, ai) {
    // console.log(player, ai)
    if (player == ai) {
        return 'draw'
    } else if (
        (player === 'papier' && ai === 'kamien') ||
        (player === 'kamien' && ai === 'nozyczki') ||
        (player === 'nozyczki' && ai === 'papier')
    ) {
        return 'win'
    } else {
        return 'loss'
    }
}


function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;


    gameSummary.numbers++;

    document.querySelector('p.numbers span').textContent = gameSummary.numbers


    if (result == 'win') {
        gameSummary.wins++;
        document.querySelector('[data-summary="who-win"]').textContent = 'Wygrałeś';
        document.querySelector('p.wins span').textContent = gameSummary.wins
    } else if (result == 'loss') {
        gameSummary.losses++;
        document.querySelector('[data-summary="who-win"]').textContent = 'Przegrałeś';
        document.querySelector('p.losses span').textContent = gameSummary.losses
    } else {
        gameSummary.draws++;
        document.querySelector('[data-summary="who-win"]').textContent = 'REMIS';
        document.querySelector('p.draws span').textContent = gameSummary.draws
    }

    clearOption()
}

function gameInit() {
    if (!game.playerHand) {
        return alert('Wybierz dłoń')
    }

    game.aiHand = computerChoise()

    const gameResult = checkResult(game.playerHand, game.aiHand)


    publishResult(game.playerHand, game.aiHand, gameResult)
}

btnStartGame.addEventListener('click', gameInit)