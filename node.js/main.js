/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;


document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value); */
document.querySelector('.btnagain').textContent;

let score = 20;
highscore = 0;
let number = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.btncheck').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.fontSize = '30px';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'blue';
    } else {
      document.querySelector('.message').textContent = 'You lost mehnn..';
    }
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Too Low!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'yellow';
  }
});
document.querySelector('.btnagain').addEventListener('click', function () {
  score = 20;

  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'greenyellow';
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.guess').value = '';
});
