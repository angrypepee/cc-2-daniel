"use client"

import Cta from '@/components/Cta';
import Hero from '@/components/Hero';
import KnowUs from '@/components/KnowUs';
import React from 'react'
import Testimonial from '@/components/Testimonial';


function HomeView() {
    return (
        <div>
            <Hero />
            <KnowUs />
            {/* <Cta/> */}
            <Testimonial />
        </div>
    )
}

export default HomeView;