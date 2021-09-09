Math.floor(2.6);

// Casino Royal

const casinoGame = {
  double: function (number) {
    return number * 2;
  },
  dicRoll: function () {
    return Math.floor(Math.random() * 6 + 1);
    },
    highLow: function () {
        let value = Math.floor((Math.random() * 2) + 1);
        if (value === 2) {
            return "High";
        } else {
            return "Low";
        }
    },
    jackpot: function (number) {
        if (number <= 6) {            
            let dice = Math.floor((Math.random() * 6) + 1);
            console.log(dice);
            if (number === dice) {
                return "You won the Jackpot";
            } else {
                return "Better Luck Next time Amigo! :)"
            }
        }
    }
};
// console.log(casinoGame.double(6));
// console.log(casinoGame.dicRoll());
// console.log(casinoGame.highLow());
console.log(casinoGame.jackpot(2));
