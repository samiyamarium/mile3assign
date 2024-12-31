import React from "react";
import Image from "next/image";
import i1 from '../Home/s.png';
import i2 from '../Home/s2.png';
import i3 from '../Home/s3.png';
export default function Home(){
    return(
        <div>
            <div className=" flex flex-wrap">
   
   <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap  m-20 bg-zinc-200 w-[300]
    h-251 pl-8 pt-14  outline-8 border-yellow-500 outline-yellow-500 "><Image className="  bg-white text-gray-700 text-center border-4  outline-black outline outline-6 p-5 text-3xl
   font-mono" src={i1} alt="TESTIMAG"/><p className=' lg-text-[24px] font-sans'>
    <b>First travel </b></p><br/><p>One of my most memorable experiences was hiking the West Highland Way in Scotland. The rugged terrain and ever-changing weather conditions presented a unique challenge, but the stunning views of Loch Lomond and the Trossachs National Park 
  <br/> <a className="text-xs text-blue-800 underline"    href="https://medium.com/@fjkphy/traveling-as-a-landscape-architect-discovering-the-natural-beauty-of-the-world-e82d9862fa5f" >... See more..</a>

    </p>
    </div>
    <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap  m-20 bg-zinc-200 w-[300]
     h-251 pl-8 pt-14  outline-8 border-yellow-500 outline-yellow-500 "><Image className="  bg-white text-gray-700 text-center border-4  outline-black outline outline-6 p-5 text-3xl
   font-mono" src={i2} alt="TESTIMAG"/><p className=' lg-text-[24px] font-sans'>
    <b>Second travel </b></p><br/>
    <p>I duck beneath the tail of the plane and catch a hint of burnt rubber. The Spanish sun greets me with ferocity
    as my hands grasp metal and my feet take me up the ladder, rung by rung. This, I already know, is the real point of no return. One step, the other step, keep walking, 
  <br/> <a className="text-xs text-blue-800 underline"    href="https://www.insidethetravellab.com/first-skydiving-experience/ " >... See more..</a>

    </p>
    </div>
        
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap  m-20 bg-zinc-200 w-[300]
         h-251 pl-8 pt-14  outline-8 border-yellow-500 outline-yellow-500 "><Image className="  bg-white text-gray-700 text-center border-4  outline-black outline outline-6 p-5 text-3xl
   font-mono" src={i3} alt="TESTIMAG"/><p className=' lg-text-[24px] font-sans'>
    <b>Third travel </b></p><br/>
    <p>Start your adventure in New Zealand's most populous city, Auckland. There's a reason it's nicknamed "The City of Sails." While in the harbor, enjoy the cityscape views as you head to Rangitoto, New Zealand's youngest and largest volcano. 

  <br/> <a className="text-xs text-blue-800 underline"    href="https://www.getmyboat.com/journal/experiences/10-boating-adventures-of-a-lifetime/">
  ...See more...
  </a>

    </p>

    </div></div></div>
    )
}