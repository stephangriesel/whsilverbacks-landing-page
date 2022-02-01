import React from 'react';
import Review from './Review';
const Reviews = ({ reviews, onDelete, onEdit }) => {
  return (
    <>
      {
        reviews.map((review) => (
          <Review key={review.id} review={review} onDelete={onDelete} onEdit={onEdit} />
        ))
      }
    </>
    )
}
export default Reviews;