import Image from "next/image";
import { Button, ButtonGroup } from '@chakra-ui/react'
import background from "../public/bg-fishing-1.jpg"
import Link from "next/link";

const Hero = () => {
    return(
        <section className=" h-screen content-end py-7" 
            style={{   backgroundImage: `url(${background.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                        }}>
            <div className="grid grid-cols-3 gap-4 container mx-auto mb-3">
                    <div className="col-span-2">
                        <h1 className="text-white text-7xl font-extrabold">
                            From Ocean to Freezer, Quality You Can Taste!
                        </h1>
                        <p className="text-white mb-5">
                            Whether you're a seafood enthusiast or running a restaurant
                        </p>
                        <Link href="/Services" passHref>
                        <Button colorScheme='orange' padding='10px 50px'>OUR PRODUCTS</Button>
                        </Link>
                    </div>
                    <div></div>
                    <div></div>
            </div>
        </section>
    )
}

export default Hero;