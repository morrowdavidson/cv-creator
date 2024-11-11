import { useState, useEffect } from 'react';
import CvForm from './components/cv-form/cv-form.jsx';
import CvPrint from './components/cv-print/cv-print.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const FormWrapper = styled.div`
  flex: 1;
  position: sticky;
  margin-right: 20px;
  top: 0;
  align-self: flex-start;
`;

const PrintWrapper = styled.div`
  flex: 1;
`;

function App() {
  const [generalInfo, setGeneralInfo] = useState(() => {
    const saved = localStorage.getItem('generalInfo');
    const initialValue = JSON.parse(saved);
    return initialValue || { fullName: '', email: '', phone: '', aboutMe: '' };
  });

  const [educationList, setEducationList] = useState(() => {
    const saved = localStorage.getItem('educationList');
    const initialValue = JSON.parse(saved);
    return initialValue || [{ school: '', degree: '', year: '' }];
  });

  const [workList, setWorkList] = useState(() => {
    const saved = localStorage.getItem('workList');
    const initialValue = JSON.parse(saved);
    return initialValue || [{ company: '', title: '', date: '' }];
  });

  const [skillList, setSkillList] = useState(() => {
    const saved = localStorage.getItem('skillList');
    const initialValue = JSON.parse(saved);
    return initialValue || [{ skill: '' }];
  });

  // Save state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('generalInfo', JSON.stringify(generalInfo));
  }, [generalInfo]);

  useEffect(() => {
    localStorage.setItem('educationList', JSON.stringify(educationList));
  }, [educationList]);

  useEffect(() => {
    localStorage.setItem('workList', JSON.stringify(workList));
  }, [workList]);

  useEffect(() => {
    localStorage.setItem('skillList', JSON.stringify(skillList));
  }, [skillList]);

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

  return (
    <Container>
      <FormWrapper>
        <CvForm
          generalInfo={generalInfo}
          onGeneralInfoChange={handleGeneralInfoChange}
          educationList={educationList}
          setEducationList={setEducationList}
          workList={workList}
          setWorkList={setWorkList}
          skillList={skillList}
          setSkillList={setSkillList}
        />
      </FormWrapper>
      <PrintWrapper>
        <CvPrint
          generalInfo={generalInfo}
          educationList={educationList}
          workList={workList}
          skillList={skillList}
        />
      </PrintWrapper>
    </Container>
  );
}

export default App;
