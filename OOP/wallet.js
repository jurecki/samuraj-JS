class Wallet {
    constructor(money) {
        let _money = money;
        //pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money

        //sprawdzenie czy uzytkownik ma odpowiednia ilosc srodkow
        this.checkCanPlay = (value) => {
            if (_money >= value) return true;
            else return false
        }

        this.changeWallet = (value, type = "+") => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error('nieprawidlowy typ dzialania')
                }
            } else {
                console.log(typeof value)
                throw new Error('nieprawodlowa liczba')
            }
        }
    }


}


export default Wallet;