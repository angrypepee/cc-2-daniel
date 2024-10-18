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
                                            <p className='mb-2'>Our Journey</p>
                                            <h1 className="text-gray text-6xl font-extrabold">
                                                Fresh Seafood, Frozen Delights – Delivered!
                                            </h1>
                                        </div>
                                    </GridItem>

                                    {/* konten Kanan */}
                                    <GridItem rowSpan={3} colSpan={3}>
                                        <GridItem colSpan={3} className="pb-2">
                                            <p>
                                                At 9 Duck, we are committed to delivering the freshest seafood and premium frozen food directly to your doorstep. With years of experience in sourcing and handling quality products, we pride ourselves on providing nutritious and sustainable food options that meet your culinary needs. Our mission is to make seafood and frozen delights accessible, convenient, and affordable for everyone.
                                            </p>
                                        </GridItem>
                                        
                                        <GridItem colSpan={3} className="pb-3">
                                            <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                                                <GridItem w='100%' h='10'>
                                                    <h6 className="text-black text-base font-bold">Vision</h6>
                                                    <p>To be the leading provider of sustainable and high-quality seafood and frozen food products for everyone</p>
                                                </GridItem>

                                                <GridItem w='100%' h='10'>
                                                    <h6 className="text-black text-base font-bold">Mision</h6>
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
                        <Cta />
                    </div>
                </section>
            </div>
        );
}

export default TeamsView;