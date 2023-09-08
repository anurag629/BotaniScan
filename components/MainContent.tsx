import React from 'react';
import Header from './Header';
import Team from './Team';

const MainContent: React.FC = () => {
    return (
        <div className="container max-w-7xl px-4">
            <Header />
            <Team />
        </div>
    );
};

export default MainContent;
