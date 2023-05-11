import React from 'react';

function CustomButton(props) {
    const { text, onClick, disabled } = props;

    return (
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}


export default App;