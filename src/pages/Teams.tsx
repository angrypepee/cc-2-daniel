import React from 'react'
import background from "../public/contact-banner.png";
import FetchUserData from '@/components/FetchUserData';
import Cta from '@/components/Cta';
import Link from 'next/link';
import { Grid, GridItem } from '@chakra-ui/react'
import Logo from "../public/9duck.png"


function TeamsView() {
        return (
            <div >
                {/* Banner head */}
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
                        <h1 className="text-4xl font-bold text-white">Our Teams</h1>
                        <p className="mt-4 text-lg text-white">"Best from the Best"</p>
                    </div>
                </section>

                <section className="content-end">
                        <div className='pt-20 container mx-auto'>
                            <Grid   className="pb-10"
                                    templateRows='repeat(2, 1fr)'
                                    templateColumns='repeat(5, 1fr)'
                                    gap={4}
                                >
                                    {/* konten kiri */}
                                    <GridItem rowSpan={2} colSpan={2} >
                                        <div className='content-normal justify-start p-2'>
                                            <p className='mb-2'>Meet our Experts</p>
                                            <h1 className="text-gray text-6xl font-extrabold">
                                            United by Passion, Driven by Excellence
                                            </h1>
                                        </div>
                                    </GridItem>

                                    {/* konten Kanan */}
                                    <GridItem rowSpan={3} colSpan={3}>
                                        <GridItem colSpan={3} className="pb-10">
                                            <p>
                                            Our diverse team is composed of individuals who share a common vision: to make fresh seafood and premium frozen delights accessible to everyone. Each team member brings a unique skill set, from sourcing and logistics to customer service, ensuring that we operate smoothly and effectively.
                                            </p>
                                        </GridItem>
                                        
                                        <GridItem colSpan={3} className="pb-3">
                                            <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                                                <GridItem w='100%'>
                                                    <h6 className="text-black text-base font-bold">Sourcing Specialists</h6>
                                                    <p>We understand the importance of timely delivery. Our logistics team ensures that your orders are handled with care and delivered promptly.</p>
                                                </GridItem>

                                                <GridItem w='100%'>
                                                    <h6 className="text-black text-base font-bold">Logistics Experts</h6>
                                                    <p>To provide fresh, responsibly sourced seafood and top-tier with unmatched quality and convenience.</p>
                                                </GridItem>

                                            </Grid>
                                        </GridItem>
                                    </GridItem>
                                
                            </Grid>
                            
                            
                            <hr 
                                style={{
                                    borderColor: 'gray',
                                    marginBottom: '20px'
                                }}
                            />

                        </div>
                </section>

                <section>
                    <div>
                        <FetchUserData />
                    </div>
                </section>
            </div>
        );
}

export default TeamsView;