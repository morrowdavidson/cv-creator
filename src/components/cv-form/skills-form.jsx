import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Form,
  SmallInput,
  IconButton,
  UndoMessage,
  UndoTimer,
} from './CommonStyles';
import { Trash, RotateCcw } from 'react-feather';
import UndoNotification from './UndoNotification';

function SkillsForm({ skillList, setSkillList }) {
  const [deletedItem, setDeletedItem] = useState(null);
  const [showUndo, setShowUndo] = useState(false);
  const [undoTimeout, setUndoTimeout] = useState(null);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSkillList = skillList.map((skill, i) =>
      i === index ? { ...skill, [name]: value } : skill
    );
    setSkillList(updatedSkillList);
  };

  const handleDeleteSkill = (index) => {
    const itemToDelete = skillList[index];
    setDeletedItem(itemToDelete);
    const updatedSkillList = skillList.filter((_, i) => i !== index);
    setSkillList(updatedSkillList);
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
    setSkillList([...skillList, deletedItem]);
    setDeletedItem(null);
    setShowUndo(false);

    // Clear the timeout when undo is clicked
    if (undoTimeout) {
      clearTimeout(undoTimeout);
    }
  };

  return (
    <>
      {showUndo && (
        <UndoNotification
          deletedItem={deletedItem}
          onUndo={handleUndo}
          onTimeout={() => setShowUndo(false)}
        />
      )}
      {skillList.map((skill, index) => (
        <Form key={index}>
          <SmallInput
            type="text"
            name="name"
            placeholder="Skill"
            value={skill.name}
            onChange={(event) => handleInputChange(index, event)}
          />
          <IconButton type="button" onClick={() => handleDeleteSkill(index)}>
            <Trash size={16} />
          </IconButton>
        </Form>
      ))}
    </>
  );
}

SkillsForm.propTypes = {
  skillList: PropTypes.array.isRequired,
  setSkillList: PropTypes.func.isRequired,
};

export default SkillsForm;
