import React from 'react';
import { HeroNutritionist } from '../components/HomeViews/HeroNutritionist';
import { FeatureGrid } from '../components/HomeViews/FeatureGrid';
import { DashboardMock } from '../components/Sections';
import { BottomDownload } from '../components/HomeViews/AboutSection';

export const Home = () => {
  return (
    <>
      <HeroNutritionist />
      <FeatureGrid />
      <DashboardMock />
      <BottomDownload />
    </>
  );
};
