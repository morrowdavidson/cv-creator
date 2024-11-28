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
import styled from 'styled-components';

const exampleInfo = { ...dwightInfo };

const TimerBar = styled.div`
  height: 2px;
  background-color: #ff6666;
  transition: width 1s linear;
`;

const UndoButton = styled.button`
  background-color: #fde9e9;
  color: #ff6666;
  padding: 10px 15px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function App() {
  const [generalInfo, setGeneralInfo] = useState(exampleInfo.generalInfo);
  const [educationList, setEducationList] = useState(exampleInfo.educationList);
  const [workList, setWorkList] = useState(exampleInfo.workList);
  const [skillList, setSkillList] = useState(exampleInfo.skillList);
  const [showUndo, setShowUndo] = useState(false);
  const [previousState, setPreviousState] = useState({});
  const [timer, setTimer] = useState(0);

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

  useEffect(() => {
    let timerId;
    if (showUndo) {
      setTimer(5); // Set timer for 5 seconds
      timerId = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            setShowUndo(false);
            clearInterval(timerId);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [showUndo]);

  const setExampleInfo = () => {
    saveCurrentState();
    setGeneralInfo(exampleInfo.generalInfo);
    setEducationList(exampleInfo.educationList);
    setWorkList(exampleInfo.workList);
    setSkillList(exampleInfo.skillList);
    setShowUndo(true);
  };

  const clearInfo = () => {
    saveCurrentState();
    setEducationList([]);
    setWorkList([]);
    setSkillList([]);
    setGeneralInfo({
      fullName: '',
      email: '',
      phone: '',
      aboutMe: '<p></p>',
    });
    setShowUndo(true);
  };

  const saveCurrentState = () => {
    setPreviousState({
      generalInfo,
      educationList,
      workList,
      skillList,
    });
  };

  const handleUndo = () => {
    setGeneralInfo(previousState.generalInfo);
    setEducationList(previousState.educationList);
    setWorkList(previousState.workList);
    setSkillList(previousState.skillList);
    setShowUndo(false);
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
          {showUndo && (
            <div>
              <UndoButton onClick={handleUndo}>
                <RotateCcw size={12} />
                Undo
                <TimerBar style={{ width: `${(timer / 5) * 100}%` }} />
              </UndoButton>
            </div>
          )}
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
    </>
  );
}

export default App;
