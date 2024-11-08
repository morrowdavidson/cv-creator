import PropTypes from 'prop-types';

function EducationForm({ educationList, setEducationList }) {
    const handleInputChange = (index, event) => {
        const values = [...educationList];
        values[index][event.target.name] = event.target.value;
        setEducationList(values);
    };

    const handleAddEducation = () => {
        setEducationList([...educationList, { school: '', degree: '', year: '' }]);
    };

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