function WorkExperience({ companyName, position, responsibilities, dateStart, dateEnd, onUpdate, onSubmit }) {
    
const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSubmit();
  };

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="companyName">Company Name</label>
        <input type="text" id="companyName" name="companyName" value={companyName} onChange={handleChange} required/>
      </div>
      
      <div className="input-group">
        <label htmlFor="position">Company Position</label>
        <input type="text" id="position" name="position" value={position} onChange={handleChange} required/>
      </div>
      
      <div className="input-group">
        <label htmlFor="responsibilities">Work Responsibilities</label>
        <input type="text" id="responsibilities" name="responsibilities" value={responsibilities} onChange={handleChange} required/>
      </div>

      <div className="input-group">
        <label htmlFor="dateStart">Date Started</label>
        <input type="date" id="dateStart" name="dateStart" value={dateStart} onChange={handleChange} required/>
      </div>

      <div className="input-group">
        <label htmlFor="dateEnd">Company Name</label>
        <input type="date" id="dateEnd" name="dateEnd" value={dateEnd} onChange={handleChange} required/>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default WorkExperience;