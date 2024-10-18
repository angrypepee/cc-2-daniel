import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Logo from "../public/9duck.png"

function IntroServices() {
    return (
        <div className='py-20'>
            <Grid   templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                {/* konten kiri */}
                <GridItem rowSpan={2} colSpan={2}>
                    
                </GridItem>



                <GridItem colSpan={3}>
                    <h1 className="text-gray text-3xl font-extrabold py-7">
                        Service we Provide
                    </h1>
                    <p>
                    SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category.
                    </p>
                </GridItem>
                <GridItem colSpan={3}>
                    <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                        <GridItem w='100%' className='p-4 bg-orange-100 rounded-md'>
                            <img src={Logo.src} alt="logo" width={50} />
                            <h6 className="text-black text-base font-bold">Frozen Food</h6>
                            <p>We're SeaWire Web That Will Boost Your Design Works.</p>
                        </GridItem>

                        <GridItem w='100%'  className='p-2'>
                            <img src={Logo.src} alt="logo" width={50}/>
                            <h6 className="text-black text-base font-bold">Steak</h6>
                            <p>We're SeaWire Web That Will Boost Your Design Works.</p>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </div>
    )
}

export default IntroServices