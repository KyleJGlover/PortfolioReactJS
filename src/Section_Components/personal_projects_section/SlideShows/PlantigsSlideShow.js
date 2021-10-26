import React, { useState } from 'react';
import { projectData } from '../ProjectData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';



function MyQuizzesSlideShow() {

    const project = projectData[2];

    const slides = projectData[2].image;

    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    const create_prev_next_button = (image, index) => {
        if (image.length > 2 ){
            return (
                <div><FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}></FaArrowAltCircleLeft><FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}></FaArrowAltCircleRight></div>
            )
        }
    }

    return (
        <div>
            <div className='post'>
            
                {create_prev_next_button(project.image)}

                <hr style={{margin: 0}}></hr>

                {project.image.map((slide, index) => {
                    return (
                        
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key= {index}
                        >
                        {index === current && (
                            <img src={slide} alt='' className='thumbnail' /> 
                        )} 
                        </div>
                        
                    );
                })}
            
                
                <div className='post-preview'>
                    <h6 className='post-title'>{project.title}</h6>
                    <p className='post-intro'>{project.description} </p>
                    <p className='post-intro-links'>
                        <a target='_blank' rel='noreferrer' href={project.github}>Github</a>
                    </p>
                    <p className='post-intro-links'>
                        <a target='_blank' rel='noreferrer' href={project.website}>Website</a>
                    </p>
                    <p className='post-intro-links'>
                        Bypass the google chrome warning by clicking the browser window and type (thisisunsafe) to access the site.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default MyQuizzesSlideShow