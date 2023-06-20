import React, { useEffect, useState } from 'react';
import ratingImage from './icons/rating.png';
import placeholderImage from './icons/placeholder.png';
import './PlayArea.css';

function PlayArea() {
  const [reviewCards, setReviewCards] = useState([]);
  const [locationCard, setLocationCard] = useState(null);
  const [players, setPlayers] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]); // simulated players

  useEffect(() => {
    const fetchReviewCards = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/reviews/');
        const data = await response.json();
        setReviewCards(data.reviews);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchLocationCard = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/locations/');
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.locations.length);
        setLocationCard(data.locations[randomIndex]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviewCards();
    fetchLocationCard();
  }, []);

  // Assign cards to players
  const assignCards = (players, cards) => {
    const playerCards = {};
    players.forEach((player, index) => {
      playerCards[player.id] = cards.slice(index * 5, (index + 1) * 5);
    });
    return playerCards;
  };

  const playerCards = assignCards(players, reviewCards);

  return (
    <>
      <h3>Location Card:</h3>
      {/* Render location card */}
      <div className="location-card">
        <div className="location-card-body">
          <h5 className="location-card-title">{locationCard}</h5>
        </div>
      </div>
      <div className="player-cards-container">
        {/* Render player cards */}
        {Object.entries(playerCards).map(([playerId, cards]) => (
          <div key={playerId} className="player-cards">
            <h3>Player {playerId} Cards:</h3>
            {cards.map(([reviewText, reviewScore], index) => (
              <div key={index} className="review-card">
                <div className="card" style={{ width: '100%', height: '100%' }}>
                  <div className="card-body">
                    <h5 className="card-title">
                      {[...Array(5)].map((star, stars) => (
                        <img
                          key={stars}
                          src={stars < reviewScore ? ratingImage : placeholderImage}
                          alt={stars < reviewScore ? 'Rating' : 'Placeholder'}
                          style={{ height: '20px', marginRight: '5px' }}
                        />
                      ))}
                    </h5>
                    <p className="card-text">{reviewText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default PlayArea;
