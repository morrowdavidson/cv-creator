import { useState, useEffect } from 'react';
import CvForm from './components/cv-form/cv-form.jsx';
import CvPrint from './components/cv-print/cv-print.jsx';
import dwightInfo from './data/dwightsInfo';
import {
  FormPrintContainer,
  FormWrapper,
  PrintWrapper,
  Button,
  Header,
  Heading,
  ActionButtons,
} from './AppStyles';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { Feather } from 'react-feather';

const exampleInfo = { ...dwightInfo };

function useLocalStorage(key, value) {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
}

function getInitialState(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initialValue = JSON.parse(saved);
  return initialValue || defaultValue;
}

function App() {
  const [generalInfo, setGeneralInfo] = useState(() =>
    getInitialState('generalInfo', exampleInfo.generalInfo)
  );
  const [educationList, setEducationList] = useState(() =>
    getInitialState('educationList', exampleInfo.educationList)
  );
  const [workList, setWorkList] = useState(() =>
    getInitialState('workList', exampleInfo.workList)
  );
  const [skillList, setSkillList] = useState(() =>
    getInitialState('skillList', exampleInfo.skillList)
  );

  useLocalStorage('generalInfo', generalInfo);
  useLocalStorage('educationList', educationList);
  useLocalStorage('workList', workList);
  useLocalStorage('skillList', skillList);

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
  const contentRef = useRef();

  const handlePrint = useReactToPrint({ contentRef });

  return (
    <>
      <Header>
        <Heading>
          <Feather size={24} color="#c656fe" />
          CV Creator
        </Heading>
        <ActionButtons>
          <Button onClick={setExampleInfo}>Example Resume</Button>
          <Button onClick={clearInfo}>Clear Resume</Button>
          <Button onClick={handlePrint}>Print</Button>
        </ActionButtons>
      </Header>

      <FormPrintContainer>
        <FormWrapper>
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
            contentRef={contentRef}
          />
        </PrintWrapper>
      </FormPrintContainer>
    </>
  );
}

export default App;
