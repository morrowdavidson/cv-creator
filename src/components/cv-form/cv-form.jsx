import GeneralInfoForm from "./general-info-form";
import PropTypes from 'prop-types';
import EducationForm from "./education-form"; 
import WorkForm from "./work-form";

function CvForm({ 
    generalInfo, 
    onGeneralInfoChange, 
    educationList, 
    setEducationList,
    workList,
    setWorkList    
}) {
    return( 
    <>
        <h2>General Information</h2>
        <GeneralInfoForm generalInfo={generalInfo} onGeneralInfoChange={onGeneralInfoChange} />
        <h2>Education Experience</h2>
        <EducationForm educationList={educationList} setEducationList={setEducationList} />
        <h2>Work Experience</h2>
        <WorkForm workList={workList} setWorkList={setWorkList}/>
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
};

export default CvForm;