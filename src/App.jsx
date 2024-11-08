import { useState } from 'react';
import CvForm from './components/cv-form/cv-form.jsx';
import CvPrint from './components/cv-print/cv-print.jsx';

function App() {
    const [firstName, setFirstName] = useState('');
    const handleFirstNameChange = (name) => {
        setFirstName(name);
    };

    const [lastName, setLastName] = useState('');
    const handleLastNameChange = (name) => {
        setLastName(name);
    };

    return (
    <div>
      <CvForm onFirstNameChange={handleFirstNameChange} onLastNameChange={handleLastNameChange} />
      <CvPrint firstName={firstName} lastName={lastName}/>
    </div>
  );
}

export default App;
