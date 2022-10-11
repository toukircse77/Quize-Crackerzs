import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HomeDetails = () => {
    const clickData = useLoaderData();
    const {data} = clickData;
    const {questions} = data;
    console.log(questions)
    return (
        <div>
            <h1>quiz of {data.name} </h1>
            <div>
                {
                    questions.map(question =><div>
                        <h1> Question: {question.question}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeDetails;