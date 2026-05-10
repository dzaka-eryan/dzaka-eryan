/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Mentorship from './components/Mentorship';
import Blog from './components/Blog';
import Footer from './components/Footer';
import MentorshipRegistration from './components/MentorshipRegistration';
import SuccessPage from './components/SuccessPage';
import Preloader from './components/Preloader';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Experience />
      <Skills />
      <Mentorship />
      {/* <Blog /> */}
      {/* <Footer /> */}
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="selection:bg-brand-accent selection:text-brand-bg min-h-screen"
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register-mentorship" element={<MentorshipRegistration />} />
              <Route path="/success" element={<SuccessPage />} />
            </Routes>
          </motion.main>
        )}
      </AnimatePresence>
    </Router>
  );
}

