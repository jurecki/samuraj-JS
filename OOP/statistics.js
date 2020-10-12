class Statistics {
    constructor() {
        this.gameResults = [
        ];
    }

    addGameToStatistics = (win, bid) => {

        let gameResult = {
            win: win,
            bid: bid
        }
        this.gameResults.push(gameResult);
    }

    showGameStatistics = () => {
        let game = this.gameResults.length;
        // let wins = this.gameResults.filter(result => result.win).length
        // let losses = this.gameResults.filter(result => !result.win).length

        let wins = 0;
        let losses = 0;

        this.gameResults.forEach(game => game.win === true ? wins++ : losses++)

        return [game, wins, losses]
    }

}

export default Statistics;