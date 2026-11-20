// To flip the coin
let coinResult = '';
let result = '';

let score = JSON.parse(localStorage.getItem('coinFlipScore'));

if (score === null) {
  score = {
    wins: 0,
    loses: 0
  }
}


function flipCoin()
{
  var img = document.getElementById('imageChange');
  img.src = 'images/giphy.gif';

  const randomNumber = Math.random();

  if (randomNumber < 0.5) {
    coinResult = 'head';
  } else {
    coinResult = 'tail';
  }

  // alert('Coin is flipping now \nChoose from head and tail');

}


// For head side
function coinSide(side)
{
  if (coinResult === side) {
    result = 'Win!';
  } else {
    result = 'Lose!';
  }


  if (result === 'Win!') {
    score.wins ++;
  } else if (result === 'Lose!') {
    score.loses ++;
  }



  if (coinResult === '') {
    alert('Please first toss the coin')
  } else {
    alert(`Coin shows ${coinResult} and you chose ${side} so \nYou ${result} \nWins: ${score.wins}, Loses: ${score.loses}`);
  }

  var img = document.getElementById('imageChange');
  img.src = 'images/front.png';

  // Save to local storage 
  localStorage.setItem('coinFlipScore',JSON.stringify(score));


  coinResult = '';
  result = '';
}


function resetButton() 
{
  score.wins = 0;
  score.loses = 0;
  localStorage.removeItem('coinFlipScore');
  alert('Score is reset');
}
