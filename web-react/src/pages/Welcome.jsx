import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/welcome/HeroSection';
import LegalInfoSection from '../components/welcome/LegalInfoSection';
import ProcessStepsSection from '../components/welcome/ProcessStepsSection';
import SystemFeaturesSection from '../components/welcome/SystemFeaturesSection';
import AvailableProjectsSection from '../components/welcome/AvailableProjectsSection';
import AccessSystemSection from '../components/welcome/AccessSystemSection';
import FooterSection from '../components/Footer';

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      <LegalInfoSection />
      <ProcessStepsSection />
      <SystemFeaturesSection />
      <AvailableProjectsSection />
      <AccessSystemSection />
      <FooterSection />
    </div>
  );
}



