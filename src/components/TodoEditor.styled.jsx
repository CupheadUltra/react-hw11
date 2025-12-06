import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid #ccc;
  padding: 20px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  resize: none;
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
