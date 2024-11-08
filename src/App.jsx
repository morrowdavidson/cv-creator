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