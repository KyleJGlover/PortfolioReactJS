import facebook from '../../images/facebook_icon.png';
import linkedin from '../../images/linkedin_icon.png';
import github from '../../images/github_icon.png';

function Main() {

    return (
        <div className='section-two-container'>
            <section className='s2'>
                <div className='main-container'>

                    <div className='about-wrapper'>
                        <div className='about-me'>
                            <h4>About Me</h4>
                            <p>
                                Dedicated, energetic, and self-motivated individual 
                                who can provide support in a team oriented environment. 
                                Actively learning new software tools and frameworks. Adept at 
                                testing software products, developing, and implementing in new software 
                                platforms.
                            </p>
                            <h4>What I have Done</h4>                
                            <p>
                                I have spent the since 2019 learning as many software tools as possible. My first job as a 
                                Software Engineer at Halo Labs was filled with many challenges as they are still 
                                at the startup company. I had to be flexible with my duties and work on a range of 
                                projects related to software. I worked with a team of engineers to develop and implement 
                                full-stack applications for running and monitoring automated systems in a manufacturing environment 
                                using C#/WinForms. Working with my team I improved the firmware for controlling our PCB running 
                                our lab instrument systems using C. I even developed and implemented embedded systems such as Arduino to 
                                automate control and monitoring of laboratory instruments using C++. I had an amazing time working with our 
                                team as I learned how many tools to improve my ability to develop and architect software solutions.
                            </p> 
                            <h5>Why the Switch?</h5>                
                            <p>
                                I’ve found that working in the laboratory would not allow me to solve technical problems.
                                Leading me to pursue community college classes in computer science while I worked full time. 
                                I fell in love with the challenges and process of developing solutions to problems in software. 
                                This sparked my passion for software development and a master’s degree in Computer Science. My 
                                determination to provide quality code while learning as much as I can has been with me since the day 
                                I decided to work towards being a software engineer two years ago. 
                            </p> 


                        </div>

                        
                        <div className='skills-social'>


                            
                            <h4>Current Project</h4>
                            <p> 
                                Currently finishing up a Udemy course applying Docker containers for creating microservices.
                                Controlled by Kubernetes, project coming soon!
                            </p>
                            <h4>Skills</h4>
                            <div id='skills'>    
                                <ul className='about-ul'>
                                    <h6>Languages</h6>
                                    <li>C#</li>
                                    <li>C++</li>
                                    <li>C</li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>HTML</li>
                                    <li>PHP</li>
                                    <li>CSS</li>
                                    <li>YAML</li>
                                </ul>
                                <hr style={{margin:0}}></hr>
                                <ul className='about-ul'>
                                    <h6>Frameworks</h6>
                                    <li>.Net</li>
                                    <li>Git</li>
                                    <li>Kubernetes </li>
                                    <li>Docker</li>
                                    <li>Flask</li>
                                    <li>iOS</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>REST API</li>
                                    <li>SQLAlchemy</li>
                                    <li>Marshmallow</li>
                                    <li>Nginx-Ingress</li>
                                    
                                </ul>
                                <hr style={{margin:0}}></hr>
                                <ul className='about-ul'>
                                    <h6>Database/Tools</h6>
                                    <li>BitBuckets</li>
                                    <li>SourceTree</li>
                                    <li>AWS</li>
                                    <li>MySQL</li>
                                    <li>MySQL Workbench </li>
                                    <li>MongoDB </li>
                                </ul>
                            </div>
                            <h4>Social Media Links</h4>
                            <div className='social-media-container'>
                            
                                {/*Facebook Icon*/}
                                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/kyle.glover.92'>
                                    <img className='social-media-icons' alt='' src={facebook}></img>
                                </a>

                                {/*LinkedIn Icon*/}
                                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kyle-glover-17041982/'>
                                    <img className='social-media-icons' alt='' src={linkedin}></img>
                                </a>
                                {/*Github Icon*/}
                                <a target='_blank' rel='noreferrer' href='https://github.com/KyleJGlover'>
                                    <img className='social-media-icons' alt='' src={github}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
