import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
const SpinnerLoading = () => {
    const [loading, setLoading] = useState(true)
    const name = 'shariful islam'
    // if(name){
    //     setLoading(false)
    // }

    if(loading){
       return         <Spinner animation="border" variant="success" />
    }
    return (
        <div className='container '>
            <h1>{`your name is ${name}`}</h1>
              
                
        </div>
    );
};

export default SpinnerLoading;