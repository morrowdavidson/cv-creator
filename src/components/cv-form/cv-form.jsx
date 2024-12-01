import PropTypes from 'prop-types';
import { useState } from 'react';

import { styled, css } from 'styled-components';
import GeneralInfoForm from './general-info-form';
import EducationForm from './education-form';
import WorkForm from './work-form';
import Skills from './skills-form';
import { SectionWrapper } from './CommonStyles';
import Sortable from './sortable';
import { User, Book, Briefcase, Award } from 'react-feather';

const sharedIconStyles = css`
  width: 20px;
  height: 20px;
  color: #c656fe;
  margin-bottom: -2px;
  margin-right: 5px;
`;

const StyledUserIcon = styled(User)`
  ${sharedIconStyles}
`;

const StyledBookIcon = styled(Book)`
  ${sharedIconStyles}
`;

const StyledBriefcaseIcon = styled(Briefcase)`
  ${sharedIconStyles}
`;
const StyledAwardIcon = styled(Award)`
  ${sharedIconStyles}
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25em;
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
  margin-bottom: 1em;
`;

const Button = styled.button`
  color: #c656fe;
  border: none;
  border-radius: 4px;
  padding: 5px;
  height: 15px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #a442e3;
  }
`;

const CvForm = ({
  generalInfo,
  setGeneralInfo,
  educationList,
  setEducationList,
  workList,
  setWorkList,
  skillList,
  setSkillList,
}) => {
  const [isEducationSortable, setIsEducationSortable] = useState(false);
  const [isSkillsSortable, setIsSkillsSortable] = useState(false);
  const [isWorkSortable, setIsWorkSortable] = useState(false);

  const toggleEducationSortable = () => {
    setIsEducationSortable(!isEducationSortable);
  };

  const toggleSkillsSortable = () => {
    setIsSkillsSortable(!isSkillsSortable);
  };

  const toggleWorkSortable = () => {
    setIsWorkSortable(!isWorkSortable);
  };

  return (
    <>
      <SectionWrapper>
        <HeaderWrapper>
          <Header>
            {' '}
            <StyledUserIcon />
            Personal Information
          </Header>
        </HeaderWrapper>
        <GeneralInfoForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
      </SectionWrapper>
      <SectionWrapper>
        <HeaderWrapper>
          <Header>
            <StyledBookIcon />
            Education
          </Header>
          {educationList.length > 1 ? (
            <Button type="button" onClick={toggleEducationSortable}>
              {isEducationSortable ? 'Done' : 'Sort'}
            </Button>
          ) : null}
        </HeaderWrapper>

        {isEducationSortable ? (
          <Sortable list={educationList} setList={setEducationList} />
        ) : (
          <EducationForm
            educationList={educationList}
            setEducationList={setEducationList}
          />
        )}
      </SectionWrapper>
      <SectionWrapper>
        <HeaderWrapper>
          <Header>
            <StyledAwardIcon />
            Skills
          </Header>
          {skillList.length > 1 ? (
            <Button type="button" onClick={toggleSkillsSortable}>
              {isSkillsSortable ? 'Done' : 'Sort'}
            </Button>
          ) : null}
        </HeaderWrapper>
        {isSkillsSortable ? (
          <Sortable list={skillList} setList={setSkillList} />
        ) : (
          <Skills skillList={skillList} setSkillList={setSkillList} />
        )}
      </SectionWrapper>
      <SectionWrapper>
        <HeaderWrapper>
          <Header>
            <StyledBriefcaseIcon />
            Work Experience
          </Header>
          {workList.length > 1 ? (
            <Button type="button" onClick={toggleWorkSortable}>
              {isWorkSortable ? 'Done' : 'Sort'}
            </Button>
          ) : null}
        </HeaderWrapper>
        {isWorkSortable ? (
          <Sortable list={workList} setList={setWorkList} />
        ) : (
          <WorkForm workList={workList} setWorkList={setWorkList} />
        )}
      </SectionWrapper>
    </>
  );
};

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
