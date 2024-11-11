import PropTypes from 'prop-types';
import {
  Form,
  Button,
  Input,
  Label,
  Icon,
  IconButton,
  SectionHeader,
} from './CommonStyles';
import feather from 'feather-icons';
import { useEffect } from 'react';

function WorkForm({ workList, setWorkList }) {
  useEffect(() => {
    feather.replace();
  }, [workList]);

  const handleInputChange = (index, event) => {
    const values = [...workList];
    values[index][event.target.name] = event.target.value;
    setWorkList(values);
  };

  function handleAddWork() {
    // Create a new work entry
    const newWork = { company: '', title: '', date: '' };

    // Create a new array with the existing workList and the new entry
    const updatedWorkList = [...workList, newWork];

    // Update the state with the new array
    setWorkList(updatedWorkList);
  }

  function handleDeleteWork(index) {
    // Create a new array without the deleted work
    const updatedWorkList = workList.filter(function (_, i) {
      return i !== index;
    });

    // Update the state with the new array
    setWorkList(updatedWorkList);
  }

  return (
    <Form>
      {workList.map((work, index) => (
        <div key={index}>
          <SectionHeader>
            {work.company ? work.company : `Work Experience ${index + 1}`}
          </SectionHeader>
          <IconButton type="button" onClick={() => handleDeleteWork(index)}>
            <Icon data-feather="trash"></Icon>
          </IconButton>
          <Label htmlFor={`company-${index}`}>Company Name</Label>
          <Input
            type="text"
            id={`company-${index}`}
            name="company"
            value={work.company}
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
        </div>
      ))}
      <Button type="button" onClick={handleAddWork}>
        Add Work Experience
      </Button>
    </Form>
  );
}

WorkForm.propTypes = {
  workList: PropTypes.array.isRequired,
  setWorkList: PropTypes.func.isRequired,
};

export default WorkForm;
