import PropTypes from 'prop-types';
import { Form, Fieldset, Label, Input } from './CommonStyles';

function GeneralInfoForm({ generalInfo, onGeneralInfoChange }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onGeneralInfoChange(name, value);
  };

  return (
    <Form>
      <Fieldset>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          value={generalInfo.firstName}
          onChange={handleChange}
        />
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          name="lastName"
          type="text"
          value={generalInfo.lastName}
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
      </Fieldset>
    </Form>
  );
}

GeneralInfoForm.propTypes = {
  generalInfo: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onGeneralInfoChange: PropTypes.func.isRequired,
};

export default GeneralInfoForm;
