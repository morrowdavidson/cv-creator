import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {
  Form,
  Button,
  Input,
  Label,
  AddButton,
  UndoMessage,
  UndoTimer,
  IconButton,
} from './CommonStyles';
import Accordion from '../Accordion';
import { Trash, RotateCcw } from 'react-feather';

function EducationForm({ educationList, setEducationList }) {
  const [deletedItem, setDeletedItem] = useState(null);
  const [showUndo, setShowUndo] = useState(false);
  const [undoTimeout, setUndoTimeout] = useState(null);
  const [timerWidth, setTimerWidth] = useState(100);
  const [intervalId, setIntervalId] = useState(null);

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
    setTimerWidth(100);

    // Clear the previous timeout and interval if they exist
    if (undoTimeout) {
      clearTimeout(undoTimeout);
    }
    if (intervalId) {
      clearInterval(intervalId);
    }

    // Set a new timeout to hide the undo message after 4 seconds
    const timeoutId = setTimeout(() => {
      setShowUndo(false);
    }, 4000);
    setUndoTimeout(timeoutId);

    // Update the timer width every 100ms
    const newIntervalId = setInterval(() => {
      setTimerWidth((prevWidth) => Math.max(prevWidth - 2.5, 0));
    }, 100);
    setIntervalId(newIntervalId);

    // Clear the interval when the timeout completes
    setTimeout(() => {
      clearInterval(newIntervalId);
    }, 4000);
  };

  const handleUndo = () => {
    setEducationList([...educationList, deletedItem]);
    setDeletedItem(null);
    setShowUndo(false);

    // Clear the timeout and interval when undo is clicked
    if (undoTimeout) {
      clearTimeout(undoTimeout);
    }
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  return (
    <Form>
      {showUndo && (
        <UndoMessage>
          <span>{deletedItem.name} deleted</span>
          <IconButton type="button" onClick={handleUndo}>
            <RotateCcw size={16} /> Undo
          </IconButton>
          <UndoTimer width={timerWidth} />
        </UndoMessage>
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
