const finalScoreElement = document.getElementById('final-score');
const saveScoreForm = document.getElementById('save-score-form');
const usernameElement = document.getElementById('username');

const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScoreElement.innerText = `Your score: ${mostRecentScore}`;

saveScoreForm.addEventListener('submit', e => {
    e.preventDefault();

    const username = usernameElement.value.trim();
    if (username) {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        const newScore = { score: mostRecentScore, name: username };
        highScores.push(newScore);
        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.href = 'highscores.html';
    }
});
