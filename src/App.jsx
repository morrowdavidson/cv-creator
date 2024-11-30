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
  LightButton,
} from './AppStyles';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { Feather, RotateCcw } from 'react-feather';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const exampleInfo = { ...dwightInfo };

function App() {
  const [generalInfo, setGeneralInfo] = useState(exampleInfo.generalInfo);
  const [educationList, setEducationList] = useState(exampleInfo.educationList);
  const [workList, setWorkList] = useState(exampleInfo.workList);
  const [skillList, setSkillList] = useState(exampleInfo.skillList);

  useEffect(() => {
    const savedCategories = [
      'generalInfo',
      'educationList',
      'workList',
      'skillList',
    ];
    const setStateFunctions = [
      setGeneralInfo,
      setEducationList,
      setWorkList,
      setSkillList,
    ];

    savedCategories.forEach((key, index) => {
      const savedCategory = localStorage.getItem(key);
      if (savedCategory) {
        setStateFunctions[index](JSON.parse(savedCategory));
      }
    });
  }, []);

  useEffect(() => {
    const savedCategories = [
      'generalInfo',
      'educationList',
      'workList',
      'skillList',
    ];
    const savedInfo = [generalInfo, educationList, workList, skillList];

    savedCategories.forEach((key, index) => {
      localStorage.setItem(key, JSON.stringify(savedInfo[index]));
    });
  }, [generalInfo, educationList, workList, skillList]);

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
          <LightButton onClick={setExampleInfo}>Example Resume</LightButton>
          <LightButton onClick={clearInfo}>Clear Resume</LightButton>
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
