import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <div className='background-image flex items-center justify-center'>
            <div className='text-5xl'>Knowledge is Power</div>
            </div>
            <div className='home-container'>
        
                {
                    data.map(items=><Cart key={items.id} items={items}></Cart>)
                }
            </div>
        </div>
    );
};

export default Home;