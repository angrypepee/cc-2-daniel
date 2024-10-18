import Cta from '@/components/Cta';
import Feedback from '@/components/Feedback';
import Hero from '@/components/Hero';
import IntroServices from '@/components/IntroServices';
import KnowUs from '@/components/KnowUs';
import React from 'react'


function HomeView() {
    return (
        <div>
            <Hero />
            <div className="container mx-auto">
                <KnowUs />
                <IntroServices />
            </div>
            <Feedback/>
            <Cta/>
        </div>
    )
}

export default HomeView;