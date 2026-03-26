import { useState } from 'react';
import './styles/App.css';
import General from './components/General';
import { EducationalExperience } from './components/Educational';
import Preview from './components/Preview';
import WorkExperience from './components/Work';


function App() {
  const [step, setStep] = useState(1);
  const [cvData, setCv] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    program: "",
    dateStudied: "",
    companyName: "",
    position: "",
    responsibilities: "",
    dateStart: "",
    dateEnd:"",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  
  const handleUpdate = (newData) => {
    setCv({ ...cvData, ...newData });
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className='header'>CV Form</h2>
        
        {step === 1 && (
          <General {...cvData} onUpdate={handleUpdate} onSubmit={nextStep} />
        )}
        
        {step === 2 && (
          <EducationalExperience {...cvData} onUpdate={handleUpdate} onSubmit={nextStep} onBack={prevStep} />
        )}

        {step === 3 && (
          <WorkExperience {...cvData} onUpdate={handleUpdate} onSubmit={nextStep} onBack={prevStep} />
        )}
        
        {step > 1 && <button onClick={prevStep} className="back-btn">Go back</button>}
      </aside>

      <main className="main-preview">
        <Preview {...cvData} onUpdate={handleUpdate} onEdit={setStep}/>
      </main>
    </div>
  );
}

export default App;