import React from 'react';
import './Quiz.css'

const Quiz = ({questions}) => {
    const {options, question} = questions;
    console.log(options)
    return (
        <div className='quiz-wrapper'>
            <h1  className='text-2xl' >Quiz: {question}</h1>
            <div className='flex flex-col items-center option'>
                {
                    options.map(option=><p className='option-list'>{option}</p>)
                }

            </div>
        </div>
    );
};

export default Quiz;