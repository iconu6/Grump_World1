import React from 'react';
import './RandomPicker.css'; // Will create this CSS file later

function RandomPicker({ onPickRandom }) {
    return (
        <div className="random-picker">
            <button onClick={onPickRandom} className="pick-button">
                오늘 뭐 먹지? (무작위 추천)
            </button>
        </div>
    );
}

export default RandomPicker;