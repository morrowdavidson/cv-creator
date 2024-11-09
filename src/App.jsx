import { useState } from 'react';
import CvForm from './components/cv-form/cv-form.jsx';
import CvPrint from './components/cv-print/cv-print.jsx';

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    
    function handleGeneralInfoChange(field, value) {
        // Create a copy of the current generalInfo state
        const updatedGeneralInfo = {
            ...generalInfo,
        };
    
        // Update the specific field with the new value
        updatedGeneralInfo[field] = value;
    
        // Set the updated generalInfo state
        setGeneralInfo(updatedGeneralInfo);
    }

    const [educationList, setEducationList] = useState([{ school: '', degree: '', year: '' }]);
    const [workList, setWorkList] = useState([{ company: '', title: '', date: '' }]);

    return (
    <div>
      <CvForm 
        generalInfo={generalInfo}
        onGeneralInfoChange={handleGeneralInfoChange}
        educationList={educationList}
        setEducationList={setEducationList}
        workList={workList}
        setWorkList={setWorkList}
      />
      <CvPrint 
        generalInfo={generalInfo}
        educationList={educationList}
        workList={workList}
      />
    </div>
  );
}

export default App;