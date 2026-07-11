import { useState } from "react";
import ppCum from "../assets/pp-cum.png";
import ppReg from "../assets/pp-reg.png";
import treeS1 from "../assets/tree-seed-1.png";
import kdeMouth from "../assets/kde-mouth.png";
import kdeDelta from "../assets/kde-delta-n.png";
import ppVideo from "../assets/predator2-crop.mp4";

export function Tabs() {
  const [activeTab, setActiveTab] = useState("abstract");
  const tabs = [
    { id: "abstract", label: "Abstract" },
    { id: "figures", label: "Figures" },
    { id: "movies", label: "Movies" },
  ];

  // Using null means no figure is currently zoomed
  const [zoomedFigId, setZoomedFigId] = useState<number | null>(null);
  const figures = [
    {
      id: 1,
      src: ppCum.src,
      alt: "Average reward weights per time in prey and predators.",
      caption: "Fig 1: Evolved Rewards",
    },
    {
      id: 2,
      src: ppReg.src,
      alt: "Relationship between predator's prey rewards and prey's predator rewards",
      caption:
        "Fig 2: Relationship between predator's prey rewards and prey's predator rewards.",
    },
    {
      id: 3,
      src: treeS1.src,
      alt: "Phylogenetic tree of prey with seed 1",
      caption: "Fig 3: Phylogenetic tree of prey with seed 1.",
    },
    {
      id: 4,
      src: kdeMouth.src,
      alt: "Comparison with different mouth sizes",
      caption: "Fig 4: Comparison of evolved reward weights with different mouth sizes, showing more prey agents eovlved fear for predators with larger mouths.",
    },
    {
      id: 5,
      src: kdeDelta.src,
      alt: "Comparison with different food recovery rate",
      caption: "Fig 5: Comparison of evolved reward weights with different food recovery rates, showing less prey agents eovlved fear in resource-rich environments.",
    },
  ];
  const activeZoomedFig = figures.find((f) => f.id === zoomedFigId);
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
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area - All Centered */}
      <div className="flex flex-col items-center text-center">
        {activeTab === "abstract" && (
          <div className="max-w-2xl animate-fade-in">
            <p className="text-lg text-slate-700 leading-relaxed text-justify md:text-left">
              Fear is a critical brain function that enables us to learn to
              avoid danger. While many researchers have argued that fear has
              evolved to escape predators, how varying predatory pressures have
              shaped fear and other rewards, including positive social rewards
              for collective grouping, remains an open question. In this study,
              we investigate the relationship between predatory pressure and
              fear using an evolutionary simulation of reinforcement learning
              (RL) agents, where prey and predator RL agents co-evolve their
              reward functions, including visual rewards for observing prey and
              predators. We found that fear-like negative visual rewards for
              predators only when predators have larger visual rewards from
              their prey, making them more active in foraging. Furthermore, we
              found an interesting alternating branching of predator visual
              reward, which serves as an effective example of the emergence of
              fear.
            </p>
          </div>
        )}

        {activeTab === "figures" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full animate-fade-in">
            {figures.map((fig) => (
              <div
                key={fig.id}
                className="bg-slate-50 p-4 rounded-xl border border-slate-100"
              >
                <img
                  src={fig.src}
                  alt={fig.alt}
                  className="w-full h-auto block rounded mb-2 cursor-zoom-in hover:opacity-90 transition"
                  onClick={() => setZoomedFigId(fig.id)}
                />
                <p className="text-xs text-slate-500">{fig.caption}</p>
              </div>
            ))}
          </div>
        )}

        {/* Shared Single Overlay */}
        {activeZoomedFig && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setZoomedFigId(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <img
                src={activeZoomedFig.src}
                alt={activeZoomedFig.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 text-sm backdrop-blur transition"
                onClick={() => setZoomedFigId(null)}
              >
                ✕ Close
              </button>
            </div>
          </div>
        )}
        {activeTab === "movies" && (
          <div className="w-full animate-fade-in flex flex-col items-center">
            <video className="w-full rounded-2xl shadow-xl" controls>
              {/* 2. Use the imported variable as the src */}
              <source src={ppVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-4 text-slate-500 font-medium italic">
              Supp. Movie 1: Videos of evolved prey and predators with seed 1.
              P1 prey agents have positive weights for observing prey and
              predators and prefer to gather. P2 prey agents have negative
              weights for observing others, liking solitary behavior more.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
