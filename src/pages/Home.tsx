"use client"

import Cta from '@/components/Cta';
import Feedback from '@/components/Feedback';
import Hero from '@/components/Hero';
import IntroServices from '@/components/IntroServices';
import KnowUs from '@/components/KnowUs';
import React from 'react'
import FetchUserData from '@/components/FetchUserData';
import Testimonial from '@/components/Testimonial';



function HomeView() {
    return (
        <div>
            <Hero />
            <KnowUs />
            <Cta/>
            <Testimonial />
            <FetchUserData />
            {/* <Feedback/> */}
            
        </div>
    )
}

export default HomeView;