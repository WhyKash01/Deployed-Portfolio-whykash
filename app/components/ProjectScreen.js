import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import linkImag from './../../public/link2.png'
import game1 from './../../public/game1.png'
import game3 from './../../public/Game.png'
import game2 from './../../public/Game2.png'
import game4 from './../../public/Game3.png'
import Portfolio1 from './../../public/Portfolio11.png'
import Portfolio2 from './../../public/Portfolio12.png'
import Portfolio3 from './../../public/portfolio15.png'
import Portfolio4 from './../../public/Portfolio14.png'
import Artical1 from './../../public/Artical1.png'
import Artical2 from './../../public/Artical2.png'
import Artical3 from './../../public/Artical4.png'
import Artical4 from './../../public/Artical5.png'
const ProjectScreen = (props) => {
    const i=parseInt(props.i);

    const object=[{
        src1: game1,
        src2: game2,
        src3: game3,
        src4: game4,
        text: "Gamers Galaxy",
        description: "E-commerce Wedsite made with Next Js",
        Link: 'https://github.com/WhyKash01/Next-Gamers-galaxy.git'
    },
    {
        src1: Artical1,
        src2: Artical2,
        src3: Artical3,
        src4: Artical4,
        text: "Narrative Nexus",
        description: "Narrative Nexus Wedsite made with Next Js",
        Link: 'https://github.com/WhyKash01/artical'
    },
    {
        src1: Portfolio1,
        src2: Portfolio2,
        src3: Portfolio3,
        src4: Portfolio4,
        text: "Portfolio",
        description: "Portfolio Wedsite made with Next Js",
        Link: 'https://github.com/WhyKash01/Portfolio-WhyKash01.git'
    },
]
  return (
    <div className=' lg:rounded-lg rounded-lg border z-50 border-zinc-600 bg-black xl:w-[40vw] w-[90vw]'>
        <div className='flex gap-1 lg:gap-2 lg:mt-2 mt-2 ml-3'>
            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-rose-600 rounded-full'></div>
            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full'></div>
            
        </div>
        <div className='lg:rounded-t-lg rounded-t-lg  overflow-hidden mx-1 bord lg:mt-2 mt-1 bg-zinc-800 border border-zinc-600 2xl:h-[20vw]'>
        <div className=' grid grid-cols-2 gap-1 m-1'>
        <Image className='rounded-md' src={object[i].src1}></Image>
        <Image className='rounded-md' src={object[i].src2}></Image>
        <Image className='rounded-md' src={object[i].src3} ></Image>
        <Image className='rounded-md' src={object[i].src4}></Image>
        </div>
        </div>
        <div className='flex h-1 bg-zinc-900 mx-1'>
            <div className='bg-yellow-400 w-[33%] h-full'></div>
            <div className='bg-zinc-700 w-[20%] h-full'>
               
            </div>
        </div>
        <div className='lg:mx-5 mx-5 flex justify-between lg:my-3 my-2'>
            <div>
            <h3 className='xl:text-xl lg:text-3xl text-lg '>{object[i].text}</h3>
            <h3 className='xl:text-sm lg:text-xl text-xs font-[400] '>{object[i].description}</h3>
            </div>
            <div className='my-auto '>
                <Link href={object[i].Link}>
                <Image src={linkImag} className='xl:w-5 xl:h-5 w-4 h-4'></Image>
                </Link>
            </div>
        </div>
    </div>
  )

}

export default ProjectScreen