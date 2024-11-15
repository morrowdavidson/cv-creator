import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { Form, AddButton, SmallInput, Icon, IconButton } from './CommonStyles';
import feather from 'feather-icons';

function Skills({ skillList, setSkillList }) {
  useEffect(() => {
    feather.replace();
  }, [skillList]);

  const handleInputChange = (index, event) => {
    const values = [...skillList];
    values[index][event.target.name] = event.target.value;
    setSkillList(values);
  };

  function handleAddSkill() {
    // Create a new skill entry
    const newSkill = { skill: '' };

    // Create a new array with the existing skillList and the new entry
    const updatedSkillList = [...skillList, newSkill];

    // Update the state with the new array
    setSkillList(updatedSkillList);
  }

  function handleDeleteSkill(index) {
    // Create a new array without the deleted skill
    const updatedSkillList = skillList.filter(function (_, i) {
      return i !== index;
    });

    // Update the state with the new array
    setSkillList(updatedSkillList);
  }

  return (
    <>
      {skillList.map((skill, index) => (
        <Form key={index}>
          <SmallInput
            type="text"
            name="skill"
            placeholder="Skill"
            value={skill.skill}
            onChange={(event) => handleInputChange(index, event)}
          />
          <IconButton type="button" onClick={() => handleDeleteSkill(index)}>
            <Icon data-feather="trash"></Icon>
          </IconButton>
        </Form>
      ))}
      <AddButton type="button" onClick={handleAddSkill}>
        Add Skill
      </AddButton>
    </>
  );
}

Skills.propTypes = {
  skillList: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string.isRequired,
    })
  ).isRequired,
  setSkillList: PropTypes.func.isRequired,
};

export default Skills;
