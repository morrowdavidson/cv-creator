import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const CvPrintContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  position: sticky;
  top: 0;
  font-family: 'Geist', sans-serif;
`;

const CvPrintWrapper = styled.div`
  width: 8in; /* Standard paper width */
  height: 10in; /* Standard paper height */
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  font-family: 'Geist', sans-serif;
  font-weight: 400;
`;

const Heading1 = styled.h1`
  margin-top: 50px;
  font-size: 24px;
  text-align: center;
  font-weight: 500;
`;

const Heading2 = styled.h2`
  margin-top: 20px;
  font-size: 20px;
  padding-bottom: 5px;
  margin-bottom: 0px;
  font-weight: 500;
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
  margin-bottom: 30px;
`;

const About = styled.div`
  margin: 25px;
  border-right: solid 1px;
`;

const Work = styled.div`
  margin: 25px;
`;
const MainContent = styled.div`
  display: flex;
`;

const ContactSection = styled.section`
  background-color: #e3e3e3;
  margin-left: -45px;
  padding: 15px;
  padding-left: 45px;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {aw
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

const InnerSection = styled.div`
  margin-bottom: 15px;
`;

function CvPrint({ generalInfo, educationList, workList, skillList }) {
  const contentRef = useRef();

  const handlePrint = useReactToPrint({ contentRef });
  return (
    <>
      <ActionButtons>
        <Button onClick={handlePrint}>Print</Button>
      </ActionButtons>
      <CvPrintContainer>
        <CvPrintWrapper ref={contentRef}>
          <Heading1>{generalInfo.fullName}</Heading1>
          <MainContent>
            <About>
              <ContactSection>
                {(generalInfo.email !== '' || generalInfo.phone !== '') && (
                  <Heading2>Contact</Heading2>
                )}
                {generalInfo.email !== '' && (
                  <Paragraph>{generalInfo.email}</Paragraph>
                )}
                {generalInfo.phone !== '' && (
                  <Paragraph>{generalInfo.phone}</Paragraph>
                )}
              </ContactSection>

              {educationList.length > 0 && (
                <Section>
                  <Heading2>Education</Heading2>
                  {educationList.map((education, index) => (
                    <InnerSection key={index}>
                      <Paragraph>{education.school}</Paragraph>
                      <Paragraph>
                        <b>{education.degree}</b>{' '}
                      </Paragraph>
                      <Paragraph>{education.year}</Paragraph>
                    </InnerSection>
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
                    <InnerSection key={index}>
                      <Paragraph>{work.date}</Paragraph>
                      <Paragraph>
                        <b>{work.title} </b>
                        {work.company}
                      </Paragraph>
                      <Paragraph
                        dangerouslySetInnerHTML={{
                          __html: work.description,
                        }}
                      />
                    </InnerSection>
                  ))}
                </Section>
              )}
            </Work>
          </MainContent>
        </CvPrintWrapper>
      </CvPrintContainer>
    </>
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
