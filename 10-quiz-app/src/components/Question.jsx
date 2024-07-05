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

    let timer = 10000

    if (answer.selectedAnswer) {
        timer = 1000
    }

    if (answer.isCorrect !== null) {
        timer = 2000
    }
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
        answerState = 'answered'
    }

    return (
        <div id="question">
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === '' ? handleSkipAnswer : null}
                mode={answerState}
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
