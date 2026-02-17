import React from 'react';
import RecommendationCard from './RecommendationCard';
import './RecommendationList.css'; // Will create this CSS file later

function RecommendationList({ recommendations, selectedId }) {
    return (
        <div className="recommendation-list">
            {recommendations.map((rec) => (
                <RecommendationCard
                    key={rec.id}
                    recommendation={rec}
                    isSelected={rec.id === selectedId}
                />
            ))}
        </div>
    );
}

export default RecommendationList;