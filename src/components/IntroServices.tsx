import { Grid, GridItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'
import Logo from "../public/9duck.png"

function IntroServices() {
    return (
        <section className="bg-orange-100">
        <div className='container mx-auto'>
            <Grid   templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                {/* konten kiri */}
                <GridItem rowSpan={2} colSpan={2}>
                    <div>
                        <img src={Logo.src} alt="logo"/>
                    </div>
                </GridItem>

                <GridItem colSpan={3}>
                    <Grid templateColumns='repeat(2, 2fr)' gap={2}>
                        <GridItem w='100%' className='p-4 rounded-md'>
                            <img src={Logo.src} alt="logo" width={50} />
                            <h6 className="text-black text-base font-bold">Premium Seafood Delivery</h6>
                            <p>
                                We offer a wide variety of fresh fish, sourced daily from trusted suppliers. Whether you're a seafood enthusiast or running a restaurant, our reliable delivery service ensures that you get the best-quality fish straight to your door, ready to be cooked or stored.
                            </p>
                        </GridItem>

                        <GridItem w='100%'  className='p-4 rounded-md'>
                            <img src={Logo.src} alt="logo" width={50}/>
                            <h6 className="text-black text-base font-bold pb-4">Frozen Food Supply</h6>
                            <p>
                            Our selection of frozen food products includes everything from frozen vegetables to pre-prepared meals and seafood. We focus on quality preservation, ensuring that all our frozen goods retain their flavor, freshness, and nutritional value.
                            </p>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </div>
        </section>
    )
}

export default IntroServices