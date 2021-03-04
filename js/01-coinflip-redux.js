let coinFlip;
let tryNum = parseInt(window.prompt('How many times you want to play?'))
for (let i = 0; i < tryNum; i++) {
    coinFlip = Math.round(Math.random());
    
    if (coinFlip == 0) {
        window.console.log('Heads');
    } else {
        window.console.log('Tails');
    }
    
}