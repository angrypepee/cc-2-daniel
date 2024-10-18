import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Logo from "../public/9duck.png"
import background from "../public/banner-1.png"
import Link from 'next/link'
import FetchUserData from './FetchUserData'


function KnowUs() {
    return (
        <section className="content-end"  
            style={{   backgroundImage: `url(${background.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                        }}>
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
                            
                            <GridItem className="pt-10">
                                    <hr 
                                        style={{
                                            borderColor: 'gray',
                                            marginBottom: '20px'
                                        }}
                                    />
                                <h6 className="text-black text-base font-bold text-center">Our Teams</h6>
                                <FetchUserData />
                            </GridItem>
                        </GridItem>
                    
                </Grid>
                
                
                <hr 
                    style={{
                        borderColor: 'gray',
                        marginBottom: '20px'
                    }}
                />
                <Grid templateColumns='repeat(2, 2fr)' className='pb-10'>
                    <GridItem>
                        <div className='flex'>
                            <img src={Logo.src} alt="logo"/>
                            <div>
                                <h6 className="text-black text-base font-bold pb-4">Premium Seafood Delivery</h6>
                                <p>
                                    We offer a wide variety of fresh fish, sourced daily from trusted suppliers. Whether you're a seafood enthusiast or running a restaurant, our reliable delivery service ensures that you get the best-quality fish straight to your door, ready to be cooked or stored.
                                </p>
                                <Link href="/Products" className="font-bold">Learn More {'>'}</Link>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem>
                        <div className='flex'>
                            <img src={Logo.src} alt="logo"/>
                            <div>
                                <h6 className="text-black text-base font-bold pb-4">Frozen Food Supply</h6>
                                <p>
                                Our selection of frozen food products includes everything from frozen vegetables to pre-prepared meals and seafood. We focus on quality preservation, ensuring that all our frozen goods retain their flavor, freshness, and nutritional value.
                                </p>

                                <Link href="/Products" className="font-bold">Learn More {'>'}</Link>
                            </div>
                        </div>
                    </GridItem>
                </Grid>

                <hr />
            </div>
        </section>
    )
}

export default KnowUs