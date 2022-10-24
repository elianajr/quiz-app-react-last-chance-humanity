import React from 'react';

export default function Quit() {

    return(
        <div className='home-container'>
            <h3>
                It's last chance for the humanity. Do you want to try again?
            </h3>
            <button className='button-home' onClick={() => (window.location.href = "/quiz")}>
                Start quizz now
            </button>
        </div>

    );
}