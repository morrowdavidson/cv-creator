import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 850px) {
    width: 100%;
  }
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
    border-color: #c656fe;
    outline: none;
  }
`;

export const SmallInput = styled.input`
  width: 90%;
  padding: 8px;
  margin-bottom: 16px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  &:focus {
    border-color: #c656fe;
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

export const Button = styled.button`
  padding: 5px 10px;
  border: 1px dotted grey; /* Grey dotted border */
  border-radius: 4px;
  background-color: #c656fe; /* Purple background color */

  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75em;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;

  &:hover {
    background-color: #a442e3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(198, 86, 254, 0.5);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  svg {
    margin-bottom: -2px;
  }
`;

export const AddButton = styled.button`
  padding: 10px 10px;
  border: 1px dotted #ccc; /* Grey dotted border */
  border-radius: 4px;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75em;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: #a442e3;
    color: #fff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(198, 86, 254, 0.5);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Icon = styled.i`
  width: 16px; /* Adjust the width as needed */
  height: 16px; /* Adjust the height as needed */
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  &:hover ${Icon} {
    color: #a442e3; /* Change color on hover if needed */
  }
`;

export const SectionHeader = styled.h2`
  margin: 0px;
  padding: 0px;
  margin-right: 5px;
  display: inline;
  font-size: 1em;
`;

export const ReactQuillWrapper = styled.div`
  margin-bottom: 25px;
  .ql-editor {
    font-family: 'Roboto', sans-serif;
  }
  .ql-container {
    border-radius: 0 0 4px 4px;
    background-color: #fff;
  }
`;
