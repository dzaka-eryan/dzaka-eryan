/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Mentorship from './components/Mentorship';
import Blog from './components/Blog';
import Footer from './components/Footer';
import MentorshipRegistration from './components/MentorshipRegistration';
import SuccessPage from './components/SuccessPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Mentorship />
      <Blog />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <main className="selection:bg-brand-accent selection:text-brand-bg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register-mentorship" element={<MentorshipRegistration />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </main>
    </Router>
  );
}

