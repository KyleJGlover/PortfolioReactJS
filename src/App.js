import { useEffect } from 'react';
import './App.css';
import Greeter from './Section_Components/greeting_section/greeting';
import AboutMe from './Section_Components/about_me_section/aboutMe';
import PersonalProjects from './Section_Components/personal_projects_section/personalProjects';
import ContactMe from './Section_Components/contact_me_section/contect_me';

function App() {
  useEffect(() => {
    
  })

  return (
    <div className="App">
      <Greeter /> 
      <AboutMe />
      <PersonalProjects />
      <ContactMe />
      
    </div>
        
  );
  
}

export default App;
