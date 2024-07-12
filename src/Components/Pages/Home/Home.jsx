import React from 'react';
import Banner from './Banner';
import MainContent from './MainContent/MainContent';
import Content from './MainContent/Content';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MainContent></MainContent>
            <Content></Content>
            <Slider></Slider>
        </div>
    );
};

export default Home;