import React from 'react';

import QuizNewGame from './components/QuizNewGame';
import QuizScore from './components/QuizScore';
import QuizesList from './components/QuizesList';
import QuizForm from './components/QuizForm';
import QuizUsersStat from './components/QuizUsersStat';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import questions from "./data";

const Section = styled.div`
        width: 800px;
        border-style: solid;
        border-width: 1;
        border-color: #999999;
        margin: auto;
        margin-top: 20px;
        padding: 20px;
        border-radius: 5px;
    `

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      score: 0,
      questions: this.randomQuestions(),
      isNewGame: false,
      users: []
    }
    
   
  }

 
  
  randomQuestions = () => {
    let shuffled = [...questions.questions];
    shuffled.sort(() => 0.5-Math.random());
    shuffled.splice(0,5);
    return shuffled;
  }



  handleNewGame = () => {
    this.setState({
      questions: this.randomQuestions(),
      score: 0,
      isNewGame: !this.state.isNewGame
    });
    
  }

  updateScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }))
  }

  submitScore = (name) => {
      
      let users = {
        name: name,
        score: this.state.score
      }
      users = [...this.state.users, users];
      this.setState({
        users: users
      });

      this.handleNewGame();
  }

  render() {
    return (
      <Container fluid >
        <main>
        <Section>
        <h1>Lutrivia</h1>
          <Row>
            <Col sm={9}>
              <QuizNewGame onClick={this.handleNewGame}/> 
            </Col>
            <Col sm={3}>
              <QuizScore score={this.state.score} />
            </Col>
          </Row>
          <QuizesList questions={this.state.questions} setScore={this.updateScore} isNewGame={this.state.isNewGame}/>
          <QuizForm submitScore={this.submitScore} />
          <QuizUsersStat usersList={this.state.users} />
        </Section>
        </main>
      </Container>
    );
  }
}
  

