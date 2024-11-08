import GeneralInfoForm from "./general-info-form";
import EducationForm from "./education-form"; 
import WorkForm from "./work-form";

function CvForm({ onFirstNameChange, onLastNameChange }) {

    
    return( 
    <>
    <h2>General Information</h2>
    <GeneralInfoForm onFirstNameChange={onFirstNameChange} onLastNameChange={onLastNameChange} />
    <h2>Education Experience</h2>
    <EducationForm />
    <h2>Work Experience</h2>
    <WorkForm />


    </>
    );
  }
  
  export default CvForm;