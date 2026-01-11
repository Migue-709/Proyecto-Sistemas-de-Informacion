import React, { useState } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminTopBar from '../components/admin/AdminTopBar';
import AdminOverview from '../components/admin/AdminOverview';
import AdminStudentsView from '../components/admin/AdminStudentsView';
import ProjectApprovalsView from '../components/admin/ProjectApprovalsView';
import AuditLogView from '../components/admin/AuditLogView';
import AdminConfigurationView from '../components/admin/AdminConfigurationView';
import AdminHelpView from '../components/admin/AdminHelpView';
import AdminNotificationsView from '../components/admin/AdminNotificationsView';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'students':
        return <AdminStudentsView />;
      case 'approvals':
        return <ProjectApprovalsView onNavigateToAuditLog={() => setActiveSection('auditLog')} />;
      case 'auditLog':
        return <AuditLogView />;
      case 'settings':
        return <AdminConfigurationView />;
      case 'help':
        return <AdminHelpView />;
      case 'notifications':
        return <AdminNotificationsView />;
      case 'overview':
      default:
        return <AdminOverview onGoToApprovals={() => setActiveSection('approvals')} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar PC */}
      <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen">
        <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      </div>

      {/* Sidebar telefono */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-50 w-72 max-w-full">
            <AdminSidebar
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
        <AdminTopBar
          onSectionChange={setActiveSection}
          onToggleSidebar={() => setSidebarOpen((open) => !open)}
        />
        <main className="flex-1 overflow-y-auto pb-6 lg:pb-8">{renderContent()}</main>
      </div>
    </div>
  );
}
