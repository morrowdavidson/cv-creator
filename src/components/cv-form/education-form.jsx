import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Form, Button, Input, Icon } from './CommonStyles';
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
          <Button type="button" onClick={() => handleDeleteEducation(index)}>
            <Icon data-feather="trash"></Icon>
          </Button>
          <Input
            type="text"
            name="school"
            placeholder="School"
            value={education.school}
            onChange={(event) => handleInputChange(index, event)}
          />
          <Input
            type="text"
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={(event) => handleInputChange(index, event)}
          />
          <Input
            type="text"
            name="year"
            placeholder="Year"
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
