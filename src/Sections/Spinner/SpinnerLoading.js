import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
const SpinnerLoading = () => {
    const [loading, setLoading] = useState(true)
    const Fname = {
        name: 'Shariful Islam'
    }
    // if(name){
    //     setLoading(false)
    // }

    if(loading){
       return         <Spinner animation="border" variant="success" />
    }
    return (
        <div className='container '>
            <h1>{`${Fname.name}`? setLoading(true) : loading}</h1>
              
                
        </div>
    );
};

export default SpinnerLoading;