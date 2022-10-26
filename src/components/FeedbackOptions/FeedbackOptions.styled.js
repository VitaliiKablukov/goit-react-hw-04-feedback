import styled from 'styled-components';
export const Button = styled.button`
  padding: 4px;
  border-style: none;
  border-radius: 4px;
  box-shadow: 4px 4px 4px 0px rgba(55, 20, 107, 1);
  :hover {
    scale: 1.2;
    background-color: tomato;
  }
  :not(:last-child) {
    margin-right: 10px;
  }
`;
