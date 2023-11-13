import React from 'react';
import './personalProjects.css';
import CoffeeSlideshow from './SlideShows/CoffeeSlideshow';
import DjangoDashboardSlideShow from './SlideShows/DjangoDashboardSlideShow';
import PlantingsSlideShow from './SlideShows/PlantigsSlideShow';

function Main() {


    return (
        <div className='section-three-container'>
            <section className='s1'>
                <div className='main-container'>
                    <h3 style={{textAlign: 'center'}}>Personal Project</h3>    
                    <div className='post-wrapper'> 
                        <CoffeeSlideshow />
                        <DjangoDashboardSlideShow />
                        <PlantingsSlideShow />
                    </div>
                </div>
            </section>  
        </div>
    )
}

export default Main
