import React from 'react';

const CTA = () => {
    return (
        <section className='bg-brightRed bg-cta-background-sm md:bg-cta-background bg-no-repeat'>
            <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                <h1 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
                    Simplify how your team works today.
                </h1>

                <button className='block p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline 
                shadow-2xl hover:bg-gray-900 transition-all'>
                    Get Started
                </button>
            </div>

        </section>
    );
}

export default CTA;
