import React, { useState, useEffect } from 'react';
import './App.css';
import Preloader from './component/preloader';
import { NavBar }  from './component/navbar';
import { Banner } from './component/banner';
import { About } from './component/about';
import { Team } from './component/team';
import { Activities } from './component/activities';
const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating a delay to show the preloader
        setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 seconds delay
    }, []);

    return (
        <div>
            {loading ? (
                <Preloader />
            ) : (
                
                    
                    <div>
                        <NavBar />
                        <Banner />
                        <About />
                        <Activities />
                        <Team />
                    </div>
                    
                
            )}
        </div>
    );
};

export default App;
