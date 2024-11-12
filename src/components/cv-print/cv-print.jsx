import PropTypes from 'prop-types';
import styled from 'styled-components';

const CvPrintContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  position: sticky;
  top: 0;
`;

const CvPrintWrapper = styled.div`
  width: 600px; /* Standard paper width */
  height: 800px; /* Standard paper height */
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  font-family: Arial, sans-serif;
`;

const Heading1 = styled.h1`
  margin-top: 0;
  font-size: 24px;
  text-align: center;
`;

const Heading2 = styled.h2`
  margin-top: 20px;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
`;

const UnorderedList = styled.ul`
  margin: 0 0 10px;
  padding-left: 20px;
  font-size: 14px;
`;

const Paragraph = styled.p`
  margin: 0 0 5px;
  font-size: 14px;
  ul {
    margin: 0 0 10px;
    padding-left: 20px; /* Remove padding */
    font-size: 14px;
  }
  p {
    margin: 0 0 5px;
    font-size: 14px;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const About = styled.div`
  margin: 25px;
`;

const Work = styled.div`
  margin: 25px;
`;
const MainContent = styled.div`
  display: flex;
`;

Paragraph.ul = UnorderedList;

function CvPrint({ generalInfo, educationList, workList, skillList }) {
  return (
    <CvPrintContainer>
      <CvPrintWrapper>
        <Heading1>{generalInfo.fullName}</Heading1>
        <MainContent>
          <About>
            <Section>
              {(generalInfo.email !== '' || generalInfo.phone !== '') && (
                <Heading2>Contact</Heading2>
              )}
              {generalInfo.email !== '' && (
                <Paragraph>{generalInfo.email}</Paragraph>
              )}
              {generalInfo.phone !== '' && (
                <Paragraph>{generalInfo.phone}</Paragraph>
              )}
            </Section>

            {educationList.length > 0 && (
              <Section>
                <Heading2>Education</Heading2>
                {educationList.map((education, index) => (
                  <div key={index}>
                    <Paragraph>{education.school}</Paragraph>
                    <Paragraph>
                      <b>{education.degree}</b>{' '}
                    </Paragraph>
                    <Paragraph>{education.year}</Paragraph>
                  </div>
                ))}
              </Section>
            )}

            {skillList.length > 0 && (
              <Section>
                <Heading2>Skills</Heading2>
                <UnorderedList>
                  {skillList.map((skill, index) => (
                    <li key={index}>{skill.skill}</li>
                  ))}
                </UnorderedList>
              </Section>
            )}
          </About>
          <Work>
            {generalInfo.aboutMe !== '<p><br></p>' && (
              <Section>
                <Heading2>About Me</Heading2>
                <Paragraph
                  dangerouslySetInnerHTML={{ __html: generalInfo.aboutMe }}
                />
              </Section>
            )}

            {workList.length > 0 && (
              <Section>
                <Heading2>Work Experience</Heading2>
                {workList.map((work, index) => (
                  <div key={index}>
                    <Paragraph>{work.date}</Paragraph>
                    <Paragraph>
                      <b>{work.title}</b>
                      {work.company}
                    </Paragraph>
                    <Paragraph
                      dangerouslySetInnerHTML={{
                        __html: work.description,
                      }}
                    />
                  </div>
                ))}
              </Section>
            )}
          </Work>
        </MainContent>
      </CvPrintWrapper>
    </CvPrintContainer>
  );
}

CvPrint.propTypes = {
  generalInfo: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    aboutMe: PropTypes.string.isRequired,
  }).isRequired,
  educationList: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    })
  ).isRequired,
  workList: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  skillList: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CvPrint;
