import PropTypes from 'prop-types';

function GeneralInfoForm({ generalInfo, onGeneralInfoChange }) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        onGeneralInfoChange(name, value);
    };

    return (
        <section>
            <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={generalInfo.firstName}
                onChange={handleChange}
            />
            <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={generalInfo.lastName}
                onChange={handleChange}
            />
            <input 
                name="email"
                type="text"
                placeholder="Email"
                value={generalInfo.email}
                onChange={handleChange} />
            <input 
                name="phone"
                type="text"
                placeholder="Phone"
                value={generalInfo.phone}
                onChange={handleChange} />       
        </section>
    );
}

GeneralInfoForm.propTypes = {
    generalInfo: PropTypes.object.isRequired,
    onGeneralInfoChange: PropTypes.func.isRequired,
};

export default GeneralInfoForm;
