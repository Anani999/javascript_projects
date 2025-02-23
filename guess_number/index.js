
function randomNumber() {
    return Math.floor(Math.random() * 10);
}

let random_number = randomNumber();
console.log(random_number);

const guessedNumber = document.getElementById('gussedNumber');
const hint = document.getElementById('hint');
let restart = document.getElementById('restart');

restart.style.display = 'none';

function guessNumber() {
    hint.innerHTML = '';
    const user_guess_number = Number(guessedNumber.value);


    if(user_guess_number === random_number){
        hint.innerHTML = `Congrat's Your Guess is Correct ! , it's : ${random_number}`;
        restart.style.display = 'block';
    }else if(user_guess_number > random_number){
        hint.innerHTML = `Your guess is High`;
    }else if(user_guess_number < random_number){
        hint.innerHTML = `Your guess is Low`;
    }
}

function resetRandom() {
    random_number = randomNumber();
    restart.style.display = 'none';
    hint.innerHTML = '';
    guessedNumber.value = null;
}