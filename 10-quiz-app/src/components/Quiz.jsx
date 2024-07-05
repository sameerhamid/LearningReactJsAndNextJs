import React, { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Question from "./Question";
import Summary from "./Summary";
function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex =
        userAnswers.length

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        (selectedAnswer) => {

            setUserAnswers((prevAnsers) => {
                return [...prevAnsers, selectedAnswer];
            });

        },
        []
    );

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <Summary userAnswers={userAnswers} />
        );
    }

    return (
        <div id="quiz">
            <Question
                // when the key changes the component will be recreated
                key={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                handleSkipAnswer={handleSkipAnswer}
                questionIndex={activeQuestionIndex}
            />
        </div>
    );
}

export default Quiz;
