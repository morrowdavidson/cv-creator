import { useState, useEffect } from 'react';
import CvForm from './components/cv-form/cv-form.jsx';
import CvPrint from './components/cv-print/cv-print.jsx';
import styled from 'styled-components';
import dwightInfo from './data/dwightsInfo';

const exampleInfo = dwightInfo;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const FormWrapper = styled.div`
  margin-right: 20px;
  align-self: flex-start;
`;

const PrintWrapper = styled.div``;

const Button = styled.button`
  padding: 10px 15px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem(key);
    const initialValue = JSON.parse(saved);
    return initialValue || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

function App() {
  const [generalInfo, setGeneralInfo] = useLocalStorageState(
    'generalInfo',
    exampleInfo.generalInfo
  );
  const [educationList, setEducationList] = useLocalStorageState(
    'educationList',
    exampleInfo.educationList
  );
  const [workList, setWorkList] = useLocalStorageState(
    'workList',
    exampleInfo.workList
  );
  const [skillList, setSkillList] = useLocalStorageState(
    'skillList',
    exampleInfo.skillList
  );

  const setExampleInfo = () => {
    setGeneralInfo(exampleInfo.generalInfo);
    setEducationList(exampleInfo.educationList);
    setWorkList(exampleInfo.workList);
    setSkillList(exampleInfo.skillList);
  };

  const clearInfo = () => {
    setEducationList([]);
    setWorkList([]);
    setSkillList([]);
    setGeneralInfo({
      fullName: '',
      email: '',
      phone: '',
      aboutMe: '<p></p>',
    });
  };

  return (
    <Container>
      <FormWrapper>
        <Button onClick={setExampleInfo}>Example Resume</Button>
        <Button onClick={clearInfo}>Clear Resume</Button>
        <CvForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
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
