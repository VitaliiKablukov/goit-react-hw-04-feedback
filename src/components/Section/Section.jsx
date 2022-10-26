import PropTypes from 'prop-types';
import { Wrapper, Tittle } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Tittle>{title}</Tittle>
      {children}
    </Wrapper>
  );
};
Section.propTypes = {
  title: PropTypes.string,
};
