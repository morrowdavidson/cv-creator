import PropTypes from 'prop-types';
import {
  Form,
  Button,
  Input,
  Label,
  AddButton,
  IconButton,
} from './CommonStyles';
import Accordion from '../Accordion';
import { Trash, RotateCcw } from 'react-feather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EducationForm({ educationList, setEducationList }) {
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducationList = educationList.map((education, i) =>
      i === index ? { ...education, [name]: value } : education
    );
    setEducationList(updatedEducationList);
  };

  const notify = (itemToDelete) =>
    toast(
      <IconButton type="button" onClick={handleUndoEducation(itemToDelete)}>
        <RotateCcw size={16} /> Undo {itemToDelete.name} deletion
      </IconButton>
    );

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

  const handleUndoEducation = (itemToDelete) => {
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
