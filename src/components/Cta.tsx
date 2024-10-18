import React from 'react'
import Image from 'next/image'
import Logo from "../public/9duck.png"
import { Button } from '@chakra-ui/react'

function Cta() {
    return (
        <section className="bg-orange-400 content-center py-7">
            <div className="grid grid-cols-2 gap-4 container mx-auto mb-3">
                    <div className='flex col-span-1'>
                        <img src={Logo.src} alt="logo" width={100} height={100}/>
                        <div className="content-center">
                            <h1 className="text-black text-4xl font-extrabold">
                                Crafting every single pixels 
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div className='content-center justify-items-end'>
                        <Button colorScheme='orange'>Get In Touch</Button>
                    </div>
            </div>
        </section>
    )
}

export default Cta