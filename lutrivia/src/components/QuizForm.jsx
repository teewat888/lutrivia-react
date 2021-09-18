import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Section = styled.div`
        width: 755px;
        margin-top: 20px;,
        background-color: #EEEEEE;
        padding: 5px;
        
    `

export default class QuizForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    
    handleClick = () => {
        const {submitScore} = this.props;
        submitScore(this.state.name);
        this.setState({
            name: ''
        })
    }

    handleOnChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
        <>
        <Section>
            <InputGroup className="mb-3">
                <FormControl
                id="name"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="Name"
                onChange={this.handleOnChange}
                value={this.state.name}
                />
                <Button variant="secondary" id="submitScore" onClick={this.handleClick}>
                Submit score
                </Button>
            </InputGroup>
        </Section>
        </>
    )
    }
}
