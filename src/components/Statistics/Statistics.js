import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total = 0, percentage }) => (
  <div>
    <h2>Statistics</h2>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total:{total}</p>
    <p>Positive feedback:{percentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
