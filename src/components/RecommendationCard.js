import React from 'react';
import './RecommendationCard.css'; // Will create this CSS file later

function RecommendationCard({ recommendation, isSelected }) {
    return (
        <div className={`recommendation-card ${isSelected ? 'selected' : ''}`}>
            <h3>{recommendation.name}</h3>
            <p><strong>종류:</strong> {recommendation.cuisine}</p>
            <p><strong>설명:</strong> {recommendation.description}</p>
            <p><strong>위치:</strong> {recommendation.location}</p>
        </div>
    );
}

export default RecommendationCard;