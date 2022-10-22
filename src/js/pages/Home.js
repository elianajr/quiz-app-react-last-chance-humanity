import React from 'react';
import '../../../src/styles/home.css';


export default function Home() {

    return(
        <div>
            <h2>
                Welcome to the last chance for humanity quizz. It's time to show your human's value against machines
            </h2>
            <button onClick={() => (window.location.href = "/quiz")}>
                Start quizz now
            </button>
        </div>

    );
}