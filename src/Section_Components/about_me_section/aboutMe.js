import resume from '../../pdf_files/Resume.pdf'
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
                                testing software products, developing and implementing new software 
                                platforms.
                            </p>
                            <p>Description </p>                

                            <hr></hr>

                            <h4>Social Media Links</h4>
                            <div className='social-media-container'>
                            
                                {/*Facebook Icon*/}
                                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/kyle.glover.92'>
                                    <img className='social-media-icons' src={facebook}></img>
                                </a>

                                {/*LinkedIn Icon*/}
                                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kyle-glover-17041982/'>
                                    <img className='social-media-icons' src={linkedin}></img>
                                </a>
                                {/*Github Icon*/}
                                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kyle-glover-17041982/'>
                                    <img className='social-media-icons' src={github}></img>
                                </a>
                            </div>

                        </div>

                        
                        <div className='skills-social'>
                            <h4>Skills</h4>

                            <p>
                                Looking for fullstack developer oppurtunities to learn and grow. 
                                <a target='_blank' rel='noreferrer' href={resume}>Download Resume</a>
                            </p>

                            <div id='skills'>    
                                <ul className='about-ul'>
                                    <h6>Languages</h6>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>C#</li>
                                    <li>C++</li>
                                    <li>HTML</li>
                                    <li>PHP</li>
                                    <li>CSS</li>
                                    <li>Python</li>
                                </ul>
                                <hr style={{margin:0}}></hr>
                                <ul className='about-ul'>
                                    <h6>Frameworks</h6>
                                    <li>Flask</li>
                                    <li>iOS</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>Git</li>
                                    <li>REST API</li>
                                    <li>SQLAlchemy</li>
                                    <li>Marshmallow</li>
                                </ul>
                                <hr style={{margin:0}}></hr>
                                <ul className='about-ul'>
                                    <h6>Database/Tools</h6>
                                    <li>AWS</li>
                                    <li>MySQL</li>
                                    <li>MySQL Workbench </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
