import React from 'react';
import About from './about.mdx'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">

                <div className="flex flex-col">
                    <div className="container max-w-7xl px-4">
                        <div className="flex flex-wrap justify-center text-center mb-24 mt-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h1 className="text-white-900 text-4xl font-bold mb-8 flex items-center">
                                    Project <b className='text-green-700 '>&nbsp;Details</b>
                                </h1>

                            </div>
                            <p className="text-red-500 text-lg font-light">
                                {/* BotaniScan is a web application that uses machine learning to identify plant diseases. It is a project that was created for the SIH(Smart India Hackathon) 2023. */}
                            </p>
                            
                        </div>
                        <About />
                    </div>
                </div>
            </div>
        </main>





    );
}






