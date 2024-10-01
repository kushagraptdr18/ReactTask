import React from "react";

function Page(){
    return(
        <div id="Page" className="bg-black h-screen w-screen flex">
            
            <div id="left" className=" h-full w-[40%] py-3">
                <h1 className="text-4xl text-white uppercase text-center"> Portfolio.</h1>

                <div className="absolute bottom-[20%] left-[22%]">
                    <h1 className="text-white text-4xl uppercase font-serif">MY Name IS</h1>
                    <h1 className="text-white text-5xl uppercase font-serif ">KushagraPatidar</h1>
                    <button className="bg-yellow-300 w-[380px] px-[20px] py-[10px] text-3xl mt-2 text-black font-bold uppercase">i'M a ui devloper</button>
                </div>

            </div>

            <div id="right" className="bg-green-200 h-full w-[60%]">

                <div id="nav" className="bg-[#656565] h-[100px] w-full flex gap-[70px] items-center px-[170px] ">
                    <h4 className="font-mono font-medium text-xl text-white text-underlined uppercase ">Home</h4>
                    <h4 className="font-mono font-medium text-xl text-white uppercase" >About</h4>
                    <h4 className="font-mono font-medium text-xl text-white uppercase">Works</h4>
                    <h4 className="font-mono font-medium text-xl text-white uppercase">BLog</h4>
                    <h4 className="font-mono font-medium text-xl text-white uppercase">Contact</h4>
                </div>

                <img className="w-full object-cover h-[674px]" src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMGltYWdlfGVufDB8fDB8fHww" alt="" />

            </div>

        </div>
    )

}

export default Page;