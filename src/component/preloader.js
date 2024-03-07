import React, { useEffect } from 'react';
import { preLoaderAnim } from '../animations';
import './preloader.css';

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []); // Empty dependency array

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Inform,</span>
                <span>Entertain,</span>
                <span>Inspire.</span>
            </div>
        </div>
    );
};

export default Preloader;
