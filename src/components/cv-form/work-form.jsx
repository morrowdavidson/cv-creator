import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  Form,
  Button,
  Input,
  Label,
  ReactQuillWrapper,
  AddButton,
} from './CommonStyles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Accordion from '../Accordion';
import { Trash } from 'react-feather';
import UndoNotification from './UndoNotification';

// Define custom toolbar options
const toolbarOptions = [
  ['bold', 'italic', 'underline'], // toggled buttons
  [{ list: 'ordered' }, { list: 'bullet' }], // lists
  ['clean'], // remove formatting button
];

function WorkForm({ workList, setWorkList }) {
  const [deletedItem, setDeletedItem] = useState(null);
  const [showUndo, setShowUndo] = useState(false);
  const [undoTimeout, setUndoTimeout] = useState(null);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedWorkList = workList.map((work, i) =>
      i === index ? { ...work, [name]: value } : work
    );
    setWorkList(updatedWorkList);
  };

  const handleDescriptionChange = (index, value) => {
    const values = [...workList];
    values[index].description = value;
    setWorkList(values);
  };

  function handleAddWork() {
    // Create a new work entry
    const newWork = {
      id: Date.now(),
      name: '',
      title: '',
      date: '',
      description: '',
      isOpen: true,
    };

    // Create a new array with the existing workList and the new entry
    const updatedWorkList = [...workList, newWork];

    // Update the state with the new array
    setWorkList(updatedWorkList);
  }

  function handleDeleteWork(index) {
    const itemToDelete = workList[index];
    setDeletedItem(itemToDelete);

    // Create a new array without the deleted work
    const updatedWorkList = workList.filter((_, i) => i !== index);

    // Update the state with the new array
    setWorkList(updatedWorkList);
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
  }

  const handleUndo = () => {
    setWorkList([...workList, deletedItem]);
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
      {workList.map((work, index) => (
        <div key={index}>
          <Accordion
            openState={work.isOpen}
            title={work.name ? work.name : `Work Experience ${index + 1}`}
          >
            <Label htmlFor={`company-${index}`}>Company Name</Label>
            <Input
              type="text"
              id={`company-${index}`}
              name="name"
              value={work.name}
              onChange={(event) => handleInputChange(index, event)}
            />
            <Label htmlFor={`title-${index}`}>Title</Label>
            <Input
              type="text"
              id={`title-${index}`}
              name="title"
              value={work.title}
              onChange={(event) => handleInputChange(index, event)}
            />
            <Label htmlFor={`date-${index}`}>Date</Label>
            <Input
              type="text"
              id={`date-${index}`}
              name="date"
              value={work.date}
              onChange={(event) => handleInputChange(index, event)}
            />
            <Label htmlFor={`description-${index}`}>Description</Label>
            <ReactQuillWrapper>
              <ReactQuill
                value={work.description}
                onChange={(value) => handleDescriptionChange(index, value)}
                theme="snow"
                modules={{ toolbar: toolbarOptions }}
              />
            </ReactQuillWrapper>
            <Button type="button" onClick={() => handleDeleteWork(index)}>
              <Trash size={16} /> Delete
            </Button>
          </Accordion>
        </div>
      ))}
      <AddButton type="button" onClick={handleAddWork}>
        Add Work Experience
      </AddButton>
    </Form>
  );
}

WorkForm.propTypes = {
  workList: PropTypes.array.isRequired,
  setWorkList: PropTypes.func.isRequired,
};

export default WorkForm;
