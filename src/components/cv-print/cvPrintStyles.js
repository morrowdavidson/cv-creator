import styled from 'styled-components';

export const CvPrintContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  position: sticky;
  top: 0;
  font-family: 'Geist', sans-serif;
  @media (max-width: 1225px) {
    padding: 10px;
  }
`;

export const CvPrintWrapper = styled.div`
  width: 8in; /* Standard paper width */
  height: 10in; /* Standard paper height */
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  font-family: 'Geist', sans-serif;
  font-weight: 400;

  @media (max-width: 1225px) {
    width: 4.25in;
    height: 5.5in;
  }
`;

export const Heading1 = styled.h1`
  margin-top: 50px;
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  @media (max-width: 1225px) {
    margin-top: 25px;
    font-size: 12px;
  }
`;

export const Heading2 = styled.h2`
  margin-top: 20px;
  font-size: 20px;
  padding-bottom: 5px;
  margin-bottom: 0px;
  font-weight: 500;
  @media (max-width: 1225px) {
    margin-top: 10px;
    font-size: 10px;
    padding-bottom: 2px;
  }
`;

export const UnorderedList = styled.ul`
  margin: 0 0 10px;
  padding-left: 20px;
  font-size: 14px;
  @media (max-width: 1225px) {
    padding-left: 10px;
    font-size: 7px;
    margin: 0 0 5px;
  }
`;

export const Paragraph = styled.p`
  margin: 0 0 5px;
  font-size: 14px;
  ul {
    margin: 0 0 10px;
    padding-left: 20px; /* Remove padding */
  }
  p {
    margin: 0 0 5px;
  }

  @media (max-width: 1225px) {
    padding-left: 10px;
    font-size: 7px;
    margin: 0 0 2px;
  }
`;

export const Section = styled.div`
  margin-bottom: 30px;
  @media (max-width: 1225px) {
    margin-bottom: 15px;
  }
`;

export const About = styled.div`
  margin: 25px;
  border-right: solid 1px #ccc;
  @media (max-width: 1225px) {
    margin: 12px;
  }
`;

export const Work = styled.div`
  margin: 25px;
  @media (max-width: 1225px) {
    margin: 12px;
  }
`;
export const MainContent = styled.div`
  display: flex;
`;

export const ContactSection = styled.section`
  background-color: #f9f9f9;
  margin-left: -45px;
  padding: 15px;
  padding-left: 45px;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  @media (max-width: 1225px) {
    display: none;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const InnerSection = styled.div`
  margin-bottom: 15px;
`;

export const ForPrinting = styled.div`
  font-family: 'Geist', sans-serif;
`;
