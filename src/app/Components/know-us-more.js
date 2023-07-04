'use client';
import { Typewriter } from "react-simple-typewriter";
import arrowStroke from "../Images/HomeArrowStroke.svg";
import Image from 'next/image';

const variables = ['functional/', 'creative/', 'awesome/', 'innovative/', 'original/', 'fresh/',  'clever/', 'YOU.'];

export default function KnowUsMore() {
    return (
      <div className="min-h-full justify-between py-24">
        <div className="pl-14">
            <h4 className="font-bold uppercase text-lg pb-5">Lot Designs Creative Branding</h4>
            <div className="w-20 text-[3px] text-lot-orange bg-lot-orange">___</div>
        </div>
        <div className="pl-14 py-1 pt-10">
            <h2 className="pl-10 text-7xl font-bold">create. something.</h2>
        </div>
        <div className = "pl-14 py-1 text-7xl font-bold">
            <div className=" flex "><h2>ultimately.</h2>
            <h2 className="pl-10 outline-stroke text-transparent">
                    <Typewriter 
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25} 
                    loop={0}
                    typeSpeed={75}
                    words={variables}
                    />
                </h2>
            </div>
        </div>
        <div className="pl-14 py-5">
            <p>Lot Designs is a creative branding agency that believes in innovative and formative ideas that function . With that, we value the significance of creating new things that ultimately serves a purpose.</p>
        </div>
        <a href="#">
            <Image src={arrowStroke} alt="Your SVG" style={{position: 'absolute'}} />
            <div className="pl-20 pt-8">
                <h5 className="pl-20 uppercase font-bold ml-10 text-lg mb-10 mt-0">Know Us More</h5>
            </div>
        </a>
      </div>
    )
  }
  