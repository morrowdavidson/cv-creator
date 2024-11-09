import PropTypes from 'prop-types';

function Skills ({skillList, setSkillList}){
    const handleInputChange = (index, event) =>{
        const values = [...skillList];
        values[index][event.target.name]= event.target.value;
        setSkillList(values);
    };

    function handleAddSkill(){
        //Create a new skill entry
        const newSkill = {skill:''};

        //Create a new array with the existing skillList and the new entry
        const updateSkillList = [...skillList, newSkill]

        //Update the state with the new array
        setSkillList(updateSkillList);
    }

    return(
        <>
        {skillList.map((skill,index)=>
        <div key={index}>
            <input 
            type="text" 
            name="skill" 
            placeholder="Skill" 
            value={skill.skill}
            onChange={(event) => handleInputChange(index, event)}/>  
        </div>
        )}
            <button type="button" onClick={handleAddSkill}>Add Skill</button>
        </>  
)  
}

Skills.propTypes = {
    skillList: PropTypes.array.isRequired,
    setSkillList: PropTypes.func.isRequired,
};

export default Skills;