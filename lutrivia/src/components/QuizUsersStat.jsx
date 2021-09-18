import React from 'react';

const QuizUsersStat = ({usersList}) => {
    return (
        <>
        {usersList.map(user => (<div key={user.name}>{user.name}: {user.score} point(s)</div>))}
        </>
    );
}

export default QuizUsersStat;