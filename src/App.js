import React, { useState } from 'react';
import lunchRecommendations from './data';
import RecommendationList from './components/RecommendationList';
import RandomPicker from './components/RandomPicker';
import './App.css';

function App() {
    const [selectedId, setSelectedId] = useState(null);

    const handlePickRandom = () => {
        const randomIndex = Math.floor(Math.random() * lunchRecommendations.length);
        setSelectedId(lunchRecommendations[randomIndex].id);

        // Optional: Scroll to the selected item after a short delay
        setTimeout(() => {
            const element = document.querySelector('.recommendation-card.selected');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 300); // Give CSS transition some time
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>을지로 점심메뉴 추천</h1>
                <p>오늘 점심 뭐 먹지? 고민될 땐 여기서 골라보세요!</p>
            </header>
            <main>
                <RandomPicker onPickRandom={handlePickRandom} />
                <RecommendationList
                    recommendations={lunchRecommendations}
                    selectedId={selectedId}
                />
            </main>
            <footer className="App-footer">
                <p>&copy; 2026 Euljiro Lunch Recommender</p>
            </footer>
        </div>
    );
}

export default App;