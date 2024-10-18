import React from 'react'
import Image from 'next/image'
import Logo from "../public/9duck.png"
import { Button } from '@chakra-ui/react'

function Cta() {
    return (
        <section className="bg-orange-400 content-center py-1">
            <div className="grid grid-cols-1 justify-center gap-4 container mx-auto mb-3">
                <div className='flex col-span-1'>
                    <img src={Logo.src} alt="logo" width={100} height={100}/>
                    <div className="content-center text-white">
                        <h1 className=" text-4xl font-extrabold">
                            Your Source for Fresh Fish & Frozen Goodness!
                        </h1>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta