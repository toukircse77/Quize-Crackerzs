import React from 'react';
import { Link } from 'react-router-dom';

const TopicDatails = ({topic}) => {
 const {name,logo,total,id} = topic;
    return (
        <div className=' '>
            <div className="card w-50 m-5 bg-uw shadow-xl">
                <figure className='bg-yellow-400 rounded-sm'><img src= {logo} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Items :{total}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/home/${id}`}> <button className="btn btn-primary">Start quiz</button></Link>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default TopicDatails;