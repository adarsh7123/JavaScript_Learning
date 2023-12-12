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




```
