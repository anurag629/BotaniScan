import React from "react";
import AboutProject from "@/components/aboutProject/about";

const MainContent: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">
            
            <div className="flex flex-col">
                <AboutProject />
            </div>
      </div>
    </main>
    );
}

export default MainContent;