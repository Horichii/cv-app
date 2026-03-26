import "../styles/Preview.css";

export default function Preview(data) {

    console.log("data logs:", data); 
    return (
    <div className="preview-container">
      <section className="preview-section">
        <h3>General Information</h3>
        <div className="preview-row">
          <span className="preview-label">Full Name:</span>
          <span className="preview-value">{data.name}</span>
        </div>
        <div className="preview-row">
          <span className="preview-label">Email:</span>
          <span className="preview-value">{data.email}</span>
        </div>
        <div className="preview-row">
          <span className="preview-label">Phone:</span>
          <span className="preview-value">{data.phone}</span>
        </div>
        <button className="general-edit-btn" onClick={() => data.onEdit(1)}>Edit</button>
      </section>

      <section className="preview-section">
        <h3>Educational Experience</h3>
        <div className="preview-row">
          <span className="preview-label">School:</span>
          <span className="preview-value">{data.schoolName}</span>
        </div>
        <div className="preview-row">
          <span className="preview-label">Course Program:</span>
          <span className="preview-value">{data.program}</span>
        </div>
        <div className="preview-row">
          <span className="preview-label">Date Studied:</span>
          <span className="preview-value">{data.dateStudied}</span>
        </div>
        <button className="educational-edit-btn" onClick={() => data.onEdit(2)}>Edit</button>
      </section>
      
      <section className="preview-section">
        <h3>Work Experience</h3>
        <div className="preview-row">
          <span className="preview-label">Company Name:</span>
          <span className="preview-value">{data.companyName}</span>
        </div>
        <div className="preview-row">
          <span className="preview-label">Company Position:</span>
          <span className="preview-value">{data.position}</span>
        </div>
        <div className="preview-row">
          <span className="preview-label">Work Responsibilities:</span>
          <span className="preview-value">{data.responsibilities}</span>
        </div>
        <div className="preview-row">
          <span className="preview-label">Date Started:</span>
          <span className="preview-value">{data.dateStart}</span>
        </div>
        <div className="preview-row">
          <span className="preview-label">Date Ended:</span>
          <span className="preview-value">{data.dateEnd}</span>
        </div>
        <button className="work-edit-btn" onClick={() => data.onEdit(3)}>Edit</button>
        </section>
    </div>
      )
}