import Image from "next/image";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Hero = () => {
    return(
        <section className="bg-orange-300 h-screen content-center">
            <div className="grid grid-cols-3 gap-4 container mx-auto mb-3">
                    <div className="col-span-2">
                        <h1 className="text-white text-7xl font-extrabold">
                            Crafting every single pixels with detailed
                        </h1>
                        <p className="text-white mb-10">
                            We will help to develop every smallest thing into a big one for your company
                        </p>

                        <Button colorScheme='orange'>Let Do it</Button>

                    </div>
                    <div></div>
                    <div></div>
            </div>
        </section>
    )
}

export default Hero;