import React, { useState } from 'react';
import './Header.css'
import {Bars4Icon,XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full bg-blue-500'>
             <div className="h-10 w-6 text-black-500 md:hidden"  onClick={()=>setOpen(!open)}>
             {
                open ? 
                <XMarkIcon /> : 
                <Bars4Icon />  
            }
             </div>
             <ul className={ `md:flex w-full bg-blue-500  md:static justify-center duration-500 ease-in  absolute ${open ? 'top-8' : 'top-[-240px]'}` }>
                <li className='mr-10 p-1'><NavLink className={({isActive})=> isActive ? 'active' : 'undefined'} to={'/home'}>Home</NavLink></li>
                <li className='mr-10 p-1'><NavLink  to={'/topic'}>Topic</NavLink></li>
                <li className='mr-10 p-1'><NavLink to={'/statistics'}>Statistics</NavLink></li>
                <li className='mr-10 p-1'><NavLink to={'/blog'}>Blog</NavLink></li>
             </ul>
        </div>
    );
};

export default Header;