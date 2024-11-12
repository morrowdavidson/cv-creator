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
  margin-right: 20px;
  align-self: flex-start;
`;

const PrintWrapper = styled.div`
  flex: 1;
`;

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

const dwightInfo = {
  generalInfo: {
    fullName: 'Dwight Schrute',
    email: 'dwight.schrute@dundermifflin.com',
    phone: '123-456-7890',
    aboutMe:
      '<p>I am a dedicated and hardworking Assistant to the Regional Manager at Dunder Mifflin. With a strong background in sales and a passion for beet farming, I strive to achieve excellence in all my endeavors. My goal is to become the Regional Manager and lead the Scranton branch to new heights.</p>',
  },
  educationList: [
    {
      school: 'Scranton High School',
      degree: 'High School Diploma',
      year: '1993',
    },
    {
      school: 'Pennsylvania State University',
      degree: 'Bachelor of Business Administration',
      year: '1997',
    },
  ],
  workList: [
    {
      company: 'Dunder Mifflin',
      title: 'Assistant to the Regional Manager',
      date: '2001-Present',
      description: `
      <ul>
          <li>Consistently ranked as the top salesman in the Scranton branch, achieving the highest sales numbers for multiple consecutive years.</li>
          <li>Awarded Employee of the Month several times for outstanding performance and dedication to the company.</li>
          <li>Successfully managed office operations and supported the Regional Manager in various administrative tasks, contributing to the overall efficiency of the branch.</li>
          <li>Developed and conducted sales training programs for new hires, improving their sales techniques and contributing to the overall success of the sales team.</li>
          <li>Maintained strong relationships with key clients, resulting in high client retention rates and repeat business.</li>
        </ul>
      `,
    },
    {
      company: 'Schrute Farms',
      title: 'Owner',
      date: '1997-Present',
      description: ` 
        <ul>
          <li>Implemented sustainable and organic farming practices, resulting in high-quality beet production and increased farm profitability.</li>
          <li>Developed and promoted Schrute Farms as a successful agrotourism destination, attracting visitors for farm tours, bed and breakfast stays, and beet-related activities.</li>
          <li>Expanded the farm's operations by acquiring additional land and diversifying crop production, leading to increased revenue and business growth.</li>
        </ul>
      `,
    },
  ],
  skillList: [
    { skill: 'Sales' },
    { skill: 'Leadership' },
    { skill: 'Beet Farming' },
    { skill: 'Martial Arts' },
  ],
};

function App() {
  const setDwightInfo = () => {
    setGeneralInfo(dwightInfo.generalInfo);
    setEducationList(dwightInfo.educationList);
    setWorkList(dwightInfo.workList);
    setSkillList(dwightInfo.skillList);
  };

  const clearInfo = () => {
    setGeneralInfo({
      fullName: dwightInfo.generalInfo.fullName,
      email: dwightInfo.generalInfo.email,
      phone: dwightInfo.generalInfo.phone,
      aboutMe: '<p><br><p>',
    });
    setEducationList([]);
    setWorkList([]);
    setSkillList([]);
  };
  const [generalInfo, setGeneralInfo] = useState(() => {
    const saved = localStorage.getItem('generalInfo');
    const initialValue = JSON.parse(saved);
    return initialValue || dwightInfo.generalInfo;
  });

  const [educationList, setEducationList] = useState(() => {
    const saved = localStorage.getItem('educationList');
    const initialValue = JSON.parse(saved);
    return initialValue || dwightInfo.educationList;
  });

  const [workList, setWorkList] = useState(() => {
    const saved = localStorage.getItem('workList');
    const initialValue = JSON.parse(saved);
    return initialValue || dwightInfo.workList;
  });

  const [skillList, setSkillList] = useState(() => {
    const saved = localStorage.getItem('skillList');
    const initialValue = JSON.parse(saved);
    return initialValue || dwightInfo.skillList;
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
        <Button onClick={setDwightInfo}>Example Resume</Button>
        <Button onClick={clearInfo}>Clear Resume</Button>
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
