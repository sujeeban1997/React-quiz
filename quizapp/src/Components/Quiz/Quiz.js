import React from 'react'
import Question from '../Question/Question';
import Option from '../Options/Option';
import './Quiz.css';
import End from '../End/End';
import Score  from '../Score/Score';


class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questions : {
                1 : 'Which one is not type of mobile brand ?',
                2 : 'Which one is not type of laptop brand ?',
                3 : 'How many days are there in a week? ...',
                4 : 'How many letters are there in the English alphabet?',
                5 : 'Name the National bird of India?'

            },
            options : {
                1 : {
                    1 : 'Think Pad',
                    2 : 'Apple',
                    3 : 'Samsung',
                    4 : 'Oppo f9'
                },
                2 : {
                    1 : 'Lenova',
                    2 : 'Asus',
                    3 : 'Vivo',
                    4 : 'Dell'
                },
                3 : {
                    1 : '3',
                    2 : '5',
                    3 : '18',
                    4 : '7'
                },
                4 : {
                    1 : '21',
                    2 : '26',
                    3 : '32',
                    4 : '14'
                },
                5 : {
                    1 : 'Peacock',
                    2 : 'Maina',
                    3 : 'Parrot',
                    4 : 'Pigeon'
                }

            },
            correctOptions : {
                1 : '4',
                2 : '3',
                3 : '4',
                4 : '2',
                5 : '1'
            },
            correctOption : 0,
            clickedOption : 0,
            step : 1,
            score : 0,
            result : 0,
            viewResult : 0
        }
    }

    checkOption = opt => {
        if(opt === this.state.correctOptions
            [this.state.step]){
                this.setState({
                    score : this.state.score+1,
                    correctOption : this.state.
                    correctOptions[this.state.step],
                    clickedOption : opt,
                    result : 1
                });
            } else{
                this.setState({
                    correctOption : 0,
                    clickedOption : opt,
                    result : 1
                });
            }
    }

    Next = (step) => {
        this.setState({
            step : step + 1,
            correctOption : 0,
            clickedOption : 0,
            result : 0
        });
    }

    handleClick = () => {
        this.setState({
            viewResult : 1
        });
    }

    render(){
        return (
            <div>
                {
                    this.state.step <= Object.keys(this.state.questions).length ?
                <div className='Quiz-app'>
                    <Question q = {this.state.questions
                        [this.state.step]}
                        qno = {this.state.step}
                        total = {Object.keys(this.state.questions).length}/>
                        <Option opt = {this.state.options[this.state.step]}
                        clickevent = {this.checkOption}
                        correctOption = {this.state.correctOption}
                        clickedOption = {this.state.clickedOption}
                        result = {this.state.result}/>
                        <button className='Next'
                        disabled = {this.state.clickedOption ? false : true} onClick = {()=> this.Next(this.state.step)}>NEXT &gt;</button>
                </div> : 
                this.state.viewResult ? 
                    (
                        <Score score = {this.state.score} total = {Object.keys(this.state.questions).length}/>
                    )
                : (
                    <End click =  {() => this.handleClick()}/>
                )
                }       
            </div>
        )
    }
}

export default Quiz;