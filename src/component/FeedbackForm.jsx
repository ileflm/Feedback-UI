import React, { useState } from 'react';
import Card from './shared/card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('10');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    if (newText.trim().length === 0) {
      setBtnDisabled(true);
      setMessage(null);
    } else if (newText.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us? </h2>
        <RatingSelect select={(newRating) => setRating(newRating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' version='secondary' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;


