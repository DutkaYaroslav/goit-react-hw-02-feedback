import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button type="button" onClick={() => onLeaveFeedback('good')}>
      Good
    </button>
    <button type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </button>
    <button type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </button>
  </div>
);

// FeedbackOptions.propTypes = {
//   // onLeaveFeedback: propTypes.func,
// };

export default FeedbackOptions;
