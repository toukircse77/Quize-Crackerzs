import React from 'react';
import {useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const values = useLoaderData().data;
    return (
        <div className='recharts'>
            <div>
            <LineChart width={300} height={300} data={values} >
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
            <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
            </div>
            
        </div>
        
        
    );
};

export default Statistics;