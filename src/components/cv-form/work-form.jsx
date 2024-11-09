import PropTypes from 'prop-types';

function WorkForm({ workList, setWorkList }) {
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

    return (
        <div>
            {workList.map((work, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={work.company}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        value={work.title}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    <input
                        type="text"
                        name="date"
                        placeholder="Date of Employment"
                        value={work.date}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                </div>
            ))}
            <button type="button" onClick={handleAddWork}>Add Work Experience</button>
        </div>
    );
}

WorkForm.propTypes = {
    workList: PropTypes.array.isRequired,
    setWorkList: PropTypes.func.isRequired,
};

export default WorkForm;