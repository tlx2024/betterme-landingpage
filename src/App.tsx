/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Solutions } from './pages/Solutions';
import { Articles } from './pages/Articles';
import { About } from './pages/About';
import { AiAssistant } from './pages/AiAssistant';
import { Pricing } from './pages/Pricing';
import { Help } from './pages/Help';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="articles" element={<Articles />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="ai-assistant" element={<AiAssistant />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </Router>
  );
}
