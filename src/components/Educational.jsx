

function EducationalExperience ({schoolName, program, dateStudied, onUpdate, onSubmit}) {

    const handleChange = (e) => {

        const {name, value} = e.target;
        onUpdate({ [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmit();
    };
    
    return (
        <form className="form-section" onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="schoolName">School Name</label>
                <input type="text" id="schoolName" name="schoolName"  value={schoolName} onChange={handleChange} required/>
            </div>

            <div className="input-group">
                <label htmlFor="program">Course Program</label>
                <input type="text" id="program" name="program"  value={program} onChange={handleChange} required/>
            </div>

            <div className="input-group">
                <label htmlFor="dateStudied">Date Studied</label>
                <input type="text" id="dateStudied" name="dateStudied"  value={dateStudied} onChange={handleChange} required/>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
        </form>
    )
}

export {EducationalExperience}