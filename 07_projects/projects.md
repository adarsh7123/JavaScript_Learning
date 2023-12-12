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
