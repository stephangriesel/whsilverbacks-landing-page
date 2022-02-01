import React from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Review = ({ review, onDelete, onEdit }) => {
  return (
    <Wrapper>
      <div className="review">
        <div>
          <p className="reviewName">
            <span className="textBold">Review Name:</span> {review.text}
          </p>
          <p className="reviewDate"><span className="textBold">Date:</span>
            {review.day}
          </p>
        </div>
        <div>
          <p><FaTimes onClick={() => onDelete(review.id)} className="delIcon" /></p>
          <p><FaPencilAlt onClick={() => onEdit(review.id)} className="editIcon" /></p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.review {

}

.delIcon {
  color:red;
  cursor:pointer;
}

.editIcon {
  color:blue;
  cursor:pointer;
}
`

export default Review;