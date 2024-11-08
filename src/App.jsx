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
    
    const handleGeneralInfoChange = (field, value) => {
        setGeneralInfo({
            ...generalInfo,
            [field]: value,
        });
    };

    const [educationList, setEducationList] = useState([{ school: '', degree: '', year: '' }]);

    return (
    <div>
      <CvForm 
        generalInfo={generalInfo}
        onGeneralInfoChange={handleGeneralInfoChange}
        educationList={educationList}
        setEducationList={setEducationList}
      />
      <CvPrint 
        generalInfo={generalInfo}
        educationList={educationList}
      />
    </div>
  );
}

export default App;