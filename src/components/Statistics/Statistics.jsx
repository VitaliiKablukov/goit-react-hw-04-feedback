import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
export const Statistics = props => {
  const keys = Object.keys(props);

  return (
    <Fragment>
      <ul>
        {keys.map(el => {
          return (
            <li key={nanoid()}>
              <p>
                {el}: {props[el]}
              </p>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
