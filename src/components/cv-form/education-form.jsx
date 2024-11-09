import PropTypes from 'prop-types';

function EducationForm({ educationList, setEducationList }) {
    const handleInputChange = (index, event) => {
        const values = [...educationList];
        values[index][event.target.name] = event.target.value;
        setEducationList(values);
    };

    function handleAddEducation() {
        // Create a new education entry
        const newEducation = { school: '', degree: '', year: '' };
    
        // Create a new array with the existing educationList and the new entry
        const updatedEducationList = [...educationList, newEducation];
    
        // Update the state with the new array
        setEducationList(updatedEducationList);
    }

    return (
        <div>
            {educationList.map((education, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="school"
                        placeholder="School"
                        value={education.school}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        value={education.degree}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    <input
                        type="text"
                        name="year"
                        placeholder="Year"
                        value={education.year}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                </div>
            ))}
            <button type="button" onClick={handleAddEducation}>Add Education</button>
        </div>
    );
}

EducationForm.propTypes = {
    educationList: PropTypes.array.isRequired,
    setEducationList: PropTypes.func.isRequired,
};

export default EducationForm;