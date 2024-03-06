import profilePhoto from '../../images/ProfilePicture.jpg';
import resume from '../../pdf_files/Resume.docx';

    var theme = localStorage.getItem('theme')

    if (theme === null){
        changeColorScheme('light')

    } else{
        changeColorScheme(theme)
    }


    function changeColorScheme(color){
        if (color === 'light'){

            document.getElementById('theme-style').href = 'default.css'
        }
        if (color === 'blue'){

            document.getElementById('theme-style').href = 'Color_Schemes/blue.css'
        }
        if (color === 'green'){

            document.getElementById('theme-style').href = 'Color_Schemes/green.css'
        }
        if (color === 'purple'){

            document.getElementById('theme-style').href = 'Color_Schemes/purple.css'
        }
        localStorage.setItem('theme', color)
    }


function Main() {

    return (
        <div className='section-one-container'>
            <section className='s1'>
                <div className='main-container'>
                    
                    <div className='intro-wrapper'>
                        <div className='nav-wrapper'>
                            <div className='dots-wrapper'>
                                <div id='dot-1' className='browser-dot'></div>
                                <div id='dot-2' className='browser-dot'></div>
                                <div id='dot-3' className='browser-dot'></div>
                            </div>
                            <ul id='navigation'>
                                <li><a target='_blank' rel='noreferrer' href={resume}>Download Resume</a></li>
                            </ul>

                        </div>
                        
                        <div className='greeting-wrapper'>
                            <h1>Hi, I'm Kyle Glover</h1>
                        </div>
                        <div className='left-column'>
                            <img id='profile_pic' alt='' src={profilePhoto}></img>
                            <h5 style={{ textAlign: 'center', lineHeight: 0}}>Personalized Theme</h5>

                            <div id='theme-options-wrapper'>
                                <button 
                                    onClick= {() => changeColorScheme('light')}
                                    id='light-mode' 
                                    className='theme-dot'>
                                </button>

                                <button 
                                    onClick= {() => changeColorScheme('blue')}
                                    id='blue-mode' 
                                    className='theme-dot'>    
                                </button>

                                <button 
                                    onClick= {() => changeColorScheme('green')}
                                    value='green' 
                                    id='green-mode' 
                                    className='theme-dot'>
                                </button>

                                <button
                                    onClick= {() => changeColorScheme('purple')}  
                                    id='purple-mode' 
                                    className='theme-dot'>
                                </button>

                            </div>

                            <p id='settings-note'>*Theme settings will be saved for <br></br>your next visit</p>
                        </div>

                        <div className='right-column'>

                            <div id='preview-shadow'>
                                <div id='preview'>
                                    <div id='corner-tl' className='corner'></div>
                                    <div id='corner-tr' className='corner'></div>
                                    <h3>Current Activities</h3>
                                    <p>I am activily looking for new oppurtunities as a Software Engineer!</p>
                                    <div id='corner-bl' className='corner'></div>
                                    <div id='corner-br' className='corner'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
