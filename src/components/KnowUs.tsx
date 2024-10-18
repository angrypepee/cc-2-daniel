import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

function KnowUs() {
    return (
        <div className='pt-20'>
            <Grid   className="pb-20"
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                {/* konten kiri */}
                <GridItem rowSpan={2} colSpan={2} >
                    <div className='content-normal justify-start p-2'>
                        <p className='mb-2'>About Us</p>
                        <h1 className="text-gray text-6xl font-extrabold">
                            We're SeaWire Web That Will Boost Your Design Works.
                        </h1>
                    </div>
                </GridItem>

                <GridItem colSpan={3} className="pb-5">
                    <p>
                    SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects. SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects. SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects.
                    So what are you waiting for?
                    </p>
                </GridItem>

                <GridItem colSpan={3}>
                    <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                        <GridItem w='100%' h='10'>
                            <h6 className="text-black text-base font-bold">Vision</h6>
                            <p>We're SeaWire Web That Will Boost Your Design Works.</p>
                        </GridItem>

                        <GridItem w='100%' h='10'>
                            <h6 className="text-black text-base font-bold">Mision</h6>
                            <p>We're SeaWire Web That Will Boost Your Design Works.</p>
                        </GridItem>
                    </Grid>
                </GridItem>

            </Grid>

            <hr />
        </div>
    )
}

export default KnowUs