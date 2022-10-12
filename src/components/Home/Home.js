import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <div className='flex items-center justify-center'>
            <div>
            <div className="hero min-h-50 bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">To know, is to know that you know nothing. ...</h1>
      <p className="py-6">Develop an attitude of gratitude, and give thanks for everything that happens to you, knowing that every step forward is a step toward achieving something bigger and better than your current situation.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4'>
        
                {
                    data.map(items=><Cart key={items.id} items={items}></Cart>)
                }
            </div>
        </div>
    );
};

export default Home;