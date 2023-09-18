import React from 'react';
import About from './about.mdx'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
                <div className="flex flex-row">
                    <div className="container max-w-7xl px-4 sm:ml-64">

                        <div className="flex text-center flex-col justify-center mb-24 mt-24">
                            <h1 className="text-white-900 text-4xl font-bold mb-8">
                                Project <b className='text-green-700 '>&nbsp;Details</b>
                            </h1>
                        </div>
                        <About />
                    </div>
                </div>
            </div>
        </main>
    );
}






