const questions = [
    {
        question: "What happens when your brain fully rots?",
        answers: ["You become a meme", "You ascend", "You turn into a Discord mod", "Nothing, it's already rotted"],
        correct: 2
    },
    {
        question: "Which of these is NOT a symptom of brain rot?",
        answers: ["Doomscrolling", "Watching reality TV", "Touching grass", "Arguing in TikTok comments"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const scoreText = document.getElementById("score");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreText.innerText = "Score: 0";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(index, button));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    answerButtons.innerHTML = "";
}

function selectAnswer(index, button) {
    let correctIndex = questions[currentQuestionIndex].correct;
    let isCorrect = index === correctIndex;

    // Disable all buttons
    document.querySelectorAll(".btn").forEach(btn => btn.disabled = true);

    // Add animation class based on correctness
    button.classList.add(isCorrect ? "correct" : "wrong");

    if (isCorrect) {
        score++;
        scoreText.innerText = `Score: ${score}`;
    }

    // Wait 1 second, then load next question
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endGame();
        }
    }, 1000);
}

function endGame() {
    questionText.innerText = `Game Over! Your Brain Rot Level: ${score}`;
    resetState();
    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", startQuiz);
    answerButtons.appendChild(restartButton);
}

startQuiz();
