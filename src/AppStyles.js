import styled from 'styled-components';

export const FormPrintContainer = styled.div`
  display: flex;
  justify-content: center;
    @media (max-width: 975px) {
    flex-direction: column;
`;

export const FormWrapper = styled.div`
  margin-right: 20px;

  @media (max-width: 975px) {
    align-self: center;
  }
`;

export const PrintWrapper = styled.div``;

export const Button = styled.button`
  padding: 10px 15px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  background-color: #c656fe;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75em;
  cursor: pointer;
  transition: background-color 0.3s;

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
`;

export const LightButton = styled.button`
  padding: 10px 15px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  border: 1px solid #c656fe;
  color: #c656fe;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c656fe;
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 500;

  font-family: 'Geist', sans-serif;
`;
export const ActionButtons = styled.div`
  display: flex;
`;

export const TimerBar = styled.div`
  height: 2px;
  background-color: #ff6666;
  transition: width 1s linear;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const UndoButton = styled.button`
  background-color: #fde9e9;
  color: #ff6666;
  padding: 10px 15px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
`;
