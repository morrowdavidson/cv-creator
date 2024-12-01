import PropTypes from 'prop-types';
import { Form, SmallInput, IconButton, AddButton } from './CommonStyles';
import { Trash } from 'react-feather';
import { toast } from 'react-toastify';
import ToastMsg from './ToastMsg';
function SkillsForm({ skillList, setSkillList }) {
  function handleAddSkill() {
    // Create a new skill entry
    const newSkill = { id: Date.now(), name: '' };

    // Create a new array with the existing skillList and the new entry
    const updatedSkillList = [...skillList, newSkill];

    // Update the state with the new array
    setSkillList(updatedSkillList);
  }

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSkillList = skillList.map((skill, i) =>
      i === index ? { ...skill, [name]: value } : skill
    );
    setSkillList(updatedSkillList);
  };

  const handleDeleteSkill = (index) => {
    const itemToDelete = skillList[index];
    const updatedSkillList = skillList.filter((_, i) => i !== index);
    setSkillList(updatedSkillList);

    notify(itemToDelete);
  };

  const handleUndo = (itemToDelete) => {
    return () => {
      setSkillList((prevSkillList) => {
        // Check if the item is already in the list to prevent duplicates
        if (!prevSkillList.includes(itemToDelete)) {
          return [...prevSkillList, itemToDelete];
        }
        return prevSkillList;
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
    <>
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
      <AddButton type="button" onClick={handleAddSkill}>
        Add Skill
      </AddButton>
    </>
  );
}

SkillsForm.propTypes = {
  skillList: PropTypes.array.isRequired,
  setSkillList: PropTypes.func.isRequired,
};

export default SkillsForm;
