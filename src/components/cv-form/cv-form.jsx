import PropTypes from 'prop-types';
import styled from 'styled-components';
import GeneralInfoForm from './general-info-form';
import EducationForm from './education-form';
import WorkForm from './work-form';
import Skills from './skills-form';
import { SectionWrapper } from './CommonStyles';

const Header = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25em;
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
  margin-bottom: 1em;
`;

function CvForm({
  generalInfo,
  onGeneralInfoChange,
  educationList,
  setEducationList,
  workList,
  setWorkList,
  skillList,
  setSkillList,
}) {
  return (
    <>
      <SectionWrapper>
        <Header>Personal Information</Header>
        <GeneralInfoForm
          generalInfo={generalInfo}
          onGeneralInfoChange={onGeneralInfoChange}
        />
      </SectionWrapper>
      <SectionWrapper>
        <Header>Education</Header>
        <EducationForm
          educationList={educationList}
          setEducationList={setEducationList}
        />
      </SectionWrapper>
      <SectionWrapper>
        <Header>Skills</Header>
        <Skills skillList={skillList} setSkillList={setSkillList} />
      </SectionWrapper>
      <SectionWrapper>
        <Header>Work Experience</Header>
        <WorkForm workList={workList} setWorkList={setWorkList} />
      </SectionWrapper>
    </>
  );
}

CvForm.propTypes = {
  generalInfo: PropTypes.object.isRequired,
  onGeneralInfoChange: PropTypes.func.isRequired,
  educationList: PropTypes.array.isRequired,
  setEducationList: PropTypes.func.isRequired,
  workList: PropTypes.array.isRequired,
  setWorkList: PropTypes.func.isRequired,
  skillList: PropTypes.array.isRequired,
  setSkillList: PropTypes.func.isRequired,
};

export default CvForm;
