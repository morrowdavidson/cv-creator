import PropTypes from 'prop-types';

function CvPrint({ generalInfo, educationList, workList, skillList }) {
  return (
    <div>
      <h1>CV</h1>
      <p>
        {generalInfo.firstName} {generalInfo.lastName}&apos;s CV
      </p>
      <p>Email: {generalInfo.email}</p>
      <p>Phone: {generalInfo.phone}</p>

      {educationList.length > 0 && (
        <>
          <h2>Education</h2>
          {educationList.map((education, index) => (
            <div key={index}>
              <p>School: {education.school}</p>
              <p>Degree: {education.degree}</p>
              <p>Year: {education.year}</p>
            </div>
          ))}
        </>
      )}

      {workList.length > 0 && (
        <>
          <h2>Work Experience</h2>
          {workList.map((work, index) => (
            <div key={index}>
              <p>Company: {work.company}</p>
              <p>Title: {work.title}</p>
              <p>Date: {work.date}</p>
            </div>
          ))}
        </>
      )}

      {skillList.length > 0 && (
        <>
          <h2>Skills</h2>
          {skillList.map((skill, index) => (
            <ul key={index}>
              <li>{skill.skill}</li>
            </ul>
          ))}
        </>
      )}
    </div>
  );
}

CvPrint.propTypes = {
  generalInfo: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
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
