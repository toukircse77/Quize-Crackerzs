import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const HomeDetails = () => {
    const clickData = useLoaderData();
    const {data} = clickData;
    const quiz = data.questions
    return (
        <div>
            <h1>quiz of {data.name} </h1>
           {
            quiz.map(questions => <Quiz key={questions.id} questions={questions}></Quiz>)
           }
        </div>
    );
};

export default HomeDetails;