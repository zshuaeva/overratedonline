import React, { useState, useEffect } from 'react';
import ratingImage from './icons/rating.png';
import placeholderImage from './icons/placeholder.png';
import './ReviewList.css';

function ReviewList() {
  const [reviewCard, setReviewCard] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/reviews/');
      const data = await response.json();
      console.log(data);
      setReviewCard(data.reviews);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="review-container">
      {reviewCard.map(([reviewText, reviewScore], index) => (
        <div key={index} className="review-card">
          <div className="card" style={{ width: '100%', height: '100%' }}>
            <div className="card-body">
              <h5 className="card-title">
                {[...Array(5)].map((review, stars) => (
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
  );
};

export default ReviewList;
