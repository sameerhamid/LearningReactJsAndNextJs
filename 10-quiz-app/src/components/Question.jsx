import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions";
import Answers from "./Answers";

function Question({
    onSelectAnswer,
    handleSkipAnswer,
    questionIndex
}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    const handleSelectAnswer = (answer) => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000)
        }, 1000)
    }

    let answerState = ''

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selectedAnswer) {
        answerState = 'selected'
    }

    return (
        <div id="question">
            <QuestionTimer
                timeout={10000}
                onTimeout={handleSkipAnswer}

            />

            <h2>{QUESTIONS[questionIndex].text}</h2>
            <Answers
                answers={QUESTIONS[questionIndex].answers}
                selectedAnswer={answer.selectedAnswer}
                answeredState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}

export default Question;
