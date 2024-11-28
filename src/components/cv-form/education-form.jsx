import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Button, Input, Label, AddButton } from './CommonStyles';
import Accordion from '../Accordion';
import { Trash } from 'react-feather';
import UndoNotification from './UndoNotification';

function EducationForm({ educationList, setEducationList }) {
  const [deletedItem, setDeletedItem] = useState(null);
  const [showUndo, setShowUndo] = useState(false);
  const [undoTimeout, setUndoTimeout] = useState(null);

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
    setDeletedItem(itemToDelete);
    const updatedEducationList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedEducationList);
    setShowUndo(true);

    // Clear the previous timeout if it exists
    if (undoTimeout) {
      clearTimeout(undoTimeout);
    }

    // Set a new timeout to hide the undo message after 4 seconds
    const timeoutId = setTimeout(() => {
      setShowUndo(false);
    }, 4000);
    setUndoTimeout(timeoutId);
  };

  const handleUndo = () => {
    setEducationList([...educationList, deletedItem]);
    setDeletedItem(null);
    setShowUndo(false);

    // Clear the timeout when undo is clicked
    if (undoTimeout) {
      clearTimeout(undoTimeout);
    }
  };

  return (
    <Form>
      {showUndo && (
        <UndoNotification
          deletedItem={deletedItem}
          onUndo={handleUndo}
          onTimeout={() => setShowUndo(false)}
        />
      )}
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
