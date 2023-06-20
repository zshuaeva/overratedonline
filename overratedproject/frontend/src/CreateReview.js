import React, { useState } from 'react';
import ratingImage from './icons/rating.png';
import placeholderImage from './icons/placeholder.png';
import './CreateReview.css';

function CreateReview() {
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/reviews/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reviews: [
            [reviewText, reviewRating]
          ]
        }),
      });
      const data = await response.json();
      console.log(data);
      setReviewText("");
      setReviewRating(0);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="createreview-container">
      <div className="createreview-card">
        <div className="card-body createreview-card-body">
          <form onSubmit={handleSubmit}>
            <h5 className="reatereview-card-title">
              {[...Array(5)].map((star, index) => (
                <img
                  key={index}
                  src={(hoverRating || reviewRating) > index ? ratingImage : placeholderImage}
                  alt={(hoverRating || reviewRating) > index ? 'Rating' : 'Placeholder'}
                  onMouseEnter={() => setHoverRating(index + 1)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setReviewRating(index + 1)}
                  style={{ height: '20px', marginRight: '5px', cursor: 'pointer' }}
                />
              ))}
            </h5>
            <textarea
              className="card-text"
              id="reviewText"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here"
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateReview;
