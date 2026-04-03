import { useState } from 'react';

export function Tabs() {
  const [activeTab, setActiveTab] = useState('images');

  const tabs = [
    { id: 'images', label: 'Images' },
    { id: 'videos', label: 'Videos' },
    { id: 'links', label: 'Links' }
  ];

  return (
    <div>
      <div flex space-x-4 border-b border-gray-200 mb-8>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 px-1 text-sm font-medium transition-colors ${
              activeTab === tab.id
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content min-h-[300px]">
        {activeTab === 'images' && <div animate-fade-in>Images will be placed here.</div>}
        {activeTab === 'videos' && <div animate-fade-in>Videos will be placed here.</div>}
        {activeTab === 'links' && <div animate-fade-in>Links will be placed here.</div>}
      </div>
    </div>
  );
}
