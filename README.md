# DSA Quiz Master

An interactive JavaScript application for testing Data Structures and Algorithms knowledge with instant feedback, dynamic scoring, and comprehensive performance analytics.

## Features

### 🎯 Core Functionality
- **Dynamic Question Loading**: Questions are randomly selected from a comprehensive DSA question bank
- **Instant Feedback**: Immediate response after each answer with detailed explanations
- **Real-time Scoring**: Live score updates and accuracy tracking
- **Performance Analytics**: Detailed breakdown by category and difficulty level

### 📚 Question Categories
- Arrays
- Linked Lists
- Stacks & Queues
- Trees & Binary Search Trees
- Graphs
- Sorting Algorithms
- Hash Tables
- Dynamic Programming
- Recursion
- Big O Notation
- Heaps
- Binary Search

### 🎨 User Experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Loading States**: Visual feedback during question transitions
- **Progress Tracking**: Clear indication of quiz progress and performance

### 📊 Analytics & Review
- **Score Breakdown**: Performance analysis by category and difficulty
- **Time Tracking**: Monitor time spent on questions
- **Answer Review**: Detailed review of all answers with explanations
- **Accuracy Metrics**: Real-time accuracy percentage calculation

## Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox/grid, animations, and responsive design
- **JavaScript**: modular class-based architecture

### Key Components
- **DSAQuiz Class**: Main application controller
- **Question Database**: Comprehensive collection of DSA questions
- **Dynamic UI Updates**: Real-time DOM manipulation
- **State Management**: Efficient tracking of quiz state and user progress

## File Structure

```
/workspace/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── app.js             # Main application logic and quiz controller
├── questions.js       # DSA questions database and utilities
├── server.js          # Simple HTTP server for serving the application
├── package.json       # Project configuration
└── README.md          # This documentation
```

## Getting Started

### Prerequisites
- Node.js (for running the local server)
- Modern web browser

### Installation & Running

1. **Clone or download the project files**

2. **Start the server**:
   ```bash
   npm start
   # or
   node server.js
   ```

3. **Access the application**:
   - Local: `http://localhost:12000`
   
## How to Use

1. **Start Quiz**: The application automatically loads with the first question
2. **Answer Questions**: Click on your chosen answer option
3. **Submit**: Click "Submit Answer" to see instant feedback
4. **Review Feedback**: Read the explanation for better understanding
5. **Continue**: Click "Next Question" to proceed
6. **View Results**: After completing all questions, see detailed performance analytics
7. **Review or Restart**: Choose to review answers or start a new quiz

## Question Format

Each question includes:
- **Category**: The DSA topic (e.g., Arrays, Trees, Algorithms)
- **Difficulty**: Easy, Medium, or Hard
- **Question Text**: Clear, concise problem statement
- **Code Examples**: When relevant, code snippets are provided
- **Multiple Choice Options**: 4 options with clear explanations
- **Detailed Explanation**: Comprehensive explanation of the correct answer

###Output
![image](https://github.com/user-attachments/assets/574bf01d-0a11-4ff7-8dc3-05bb9609a74b)

