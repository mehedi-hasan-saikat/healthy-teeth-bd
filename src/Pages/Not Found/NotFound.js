import React from 'react';
import './NotFound.css'
import PageNotFound from '../Images/404.jpg'
const NotFound = () => {
    return (
        <div className="pageNotFound">
       <img src={PageNotFound} alt="" className="w-75 " className="img-fluid w-100"/>
        </div>
    );
};

export default NotFound;