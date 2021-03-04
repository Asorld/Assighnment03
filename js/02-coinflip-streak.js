let coinFlip;
let num = 0;
while (num < 10) {
    num++;
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        window.console.log ('Heads');
    }else {
        window.console.log ('Tails');
        break;
    }

}