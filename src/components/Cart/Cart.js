import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({items}) => {
    const {name,logo,total,id} =items;
    return (
        <div>
            <div className="card w-50 bg-base-100">
  <figure className='bg-yellow-400 rounded-sm'><img src={logo}  alt="pic" /></figure>
  <div className="card-body my-2 rounded-sm bg-gray-200">
    <h2 className="card-title text-2xl">{name}</h2>
    <p>Total items: {total}</p>
    <div className="card-actions justify-end">
   <Link to={`/home/${id}`}> <button className="btn btn-primary">Start quiz</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;