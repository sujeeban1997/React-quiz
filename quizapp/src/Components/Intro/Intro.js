import React from "react";
import './intro.css';

const Intro = (props) => {
    return (
        <div className="Main-content">
            <h1>React Quizz!</h1>
            <h2>This quiz contains 5 Questions</h2>
            <h2>Each Question carries 1 Marks</h2>
            <center>
                <button onClick={props.clickevent}>Test your Skills</button>
            </center>
        </div>
    )
}

export default Intro;