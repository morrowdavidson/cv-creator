import PropTypes from 'prop-types';
import { Form, Button, Input, Label, AddButton } from './CommonStyles';
import Accordion from '../Accordion';
import { Trash } from 'react-feather';
import { toast } from 'react-toastify';
import ToastMsg from './ToastMsg';

function EducationForm({ educationList, setEducationList }) {
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducationList = educationList.map((education, i) =>
      i === index ? { ...education, [name]: value } : education
    );
    setEducationList(updatedEducationList);
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: Date.now(),
      name: '',
      degree: '',
      year: '',
      isOpen: true,
    };
    const updatedEducationList = [...educationList, newEducation];
    setEducationList(updatedEducationList);
  };

  const handleDeleteEducation = (index) => {
    const itemToDelete = educationList[index];
    const updatedEducationList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedEducationList);

    notify(itemToDelete);
  };

  const handleUndo = (itemToDelete) => {
    return () => {
      setEducationList((prevEducationList) => {
        // Check if the item is already in the list to prevent duplicates
        if (!prevEducationList.includes(itemToDelete)) {
          return [...prevEducationList, itemToDelete];
        }
        return prevEducationList;
      });
    };
  };

  const notify = (itemToDelete) =>
    toast(
      <ToastMsg
        itemName={itemToDelete.name}
        handleUndo={handleUndo(itemToDelete)}
      />
    );

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
