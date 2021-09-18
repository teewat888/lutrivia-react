import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap'

const Section = styled.div`
        width: 755px;
        border-style: solid;
        border-width: 1;
        border-color: #999999;
        margin-top: 20px;,
        background-color: #EEEEEE;
        padding: 5px;
        border-radius: 5px;
    `
const Question = styled.div`
    font-weight: bold;
    margin: 10px 0px;
`
const Answer = styled.div`
    
    margin: 10px 0px;
`

export default class QuizCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trueBtnVariant: "outline-secondary",
            falseBtnVariant: "outline-secondary",
            trueBtnDisabled: "",
            falseBtnDisabled: "",
            isNewGame: this.props.isNewGame
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.isNewGame !== this.props.isNewGame) {
            this.clearAnswer();
             }
    }

    clearAnswer = () => {
        this.setState({
            trueBtnVariant: "outline-secondary",
            falseBtnVariant: "outline-secondary",
            trueBtnDisabled: "",
            falseBtnDisabled: "",
            isNewGame: this.props.isNewGame
        })
    }
    
    checkAnswer = (e) => {
        const { answer, setScore } = this.props;
        this.setState({
            trueBtnDisabled: "disabled",
            falseBtnDisabled: "disabled"
        })
        const userAnswer = (e.target.id === "ansTrue" ? true : false);
        const isCorrect = (userAnswer === answer ? true : false);
        if (isCorrect) {
            setScore();
        }
        if (e.target.id === "ansTrue") {
            this.setState({
                trueBtnVariant: (isCorrect ? "success" : "danger")
            })
        } else {
            this.setState({
                falseBtnVariant: (isCorrect ? "success" : "danger")
            })
        }
    }

    render() {

        return (
            <>
            <Section>
                <Question style={{fontWeight:"bold"}}>{this.props.q}</Question>
                <Answer>
                        <Button variant={this.state.trueBtnVariant} disabled={this.state.trueBtnDisabled} id="ansTrue" onClick={this.checkAnswer}>True</Button>{' '}
                        <Button variant={this.state.falseBtnVariant} disabled={this.state.falseBtnDisabled} id="ansFalse" onClick={this.checkAnswer}>False</Button>
                </Answer>
            </Section>
            </>
        );
    }
    } 


    
 