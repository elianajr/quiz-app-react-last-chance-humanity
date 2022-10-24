import React, { useState } from 'react';
import questions from "../components/Questions"

export default function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
	const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [score, setScore] = useState(0);

    const handleAnswerSubmit = (isCorrect, index) => {
		setSelectedOptionIndex(index);
        if (isCorrect) {
            setScore(score + 1);
        }

        setShowAnswer(true);

        const nextQuestion = currentQuestion + 1;
        setShowScore(nextQuestion > questions.length);
    };

    const nextQuestionButton = () => {
		setSelectedOptionIndex(null);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setShowAnswer(false);
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    <span>
                        You scored {score} out of {questions.length}
                    </span>
                    <button className='button-quit-play' onClick={() => (window.location.href = "/quiz")}>
                        Play again
                    </button>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <h2>Last Chance for Humanity Quizz</h2>
                            <span>Question {currentQuestion + 1} of {questions.length}</span>
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answer, index) => (
                            <button
								type="button"
                                key={answer.answerOptions}
                                className={showAnswer && (selectedOptionIndex === index || answer.isCorrect) ? (answer.isCorrect ? 'correct' : 'incorrect') : ''}
                                disabled={showAnswer}
                                onClick={() => handleAnswerSubmit(answer.isCorrect, index)}>
                                    {answer.answerText}
                            </button>
                        ))}

                        <div className='bottom-buttons-section'>
                            <button className='button-quit-play' onClick={() => (window.location.href = "/quit")}>
                                Quit
                            </button>
                            <button
                                className='button-next-question'
                                onClick={() => nextQuestionButton()}
                                disabled={!showAnswer}>
                                    Next Question
                            </button>
                        </div>

                        <h4>
                            * Think twice! You just have one chance to answer and you need to answer every question to jump to the next one.
                        </h4>
                    </div>
                </>
            )}
        </div>
    );
}