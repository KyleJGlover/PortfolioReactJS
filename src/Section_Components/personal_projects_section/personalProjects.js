import React from 'react';
import './personalProjects.css';
import CoffeeSlideshow from './SlideShows/CoffeeSlideshow';
import MyQuizzesSlideShow from './SlideShows/MyQuizzesSlideShow';

function Main() {


    return (
        <div className='section-three-container'>
            <section className='s1'>
                <div className='main-container'>
                    <h3 style={{textAlign: 'center'}}>Personal Project</h3>    
                    <div className='post-wrapper'> 
                        <CoffeeSlideshow />
                        <MyQuizzesSlideShow />
                    </div>
                </div>
            </section>  
        </div>
    )
}

export default Main
