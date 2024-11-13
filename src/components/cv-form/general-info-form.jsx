import PropTypes from 'prop-types';
import { Form, Fieldset, Label, Input } from './CommonStyles';
import ReactQuill from 'react-quill';

// Define custom toolbar options
const toolbarOptions = [
  ['bold', 'italic', 'underline'], // toggled buttons
  [{ list: 'ordered' }, { list: 'bullet' }], // lists
  ['clean'], // remove formatting button
];

function GeneralInfoForm({ generalInfo, onGeneralInfoChange }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onGeneralInfoChange(name, value);
  };

  const handleAboutMeChange = (value) => {
    onGeneralInfoChange('aboutMe', value);
  };

  return (
    <Form>
      <Fieldset>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          value={generalInfo.fullName}
          onChange={handleChange}
        />

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="text"
          value={generalInfo.email}
          onChange={handleChange}
        />
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="text"
          value={generalInfo.phone}
          onChange={handleChange}
        />
        <Label htmlFor="aboutMe">About Me</Label>
        <ReactQuill
          id="aboutMe"
          value={generalInfo.aboutMe}
          onChange={handleAboutMeChange}
          modules={{ toolbar: toolbarOptions }}
        />
      </Fieldset>
    </Form>
  );
}

GeneralInfoForm.propTypes = {
  generalInfo: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    aboutMe: PropTypes.string.isRequired,
  }).isRequired,
  onGeneralInfoChange: PropTypes.func.isRequired,
};

export default GeneralInfoForm;
