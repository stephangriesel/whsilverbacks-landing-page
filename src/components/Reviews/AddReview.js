import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import StarRating from './StarRating';

function log(value) {
  console.log(value);
}

const AddReview = ({onSave}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  return (
      <Form className="add-form">
          <FormControl className="form-control">
              <label>Name</label>
              <input type="text" placeholder="name" value={day} onChange={(e) => setDay(e.target.value)} />
          </FormControl>
          <FormControl className="form-control">
              <label>Review</label>
              <input type="text" placeholder="add review" value={text} onChange={(e) => setText(e.target.value)} />
          </FormControl>
          <Button type="submit" className="btn btn-block" value="Save Review">Save</Button>
          <StarRating onChange={log}/>
      </Form>
    )
}

const Form = styled.form`
border: 1px solid black;
padding:15px;
label {
  margin: 0 10px;
}

`

const FormControl = styled.div`

margin: 5px 0;
border:none;
input {
  padding:0 5px;
}
input[type="text"]::placeholder {
  padding:0 2px;
}
`

const Button = styled.div`
border:1px solid #000;


`

export default AddReview