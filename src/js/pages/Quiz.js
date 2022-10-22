import React, { useState } from 'react';
import questions from "../components/Questions"

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);


	const handleAnswerSubmit = (isCorrect, e) => {
		if (isCorrect) {
			setScore(score + 1);
			alert('correct');
		}

		if (isCorrect === true) {
			e.target.classList.add('correct')
			e.target.classList.remove('incorrect')
		} else {
			e.target.classList.add('incorrect')
			e.target.classList.remove('correct')
		}


		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
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
					<button onClick={() => (window.location.href = "/")}>
						Play again
					</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answer) => (
							<button
								/* className={colorClass ? "correct" : "incorrect"} */
								key={answer.answerOptions}
								onClick={(e) => handleAnswerSubmit(answer.isCorrect, e)}>
									{answer.answerText}
							</button>
						))}

						<button onClick={() => (window.location.href = "/quit")}>
							Quit
						</button>
						{/* <button onClick={(e) => nextQuestionButton()}>Next Question</button> */}
					</div>
				</>
			)}
		</div>
	);
}
