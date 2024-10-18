import React from 'react'
import background from "../public/contact-banner.png";
import FetchUserData from '@/components/FetchUserData';
import KnowUs from '@/components/KnowUs';


function AboutUsView() {
        return (
            <div>
                <section
                    style={{
                        backgroundImage: `url(${background.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '400px',
                    }}
                    className="flex items-center justify-center"
                >
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white">About Us</h1>
                    </div>
                </section>

                <KnowUs/>
            </div>
        );
}

export default AboutUsView;