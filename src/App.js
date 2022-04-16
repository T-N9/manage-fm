import React from 'react';
import { NavBar, Hero, Features, Testimonials, CTA, Footer } from './components';

const App = () => {
    return (
        <main className='font-primary bg-hero-background bg-no-repeat bg-hero-sm md:bg-hero bg-hero-sm-size md:bg-hero-bg-size'>
            <NavBar/>
            <Hero/>
            <Features/>
            <div className='hidden md:block absolute top-[55rem] left-[-9rem] w-[500px] h-[800px] bg-hero-background bg-no-repeat bg-right-bottom bg-hero-bg-size '>

            </div>
            <Testimonials/>
            <CTA/>
            <Footer/>
        </main>
    );
}

export default App;
