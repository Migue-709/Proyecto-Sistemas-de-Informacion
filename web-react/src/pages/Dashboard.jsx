import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopBar from '../components/dashboard/TopBar';
import StatsCards from '../components/dashboard/StatsCards';
import ProgressTracker from '../components/dashboard/ProgressTracker';
import QuickActions from '../components/dashboard/QuickActions';
import UpcomingTasks from '../components/dashboard/UpcomingTasks';
import RecentActivity from '../components/dashboard/RecentActivity';
import DocumentsView from '../components/dashboard/DocumentsView';
import ScheduleView from '../components/dashboard/ScheduleView';
import InstitutionsView from '../components/dashboard/InstitutionsView';
import ReportsView from '../components/dashboard/ReportsView';
import ConfigurationView from '../components/dashboard/ConfigurationView';
import HelpView from '../components/dashboard/HelpView';
import NotificationsView from '../components/dashboard/NotificationsView';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'documents':
        return <DocumentsView />;
      case 'schedule':
        return <ScheduleView />;
      case 'institutions':
        return <InstitutionsView />;
      case 'reports':
        return <ReportsView />;
      case 'configuration':
        return <ConfigurationView />;
      case 'help':
        return <HelpView />;
      case 'notifications':
        return <NotificationsView />;
      case 'overview':
      default:
        return (
          <div className="max-w-[1600px] mx-auto p-8 space-y-8">
            <StatsCards />
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <ProgressTracker />
                <QuickActions />
              </div>
              <div className="space-y-8">
                <UpcomingTasks />
                <RecentActivity />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onSectionChange={setActiveSection} />
        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
}
