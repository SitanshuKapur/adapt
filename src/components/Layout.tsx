import React, { useState } from 'react';

// NEW: Import our new components
import { EngagementTracker } from './EngagementTracker';
import { Arsenal } from './Arsenal';
import { KnowledgeBase } from './KnowledgeBase';

// This defines the names of our main views
type View = 'tracker' | 'arsenal' | 'kb';

export function Layout() {
  const [activeView, setActiveView] = useState<View>('tracker');

  // This is a helper function to render the correct title
  const renderTitle = () => {
    switch (activeView) {
      case 'tracker':
        return 'Engagement Tracker';
      case 'arsenal':
        return 'The Arsenal';
      case 'kb':
        return 'Knowledge Base';
    }
  };

  // NEW: This helper function renders the correct component
  const renderActiveView = () => {
    switch (activeView) {
      case 'tracker':
        return <EngagementTracker />;
      case 'arsenal':
        return <Arsenal />;
      case 'kb':
        return <KnowledgeBase />;
      default:
        return <EngagementTracker />; // Default to the tracker
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gray-800 p-4 flex flex-col border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-8 text-center">ADAPT</h1>
        <nav className="flex flex-col space-y-2">
          <button
            onClick={() => setActiveView('tracker')}
            className={`p-2 rounded text-left transition-colors ${
              activeView === 'tracker' ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`}
          >
            🎯 Engagement Tracker
          </button>
          <button
            onClick={() => setActiveView('arsenal')}
            className={`p-2 rounded text-left transition-colors ${
              activeView === 'arsenal' ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`}
          >
            🛠️ The Arsenal
          </button>
          <button
            onClick={() => setActiveView('kb')}
            className={`p-2 rounded text-left transition-colors ${
              activeView === 'kb' ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`}
          >
            🧠 Knowledge Base
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-4">{renderTitle()}</h2>
        
        {/* UPDATED: We now call our new function to render the active component */}
        {renderActiveView()}
      </main>
    </div>
  );
}