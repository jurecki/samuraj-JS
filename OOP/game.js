// link do gry: https://websamuraj.pl/examples/js/gra/ 

import Wallet from './wallet.js';
import Statistics from './statistics.js';
import Draw from './draw.js';
import Result from './result.js';


class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById('start').addEventListener('click', this.startGame.bind(this))

        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGame = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLoses = document.querySelector('.score span.loss');

        this.render()
    }

    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), stats = [0, 0, 0], result = "", bid = 0, wonMoney = 0) {
        // console.log('gramy')

        this.spanWallet.textContent = money;

        if (result) {
            result = `Wygrałeś ${wonMoney} $.`;
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid} $.`
        }
        this.spanResult.textContent = result;

        this.spanGame.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLoses.textContent = stats[2];

        this.inputBid.value = "";

        this.boards.forEach((board, index) => board.style.backgroundColor = colors[index])

    }

    startGame() {
        console.log('start game')
        //czy bid >=1; 
        if (this.inputBid.value < 1) {
            return alert('Kwota która chcesz grać jest za mała')
        }

        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkCanPlay(bid)) {
            return alert('masz za mało środków')
        }

        this.wallet.changeWallet(bid, '-');

        this.draw = new Draw();

        const colors = this.draw.getDrawResult();

        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);

        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), this.stats.showGameStatistics(), win, bid, wonMoney);

    }
}

const game = new Game(200);

