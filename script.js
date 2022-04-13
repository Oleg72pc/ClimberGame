const climber = document.querySelector('.climber');
const points = document.querySelectorAll('.point');
let positionClimber = 0;
const flag = document.querySelector('#flag');
let scoreInPlay = 0;
let inputName = prompt('Как тебя зовут?', '');
let namePlayer = document.querySelector('#nameOut')
namePlayer.innerHTML = inputName;
let score = document.querySelector('#scoreInPlay')



window.addEventListener('keydown', event => {
  event.preventDefault();
  if ((event.key === 'd' || event.key === 'в') && positionClimber < points.length - 1) {
    positionClimber++;
    points[positionClimber].appendChild(climber);
  } else if ((event.key === 'a' || event.key === 'ф') && positionClimber > 0) {
    positionClimber--;
    points[positionClimber].appendChild(climber);
  }
  if (positionClimber >= 9) {
    flag.style.opacity = 100;
  } else flag.style.opacity = 0;
  scoreInPlay = positionClimber * 100
  score.innerHTML = scoreInPlay;
});
