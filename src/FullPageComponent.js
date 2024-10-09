// FullPageComponent.js
import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

const FullPageComponent = () => {
    useEffect(() => {
        new fullpage('#fullpage', {
            // Options for fullPage.js
            autoScrolling: true,
            scrollHorizontally: true,
        });

        // Cleanup function to destroy fullPage.js instance on component unmount
        return () => {
            fullpage.destroy('all');
        };
    }, []);

    return (
        <div id="fullpage">
            <div className="section">Section 1</div>
            <div className="section">Section 2</div>
            <div className="section">Section 3</div>
        </div>
    );
};

export default FullPageComponent;
