import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {
  Form,
  Button,
  Input,
  Icon,
  IconButton,
  Label,
  SectionHeader,
  AddButton,
} from './CommonStyles';
import feather from 'feather-icons';
import Accordion from '../Accordion';

function EducationForm({ educationList, setEducationList }) {
  useEffect(() => {
    feather.replace();
  }, [educationList]);

  const handleInputChange = (index, event) => {
    const values = [...educationList];
    values[index][event.target.name] = event.target.value;
    setEducationList(values);
  };

  function handleAddEducation() {
    // Create a new education entry
    const newEducation = { school: '', degree: '', year: '', isOpen: true };

    // Create a new array with the existing educationList and the new entry
    const updatedEducationList = [...educationList, newEducation];

    // Update the state with the new array
    setEducationList(updatedEducationList);
  }

  function handleDeleteEducation(index) {
    // Create a new array without the deleted education
    const updatedEducationList = educationList.filter(function (_, i) {
      return i !== index;
    });

    // Update the state with the new array
    setEducationList(updatedEducationList);
  }

  return (
    <Form>
      {educationList.map((education, index) => (
        <div key={index}>
          <Accordion
            title={
              education.school ? education.school : `Education #${index + 1}`
            }
            openState={education.isOpen}
          >
            <Label htmlFor={`school-${index}`}>School</Label>
            <Input
              type="text"
              id={`school-${index}`}
              name="school"
              value={education.school}
              onChange={(event) => handleInputChange(index, event)}
            />
            <Label htmlFor={`degree-${index}`}>Degree</Label>
            <Input
              type="text"
              id={`degree-${index}`}
              name="degree"
              value={education.degree}
              onChange={(event) => handleInputChange(index, event)}
            />
            <Label htmlFor={`year-${index}`}>Year</Label>
            <Input
              type="text"
              id={`year-${index}`}
              name="year"
              value={education.year}
              onChange={(event) => handleInputChange(index, event)}
            />
            <Button type="button" onClick={() => handleDeleteEducation(index)}>
              <Icon data-feather="trash"></Icon> Delete
            </Button>
          </Accordion>
        </div>
      ))}
      <AddButton type="button" onClick={handleAddEducation}>
        Add Education
      </AddButton>
    </Form>
  );
}

EducationForm.propTypes = {
  educationList: PropTypes.array.isRequired,
  setEducationList: PropTypes.func.isRequired,
};

export default EducationForm;
