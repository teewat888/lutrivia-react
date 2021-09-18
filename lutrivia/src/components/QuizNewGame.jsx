import React from 'react';
import { Button } from 'react-bootstrap';

function QuizNewGame(props){
    const onClickHandle = () =>{
        props.onClick();
    }
    return (
       <>
      
           
           <Button variant="secondary" onClick={onClickHandle}>New Game</Button>
       
       </>
    );
}
export default QuizNewGame;