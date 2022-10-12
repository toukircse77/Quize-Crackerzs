import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quiz.css'

const Quiz = ({questions}) => {
    const {options, question,correctAnswer} = questions;
    const [open, setOpen] = useState(false)
    const quizHandler = (answer) =>{
        if(correctAnswer === answer){
            toast.success("Congrass!! you give the right answer");
        }
        else{
            toast.error("sorry!! you give the wrong answer");
        }
    }
    if(open){
        toast.success(`${correctAnswer}`);
    }
 
    
    return (
        <div className='quiz-wrapper'>
            <h1  className='text-2xl' >Quiz: {question}</h1>
            <span onClick={() => {setOpen(true)}} className='flex float-right'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</span>
            <div className='flex flex-col items-center option'>
                {
                    options.map(option=><p onClick={()=>quizHandler(option)} className='option-list'>{option}</p>)
                }

            </div>
            <ToastContainer position="top-center" autoClose={2000} ></ToastContainer>
        </div>
    );
};

export default Quiz;