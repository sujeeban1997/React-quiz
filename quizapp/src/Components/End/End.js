import react from 'react';
import './End.css';

const End = (props) => {
    return (
        <div className='End'>
            <h1>Well Done , </h1>
            <h2>You have Completed the Quiz!</h2>
            <button onClick = {props.click}>View the Result</button>
        </div>
    );
}

export default End;