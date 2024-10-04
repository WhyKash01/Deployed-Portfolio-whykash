import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectScreen = (props) => {
    const i = parseInt(props.i);

    const object = [
        {
            src1: '/game1.png',
            src2: '/Game2.png',
            src3: '/Game.png',
            src4: '/Game3.png',
            text: "Gamers Galaxy",
            description: "E-commerce Website made with Next.js",
            Link: 'https://github.com/WhyKash01/Next-Gamers-galaxy.git'
        },
        {
            src1: '/Artical1.png',
            src2: '/Artical2.png',
            src3: '/Artical4.png',
            src4: '/Artical5.png',
            text: "Narrative Nexus",
            description: "Narrative Nexus Website made with Next.js",
            Link: 'https://github.com/WhyKash01/artical'
        },
        {
            src1: '/Portfolio11.png',
            src2: '/Portfolio12.png',
            src3: '/portfolio15.png',
            src4: '/Portfolio14.png',
            text: "Portfolio",
            description: "Portfolio Website made with Next.js",
            Link: 'https://github.com/WhyKash01/Deployed-Portfolio'
        },
    ];

    return (
        <div className='lg:rounded-lg rounded-lg border z-50 border-zinc-600 bg-black xl:w-[40vw] w-[90vw]'>
            <div className='flex gap-1 lg:gap-2 lg:mt-2 mt-2 ml-3'>
                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-rose-600 rounded-full'></div>
                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full'></div>
            </div>
            <div className='lg:rounded-t-lg rounded-t-lg overflow-hidden mx-1 bord lg:mt-2 mt-1 bg-zinc-800 border border-zinc-600 2xl:h-[20vw]'>
                <div className='grid grid-cols-2 gap-1 m-1'>
                    <Image className='rounded-md' src={object[i].src1} alt='Project image 1' width={500} height={300} />
                    <Image className='rounded-md' src={object[i].src2} alt='Project image 2' width={500} height={300} />
                    <Image className='rounded-md' src={object[i].src3} alt='Project image 3' width={500} height={300} />
                    <Image className='rounded-md' src={object[i].src4} alt='Project image 4' width={500} height={300} />
                </div>
            </div>
            <div className='flex h-1 bg-zinc-900 mx-1'>
                <div className='bg-yellow-400 w-[33%] h-full'></div>
                <div className='bg-zinc-700 w-[20%] h-full'></div>
            </div>
            <div className='lg:mx-5 mx-5 flex justify-between lg:my-3 my-2'>
                <div>
                    <h3 className='xl:text-xl lg:text-3xl text-lg'>{object[i].text}</h3>
                    <h3 className='xl:text-sm lg:text-xl text-xs font-[400]'>{object[i].description}</h3>
                </div>
                <div className='my-auto'>
                    <Link href={object[i].Link}>
                        <Image src='/link2.png' className='xl:w-5 xl:h-5 w-4 h-4' alt='Link image' width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectScreen;
