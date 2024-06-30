const highscoresList = document.getElementById('highscores-list');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScores.forEach(score => {
    const li = document.createElement('li');
    li.innerText = `${score.name} - ${score.score}`;
    highscoresList.appendChild(li);
});
