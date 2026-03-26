
function GeneralInfo({ name, email, phone, onUpdate, onSubmit }) {
    
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
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChange} required/>
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleChange} required/>
      </div>

      <div className="input-group">
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" value={phone} onChange={handleChange} required/>
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default GeneralInfo;