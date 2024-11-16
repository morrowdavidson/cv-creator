import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { Plus, Minus } from 'react-feather';

const AccordionSection = styled.div`
  margin-bottom: 10px;
`;

const AccordionHeader = styled.div`
  background-color: #f9f9f9;
  color: black;
  padding: 10px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;

  &:hover {
    border-color: #c656fe;
  }
`;

const AccordionContent = styled.div`
  overflow: hidden;
  background-color: #fff;
  border-top: none;
  border-radius: 0 0 4px 4px;
  transition: max-height 0.3s ease-out, padding 0.3s ease-out;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  padding: ${({ isOpen }) => (isOpen ? '10px' : '0 10px')};
`;

const Accordion = ({ title, children, openState }) => {
  const [isOpen, setIsOpen] = useState(openState);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionSection>
      <AccordionHeader onClick={toggleAccordion}>
        {title}
        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionSection>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  openState: PropTypes.bool,
};

Accordion.defaultProps = {
  openState: false,
};

export default Accordion;
