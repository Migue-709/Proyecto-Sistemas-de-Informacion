import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/welcome/HeroSection';
import FeaturesSection from '../components/welcome/FeaturesSection';
import ProcessStepsSection from '../components/welcome/ProcessStepsSection';
import UserTypesSection from '../components/welcome/UserTypesSection';
import FooterSection from '../components/Footer';

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProcessStepsSection />
      <UserTypesSection />
      <FooterSection />
    </div>
  );
}
