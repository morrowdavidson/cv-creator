import PropTypes from 'prop-types';
import { Form, Button, Input, Label, AddButton } from './CommonStyles';
import Accordion from '../Accordion';
import { Trash } from 'react-feather';

function EducationForm({ educationList, setEducationList }) {
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducationList = educationList.map((education, i) =>
      i === index ? { ...education, [name]: value } : education
    );
    setEducationList(updatedEducationList);
  };

  function handleAddEducation() {
    // Create a new education entry
    const newEducation = {
      id: Date.now(),
      name: '',
      degree: '',
      year: '',
      isOpen: true,
    };

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
            title={education.name ? education.name : `Education #${index + 1}`}
            openState={education.isOpen}
          >
            <Label htmlFor={`school-${index}`}>School</Label>
            <Input
              type="text"
              id={`school-${index}`}
              name="name"
              value={education.name}
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
              <Trash size={16} /> Delete
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
