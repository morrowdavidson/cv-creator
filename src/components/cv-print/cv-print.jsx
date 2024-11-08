import PropTypes from 'prop-types';

function CvPrint({ generalInfo, educationList }) {
    return (
        <div>
            <h1>CV</h1>
            <p>{generalInfo.firstName} {generalInfo.lastName}&apos;s CV</p>
            <p>Email: {generalInfo.email}</p>
            <p>Phone: {generalInfo.phone}</p>
            <h2>Education</h2>
            {educationList.map((education, index) => (
                <div key={index}>
                    <p>School: {education.school}</p>
                    <p>Degree: {education.degree}</p>
                    <p>Year: {education.year}</p>
                </div>
            ))}
        </div>
    );
}

CvPrint.propTypes = {
    generalInfo: PropTypes.object.isRequired,
    educationList: PropTypes.array.isRequired,
};

export default CvPrint;