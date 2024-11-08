function GeneralInfoForm({onFirstNameChange, onLastNameChange}) {
    const handleFirstChange = (event) => {
        onFirstNameChange(event.target.value);
    };
    const handleLastChange = (event) => {
        onLastNameChange(event.target.value);
    };
    return (
        <section>
            <input onChange={handleFirstChange} type="text" placeholder="First Name" />
            <input onChange={handleLastChange} type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />        
        </section>
    );
}

export default GeneralInfoForm;

