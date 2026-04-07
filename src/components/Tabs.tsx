import { useState } from 'react';

export function Tabs() {
  const [activeTab, setActiveTab] = useState('abstract');

  const tabs = [
    { id: 'abstract', label: 'Abstract' },
    { id: 'figures', label: 'Figures' },
    { id: 'movies', label: 'Movies' },
    { id: 'links', label: 'Data & Links' }
  ];

  return (
    <div className="w-full">
      {/* Centered Tab Navigation */}
      <div className="flex justify-center border-b border-slate-100 mb-10">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-bold transition-all ${
                activeTab === tab.id
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area - All Centered */}
      <div className="flex flex-col items-center text-center">

        {activeTab === 'abstract' && (
          <div className="max-w-2xl animate-fade-in">
             <p className="text-lg text-slate-700 leading-relaxed text-justify md:text-left">
Fear is a critical brain function that enables us to learn to avoid danger. While many researchers have argued that fear has evolved to escape predators, how varying predatory pressures have shaped fear and other rewards, including positive social rewards for collective grouping, remains an open question. In this study, we investigate the relationship between predatory pressure and fear using an evolutionary simulation of reinforcement learning (RL) agents, where prey and predator RL agents co-evolve their reward functions, including visual rewards for observing prey and predators. We found that fear-like negative visual rewards for predators only when predators have larger visual rewards from their prey, making them more active in foraging. Furthermore, we found an interesting alternating branching of predator visual reward, which serves as an effective example of the emergence of fear.
            </p>
          </div>
        )}

        {activeTab === 'figures' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full animate-fade-in">
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="h-48 bg-slate-200 rounded mb-2"></div>
                <p className="text-xs text-slate-500">Fig 1: Agent Mortality Rate</p>
             </div>
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="h-48 bg-slate-200 rounded mb-2"></div>
                <p className="text-xs text-slate-500">Fig 2: Neural Activation Map</p>
             </div>
          </div>
        )}

        {activeTab === 'movies' && (
          <div className="w-full animate-fade-in flex flex-col items-center">
            <video className="w-full rounded-2xl shadow-xl" controls>
              <source src="/videos/simulation.mp4" type="video/mp4" />
            </video>
            <p className="mt-4 text-slate-500 font-medium italic">Supp. Movie 1: Evolved Avoidance Pattern</p>
          </div>
        )}

        {activeTab === 'links' && (
          <div className="animate-fade-in py-10 text-slate-600">
            <p className="mb-4">Dataset available upon request.</p>
            <p className="text-sm">Contact: yuji@example.edu</p>
          </div>
        )}
      </div>
    </div>
  );
}
