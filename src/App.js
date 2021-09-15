import './App.css';
import Greeter from './Section_Components/greeting_section/greeting';
import About_Me from './Section_Components/about_me_section/aboutMe';
import Personal_Projects from './Section_Components/personal_projects_section/personalProjects';
import Contact_Me from './Section_Components/contact_me_section/contect_me';

function App() {
  return (
    <div className="App">
      <Greeter /> 
      <About_Me />
      <Personal_Projects />
      <Contact_Me />
    </div>
        
  );
}

export default App;
