# Quiz Game

A web-based quiz game built with HTML, CSS, and JavaScript. The game fetches random general knowledge questions from the Open Trivia Database API and presents them to the user. Users can answer the questions, see their final score, and save their score with a username.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetches random general knowledge questions from the Open Trivia Database API.
- Presents multiple-choice questions to the user.
- Automatically advances to the next question after an answer is selected.
- Displays the final score at the end of the quiz.
- Allows users to save their score with a username.
- Users can view saved high scores.

## Setup

### Prerequisites

- Web browser (e.g., Chrome, Firefox, Safari)

### Installation

1. Clone the repository:

    ```shell
    git clone https://github.com/EstebanEscobar99/basic-quiz-app.git
    ```

2. Navigate to the project directory:

    ```shell
    cd basic-quiz-app
    ```

## Usage

1. Open the `index.html` file in your web browser. 
2. Click the "Start" button to begin the quiz. 
3. Answer the questions presented. 
4. After completing the quiz, view your score and save it with a username. 
5. Navigate back to the home page or start a new game.

## File Structure

```graphql
basic-quiz-app/
├── index.html
├── game.html
├── results.html
├── highscores.html
├── styles/
│   ├── main.css
│   ├── game.css
│   ├── highscores.css
│   └── results.css
├── scripts/
│   ├── game.js
│   ├── highscores.js
│   └── results.js
└── README.md
```

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature-name).
5. Open a pull request.

Please ensure your code adheres to the existing style guidelines and passes all linting and testing checks.

## License

This project is not licensed.
