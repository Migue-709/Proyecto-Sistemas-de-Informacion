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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <div className="w-full max-w-[1600px] mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8 space-y-6 lg:space-y-8">
            <StatsCards />
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-6 lg:space-y-8 lg:col-span-2">
                <ProgressTracker />
                <QuickActions />
              </div>
              <div className="space-y-6 lg:space-y-8">
                <UpcomingTasks />
                <RecentActivity />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar PC */}
      <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      </div>

      {/* Sidebar telefono*/}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-50 w-72 max-w-full">
            <Sidebar
              activeSection={activeSection}
              onSectionChange={(section) => {
                setActiveSection(section);
                setSidebarOpen(false);
              }}
            />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          onSectionChange={setActiveSection}
          onToggleSidebar={() => setSidebarOpen((open) => !open)}
        />
        <main className="flex-1 overflow-y-auto pb-6 lg:pb-8">{renderContent()}</main>
      </div>
    </div>
  );
}
