import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  flex-grow: 1;
  margin-left: 10px;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

export const Button = styled.button`
  background: #26c114;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #1b9c0c;
  }
`;
