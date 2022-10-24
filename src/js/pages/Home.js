import React from 'react';
import '../../../src/styles/home.css';


export default function Home() {

    return(
        <div className='home-container'>
            <h3 className='typed-out'>
                Welcome to the last chance for humanity quizz.  It's time to show your human's value against machines.
            </h3>
            <button className='button-home' onClick={() => (window.location.href = "/quiz")}>
                Start quizz now
            </button>
        </div>

    );
}