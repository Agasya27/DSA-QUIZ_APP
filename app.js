class DSAQuiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.answered = false;
        this.userAnswers = [];
        this.startTime = null;
        
        this.initializeElements();
        this.initializeQuiz();
        this.bindEvents();
    }

    initializeElements() {
        // Score elements
        this.scoreElement = document.getElementById('score');
        this.questionNumberElement = document.getElementById('questionNumber');
        this.totalQuestionsElement = document.getElementById('totalQuestions');
        this.accuracyElement = document.getElementById('accuracy');

        // Question elements
        this.difficultyElement = document.getElementById('difficulty');
        this.categoryElement = document.getElementById('category');
        this.questionTextElement = document.getElementById('questionText');
        this.codeBlockElement = document.getElementById('codeBlock');
        this.codeContentElement = document.getElementById('codeContent');
        this.optionsContainer = document.getElementById('optionsContainer');

        // Feedback elements
        this.feedbackContainer = document.getElementById('feedbackContainer');
        this.feedbackIcon = document.getElementById('feedbackIcon');
        this.feedbackText = document.getElementById('feedbackText');
        this.explanationElement = document.getElementById('explanation');

        // Button elements
        this.submitBtn = document.getElementById('submitBtn');
        this.nextBtn = document.getElementById('nextBtn');

        // Container elements
        this.quizContainer = document.getElementById('quizContainer');
        this.resultsContainer = document.getElementById('resultsContainer');
        this.loadingOverlay = document.getElementById('loadingOverlay');

        // Results elements
        this.finalScoreElement = document.getElementById('finalScore');
        this.finalTotalElement = document.getElementById('finalTotal');
        this.finalAccuracyElement = document.getElementById('finalAccuracy');
        this.breakdownGrid = document.getElementById('breakdownGrid');
        this.restartBtn = document.getElementById('restartBtn');
        this.reviewBtn = document.getElementById('reviewBtn');
    }

    bindEvents() {
        this.submitBtn.addEventListener('click', () => this.submitAnswer());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.reviewBtn.addEventListener('click', () => this.reviewAnswers());
    }

    initializeQuiz() {
        this.questions = getRandomQuestions(10);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.startTime = new Date();
        
        this.totalQuestionsElement.textContent = this.questions.length;
        this.hideLoading();
        this.loadQuestion();
    }

    loadQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
            return;
        }

        this.showLoading();
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            const question = this.questions[this.currentQuestionIndex];
            this.displayQuestion(question);
            this.resetQuestionState();
            this.hideLoading();
        }, 500);
    }

    displayQuestion(question) {
        // Update question info
        this.questionNumberElement.textContent = this.currentQuestionIndex + 1;
        this.difficultyElement.textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
        this.difficultyElement.className = `difficulty-badge ${question.difficulty}`;
        this.categoryElement.textContent = question.category;
        this.questionTextElement.textContent = question.question;

        // Show code block if present
        if (question.code) {
            this.codeContentElement.textContent = question.code;
            this.codeBlockElement.style.display = 'block';
        } else {
            this.codeBlockElement.style.display = 'none';
        }

        // Display options
        this.displayOptions(question.options);
        
        // Update score display
        this.updateScoreDisplay();
    }

    displayOptions(options) {
        this.optionsContainer.innerHTML = '';
        
        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = index;
            
            optionElement.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            `;
            
            optionElement.addEventListener('click', () => this.selectOption(index));
            this.optionsContainer.appendChild(optionElement);
        });
    }

    selectOption(index) {
        if (this.answered) return;

        // Remove previous selection
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        
        // Add selection to clicked option
        const selectedOption = document.querySelector(`[data-index="${index}"]`);
        selectedOption.classList.add('selected');
        
        this.selectedAnswer = index;
        this.submitBtn.disabled = false;
    }

    submitAnswer() {
        if (this.selectedAnswer === null || this.answered) return;

        this.answered = true;
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = this.selectedAnswer === question.correctAnswer;
        
        // Store user answer
        this.userAnswers.push({
            question: question,
            userAnswer: this.selectedAnswer,
            correct: isCorrect,
            timeSpent: new Date() - this.startTime
        });

        if (isCorrect) {
            this.score++;
        }

        this.showFeedback(isCorrect, question);
        this.highlightAnswers(question.correctAnswer);
        
        this.submitBtn.style.display = 'none';
        this.nextBtn.style.display = 'inline-block';
        
        this.updateScoreDisplay();
    }

    showFeedback(isCorrect, question) {
        this.feedbackContainer.style.display = 'block';
        this.feedbackContainer.className = `feedback-container ${isCorrect ? 'correct' : 'incorrect'}`;
        
        this.feedbackIcon.className = `feedback-icon ${isCorrect ? 'correct' : 'incorrect'}`;
        this.feedbackText.className = `feedback-text ${isCorrect ? 'correct' : 'incorrect'}`;
        this.feedbackText.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
        
        this.explanationElement.textContent = question.explanation;
    }

    highlightAnswers(correctIndex) {
        document.querySelectorAll('.option').forEach((option, index) => {
            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === this.selectedAnswer && index !== correctIndex) {
                option.classList.add('incorrect');
            }
        });
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.loadQuestion();
    }

    resetQuestionState() {
        this.selectedAnswer = null;
        this.answered = false;
        this.submitBtn.disabled = true;
        this.submitBtn.style.display = 'inline-block';
        this.nextBtn.style.display = 'none';
        this.feedbackContainer.style.display = 'none';
        this.startTime = new Date();
    }

    updateScoreDisplay() {
        this.scoreElement.textContent = this.score;
        const accuracy = this.currentQuestionIndex > 0 ? 
            Math.round((this.score / (this.currentQuestionIndex + (this.answered ? 1 : 0))) * 100) : 0;
        this.accuracyElement.textContent = `${accuracy}%`;
    }

    showResults() {
        this.quizContainer.style.display = 'none';
        this.resultsContainer.style.display = 'block';
        
        const totalQuestions = this.questions.length;
        const accuracy = Math.round((this.score / totalQuestions) * 100);
        
        this.finalScoreElement.textContent = this.score;
        this.finalTotalElement.textContent = totalQuestions;
        this.finalAccuracyElement.textContent = `${accuracy}%`;
        
        this.displayPerformanceBreakdown();
    }

    displayPerformanceBreakdown() {
        const categories = {};
        const difficulties = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } };
        
        this.userAnswers.forEach(answer => {
            const category = answer.question.category;
            const difficulty = answer.question.difficulty;
            
            // Count by category
            if (!categories[category]) {
                categories[category] = { correct: 0, total: 0 };
            }
            categories[category].total++;
            if (answer.correct) categories[category].correct++;
            
            // Count by difficulty
            difficulties[difficulty].total++;
            if (answer.correct) difficulties[difficulty].correct++;
        });
        
        this.breakdownGrid.innerHTML = '';
        
        // Add category breakdown
        Object.entries(categories).forEach(([category, stats]) => {
            const accuracy = Math.round((stats.correct / stats.total) * 100);
            this.addBreakdownItem(category, `${stats.correct}/${stats.total} (${accuracy}%)`);
        });
        
        // Add difficulty breakdown
        Object.entries(difficulties).forEach(([difficulty, stats]) => {
            if (stats.total > 0) {
                const accuracy = Math.round((stats.correct / stats.total) * 100);
                this.addBreakdownItem(
                    `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Questions`, 
                    `${stats.correct}/${stats.total} (${accuracy}%)`
                );
            }
        });
        
        // Add total time (approximate)
        const totalTime = Math.round(this.userAnswers.reduce((sum, answer) => sum + (answer.timeSpent || 0), 0) / 1000);
        this.addBreakdownItem('Total Time', `${totalTime} seconds`);
    }

    addBreakdownItem(label, value) {
        const item = document.createElement('div');
        item.className = 'breakdown-item';
        item.innerHTML = `
            <div class="breakdown-label">${label}</div>
            <div class="breakdown-value">${value}</div>
        `;
        this.breakdownGrid.appendChild(item);
    }

    restartQuiz() {
        this.resultsContainer.style.display = 'none';
        this.quizContainer.style.display = 'block';
        this.initializeQuiz();
    }

    reviewAnswers() {
        // Simple review implementation - could be expanded
        let reviewContent = "Quiz Review:\n\n";
        this.userAnswers.forEach((answer, index) => {
            const status = answer.correct ? "✓ Correct" : "✗ Incorrect";
            reviewContent += `${index + 1}. ${answer.question.question}\n`;
            reviewContent += `Your answer: ${answer.question.options[answer.userAnswer]}\n`;
            reviewContent += `Correct answer: ${answer.question.options[answer.question.correctAnswer]}\n`;
            reviewContent += `Status: ${status}\n\n`;
        });
        
        // Create a simple modal or new page for review
        const reviewWindow = window.open('', '_blank');
        reviewWindow.document.write(`
            <html>
                <head><title>Quiz Review</title></head>
                <body style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
                    <h1>DSA Quiz Review</h1>
                    <pre style="white-space: pre-wrap;">${reviewContent}</pre>
                    <button onclick="window.close()" style="padding: 10px 20px; margin-top: 20px;">Close</button>
                </body>
            </html>
        `);
    }

    showLoading() {
        this.loadingOverlay.style.display = 'flex';
    }

    hideLoading() {
        this.loadingOverlay.style.display = 'none';
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new DSAQuiz();
});