import React from 'react';
import {useState} from 'react';
import Star from '../Home/Star';

import styled from 'styled-components'

function StarRating({ onChange }) {
  const [rating, setRating] = useState(0);

  const changeRating = (newRating) => {
    setRating(newRating);
    onChange(newRating);
  }

  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div `
width:100%;
text-align:center;
`

export default StarRating;
