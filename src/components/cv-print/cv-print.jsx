import PropTypes from 'prop-types';
import {
  CvPrintContainer,
  CvPrintWrapper,
  ForPrinting,
  Heading1,
  MainContent,
  About,
  ContactSection,
  Heading2,
  Paragraph,
  Section,
  InnerSection,
  UnorderedList,
  Work,
} from './cvPrintStyles';

const CvPrint = ({
  generalInfo,
  educationList,
  workList,
  skillList,
  contentRef,
}) => {
  return (
    <>
      <CvPrintContainer>
        <CvPrintWrapper>
          <ForPrinting ref={contentRef}>
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
                        <Paragraph>{education.name}</Paragraph>
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
                        <li key={index}>{skill.name}</li>
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
                          {work.name}
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
          </ForPrinting>
        </CvPrintWrapper>
      </CvPrintContainer>
    </>
  );
};

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
  contentRef: PropTypes.object,
};

export default CvPrint;
