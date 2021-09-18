import React from 'react';
import QuizCard from './QuizCard';

const QuizesList = ({ questions, setScore, isNewGame }) => {
    
    return (
        <>
        {questions.map((question) => (<QuizCard q={question.text} answer={question.answer} setScore={setScore} key={question.text} isNewGame={isNewGame} />))}
        </>
    );
}

export default QuizesList;