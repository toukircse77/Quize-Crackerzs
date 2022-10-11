import React from 'react';

const Quiz = ({questions}) => {
    const {options, question} = questions;
    console.log(options)
    return (
        <div>
            <h1>Quiz: {question}</h1>
            <div className='grid grid-rows-2 grid-flow-col gap-3'>
                {
                    options.map(option=><li>{option}</li>)
                }

            </div>
        </div>
    );
};

export default Quiz;