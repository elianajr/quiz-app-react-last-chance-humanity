import React from 'react';

export default function Quit() {

    return(
        <div>
            <h2>
                It's last chance for the humanity. Do you want to try again?
            </h2>
            <button onClick={() => (window.location.href = "/quiz")}>
                Start quizz now
            </button>
        </div>

    );
}