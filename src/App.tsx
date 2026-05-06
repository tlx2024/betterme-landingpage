import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FooterSection } from './components/Footer';

const HomePage = lazy(() => import('./pages/Home').then((module) => ({ default: module.HomePage })));
const FeaturesPage = lazy(() => import('./pages/Features').then((module) => ({ default: module.FeaturesPage })));
const SolutionsPage = lazy(() => import('./pages/Solutions').then((module) => ({ default: module.SolutionsPage })));
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Articles = lazy(() => import('./pages/Articles').then((module) => ({ default: module.Articles })));
const AiAssistant = lazy(() => import('./pages/AiAssistant').then((module) => ({ default: module.AiAssistant })));
const AICustomizePage = lazy(() => import('./pages/AICustomize').then((module) => ({ default: module.AICustomizePage })));
const PricingPage = lazy(() => import('./pages/Pricing').then((module) => ({ default: module.PricingPage })));
const DownloadPage = lazy(() => import('./pages/Download').then((module) => ({ default: module.DownloadPage })));
const Help = lazy(() => import('./pages/Help').then((module) => ({ default: module.Help })));
const StoriesPage = lazy(() => import('./pages/Stories').then((module) => ({ default: module.StoriesPage })));

const RouteFallback = () => (
  <main className="min-h-[60vh] flex items-center justify-center px-4">
    <div className="text-center">
      <div className="w-10 h-10 rounded-full border-2 border-[#208752]/20 border-t-[#208752] animate-spin mx-auto mb-4" />
      <p className="text-sm font-medium text-gray-500">正在加载页面...</p>
    </div>
  </main>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased text-gray-900 bg-white min-h-screen selection:bg-[#208752]/20 selection:text-[#208752]">
        <Navbar />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/ai-assistant" element={<AiAssistant />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/ai-customize" element={<AICustomizePage />} />
            <Route path="/help" element={<Help />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </Suspense>
        <FooterSection />
      </div>
    </BrowserRouter>
  );
}
