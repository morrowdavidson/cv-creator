import PropTypes from 'prop-types';
import {
  Form,
  Fieldset,
  Label,
  Input,
  ReactQuillWrapper,
} from './CommonStyles';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

// Define custom toolbar options
const toolbarOptions = [
  ['bold', 'italic', 'underline'], // toggled buttons
  [{ list: 'ordered' }, { list: 'bullet' }], // lists
  ['clean'], // remove formatting button
];

const GeneralInfoForm = ({ generalInfo, setGeneralInfo }) => {
  const handleChange = (field, value) => {
    setGeneralInfo((prevGeneralInfo) => ({
      ...prevGeneralInfo,
      [field]: value,
    }));
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
          onChange={(e) => handleChange('fullName', e.target.value)}
        />

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={generalInfo.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />

        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={generalInfo.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />

        <Label htmlFor="aboutMe">About Me</Label>
        <ReactQuillWrapper>
          <ReactQuill
            value={generalInfo.aboutMe}
            onChange={(value) => handleChange('aboutMe', value)}
            modules={{ toolbar: toolbarOptions }}
            theme="snow"
          />
        </ReactQuillWrapper>
      </Fieldset>
    </Form>
  );
};

GeneralInfoForm.propTypes = {
  generalInfo: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    aboutMe: PropTypes.string.isRequired,
  }).isRequired,
  setGeneralInfo: PropTypes.func.isRequired,
};

export default GeneralInfoForm;
