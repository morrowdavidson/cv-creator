import styled from 'styled-components';

export const Form = styled.form`
  max-width: 400px;
  font-family: 'Roboto', sans-serif;
`;

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 0.75em;
  font-family: 'Roboto', sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const SectionWrapper = styled.div`
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
`;
