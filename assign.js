let guessNum = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
    document.querySelector('.message').innerHTML = message;
};


document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    
    // Guess is Correct
     if (guess === guessNum) {
        displayMessage('Well Done Number is Correct!');
        document.querySelector('.number').innerHTML = guessNum;

        document.querySelector('body').style.backgroundColor = '#5cb99b';
        document.querySelector('.number').style.width = '20rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').innerHTML = highscore;
        }
    } 
         //  Guess is wrong
    else if (guess !== guessNum) {
        if (score > 1) {
            if (guess > guessNum) {
              displayMessage('📈 This number is high!');
            } else {
              displayMessage('📉 This number is low!');
            }
            score--;
            document.querySelector('.score').innerHTML = score;
        }
          
    }

});
// Again
    document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    highscore = 0;
    guessNum = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.number').innerHTML = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.highscore').innerHTML = 0;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '20rem';
});