import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={styles.Description}>Good: {good}</p>
      <p className={styles.Description}>Neutral: {neutral}</p>
      <p className={styles.Description}>Bad: {bad}</p>
      <p className={styles.Description}>Total: {total}</p>
      <p className={styles.Description}>
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
};

export default Statistics;
