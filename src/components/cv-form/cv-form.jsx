import PropTypes from 'prop-types';
import { useState } from 'react';

import styled from 'styled-components';
import GeneralInfoForm from './general-info-form';
import EducationForm from './education-form';
import WorkForm from './work-form';
import Skills from './skills-form';
import { SectionWrapper } from './CommonStyles';
import feather from 'feather-icons';
import { useEffect } from 'react';
import Sortable from './sortable';

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
const Icon = styled.i`
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
  margin-bottom: -2px;
  margin-right: 5px;
  color: #c656fe;
`;

const Button = styled.button`
  color: #c656fe;
  border: none;
  border-radius: 4px;
  padding: 5px;
  height: 15px;
  background-color: transparent;å
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
            <Icon data-feather="user"></Icon>
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
            <Icon data-feather="book"></Icon>
            Education
          </Header>
          <Button type="button" onClick={toggleEducationSortable}>
            {isEducationSortable ? 'Done' : 'Sort'}
          </Button>
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
            <Icon data-feather="award"></Icon>
            Skills
          </Header>
          <Button type="button" onClick={toggleSkillsSortable}>
            {isSkillsSortable ? 'Done' : 'Sort'}
          </Button>
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
            <Icon data-feather="briefcase"></Icon>
            Work Experience
          </Header>
          <Button type="button" onClick={toggleWorkSortable}>
            {isWorkSortable ? 'Done' : 'Sort'}
          </Button>
        </HeaderWrapper>
        {isWorkSortable ? (
          <Sortable list={workList} setList={setWorkList} />
        ) : (
          <WorkForm workList={workList} setWorkList={setWorkList} />
        )}
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
