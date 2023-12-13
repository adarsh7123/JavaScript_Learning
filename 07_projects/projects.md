# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ikmppv?file=index.html)

# SolutionCode

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (val) {
    console.log(val);
    console.log(val.target);
    switch (val.target.id) {
      case 'violet':
        body.style.backgroundColor = val.target.id;
        break;
      case 'indigo':
        body.style.backgroundColor = val.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = val.target.id;
        break;
      case 'green':
        body.style.backgroundColor = val.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = val.target.id;
        break;
      case 'orange':
        body.style.backgroundColor = val.target.id;
        break;
      case 'red':
        body.style.backgroundColor = val.target.id;
        break;
      default:
        body.style.backgroundColor = 'white';
        break;
    }
  });
});

```

## project 2 solution

```javascript
const form = document.querySelector('#form');

from.addEventListener('submit', function (e) {
  e.preventDefault(); //submit nahi hoga

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let msg = '';
    if (bmi < 18.6) {
      msg = 'Under Weight';
    } else if (18.6 < bmi && bmi < 24.9) {
      msg = 'Normal';
    } else {
      msg = 'Over Weight';
    }

    results.innerHTML = `<span> ${bmi} <br> ${msg}</span>`;
  }
});



```

## project 3 solution code

```javascript
const time = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);




```

## project 4 Solution code


```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

//some variable to store
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); //set user input to disabled
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```


## project 5 solution 

```javascript

// console.log('Project 5');

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='key'>
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
<div>
  `;
});


```


## project 6 solution

```javascript

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[parseInt(Math.random() * 16)];
    // console.log(color);
  }
  return color;
};

// randomColor();
let intervalId;
const startChangingColor = () => {
  intervalId = setInterval(changeBgColor, 1000);

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```