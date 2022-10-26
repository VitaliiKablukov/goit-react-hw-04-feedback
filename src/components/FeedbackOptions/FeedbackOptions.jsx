import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Fragment>
      {Object.keys(options).map(option => {
        return (
          <Button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </Fragment>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
