import PropTypes from 'prop-types';
import styled from 'styled-components';
import GeneralInfoForm from './general-info-form';
import EducationForm from './education-form';
import WorkForm from './work-form';
import Skills from './skills-form';
import { SectionWrapper } from './CommonStyles';
import feather from 'feather-icons';
import { useEffect } from 'react';

const Header = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25em;
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
  margin-bottom: 1em;
`;
const Icon = styled.i`
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
  margin-bottom: -2px;
  margin-right: 5px;
  color: #c656fe;
`;

function CvForm({
  generalInfo,
  setGeneralInfo,
  educationList,
  setEducationList,
  workList,
  setWorkList,
  skillList,
  setSkillList,
}) {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <SectionWrapper>
        <Header>
          {' '}
          <Icon data-feather="user"></Icon>
          Personal Information
        </Header>
        <GeneralInfoForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
      </SectionWrapper>
      <SectionWrapper>
        <Header>
          {' '}
          <Icon data-feather="book-open"></Icon>
          Education
        </Header>
        <EducationForm
          educationList={educationList}
          setEducationList={setEducationList}
        />
      </SectionWrapper>
      <SectionWrapper>
        <Header>
          {' '}
          <Icon data-feather="award"></Icon>
          Skills
        </Header>
        <Skills skillList={skillList} setSkillList={setSkillList} />
      </SectionWrapper>
      <SectionWrapper>
        <Header>
          {' '}
          <Icon data-feather="briefcase"></Icon>
          Work Experience
        </Header>
        <WorkForm workList={workList} setWorkList={setWorkList} />
      </SectionWrapper>
    </>
  );
}

CvForm.propTypes = {
  generalInfo: PropTypes.object.isRequired,
  setGeneralInfo: PropTypes.func.isRequired,
  educationList: PropTypes.array.isRequired,
  setEducationList: PropTypes.func.isRequired,
  workList: PropTypes.array.isRequired,
  setWorkList: PropTypes.func.isRequired,
  skillList: PropTypes.array.isRequired,
  setSkillList: PropTypes.func.isRequired,
};

export default CvForm;
