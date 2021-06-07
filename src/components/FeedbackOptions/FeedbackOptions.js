import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsItems = Object.keys(options);
  return (
    <ul className={styles.ListBtn}>
      {optionsItems.map(optionsItem => (
        <li key={optionsItem} className={styles.ListItem}>
          <button
            type="button"
            name={optionsItem}
            onClick={onLeaveFeedback}
            className={styles.Button}
          >
            {optionsItem}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default FeedbackOptions;
