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
} from './CommonStyles';
import feather from 'feather-icons';

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
    const newEducation = { school: '', degree: '', year: '' };

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
          <SectionHeader>
            {education.school ? education.school : `Education #${index + 1}`}
          </SectionHeader>
          <IconButton
            type="button"
            onClick={() => handleDeleteEducation(index)}
          >
            <Icon data-feather="trash"></Icon>
          </IconButton>

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
        </div>
      ))}
      <Button type="button" onClick={handleAddEducation}>
        Add Education
      </Button>
    </Form>
  );
}

EducationForm.propTypes = {
  educationList: PropTypes.array.isRequired,
  setEducationList: PropTypes.func.isRequired,
};

export default EducationForm;
