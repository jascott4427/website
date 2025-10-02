import { PipBoyLayout } from "@/components/pip-boy-layout"

export default function GameDevPage() {
  const projects = [
    {
      id: "GD-001",
      name: "WASTELAND TACTICS",
      type: "TURN-BASED STRATEGY",
      status: "IN DEVELOPMENT",
      progress: 65,
      description:
        "A tactical RPG set in the post-apocalyptic wasteland. Features grid-based combat, resource management, and branching storylines.",
      tech: ["UNITY", "C#", "SHADER GRAPH", "CINEMACHINE"],
      features: [
        "Turn-based tactical combat system",
        "Procedural map generation",
        "Character progression & skill trees",
        "Dynamic weather & day/night cycle",
      ],
    },
    {
      id: "GD-002",
      name: "TERMINAL BREACH",
      type: "PUZZLE / HACKING",
      status: "PROTOTYPE",
      progress: 40,
      description:
        "A hacking puzzle game inspired by Fallout's terminal minigame. Players must crack passwords and bypass security systems.",
      tech: ["GODOT", "GDSCRIPT", "PIXEL ART"],
      features: [
        "Word-matching puzzle mechanics",
        "Progressive difficulty system",
        "Retro terminal aesthetic",
        "Leaderboard & achievements",
      ],
    },
    {
      id: "GD-003",
      name: "VAULT DWELLER",
      type: "SURVIVAL / MANAGEMENT",
      status: "CONCEPT",
      progress: 15,
      description:
        "Manage your own vault in this survival management sim. Balance resources, keep dwellers happy, and defend against threats.",
      tech: ["UNITY", "C#", "DOTween", "ADDRESSABLES"],
      features: [
        "Vault building & customization",
        "Dweller management & assignments",
        "Resource production chains",
        "Random event system",
      ],
    },
    {
      id: "GD-004",
      name: "RADROACH RAMPAGE",
      type: "ARCADE / ACTION",
      status: "COMPLETED",
      progress: 100,
      description:
        "A fast-paced arcade shooter where you defend your settlement from waves of mutated creatures. High score focused gameplay.",
      tech: ["PHASER.JS", "TYPESCRIPT", "WEB AUDIO API"],
      features: ["Wave-based enemy spawning", "Power-up system", "Local high score tracking", "Retro pixel art style"],
    },
  ]

  return (
    <PipBoyLayout>
      <div className="space-y-6">
        <div className="border-b-2 border-primary pb-4">
          <div className="text-xs mb-2 opacity-70">&gt; LOADING GAME DEVELOPMENT PROJECTS...</div>
          <h1 className="text-3xl md:text-5xl font-bold">[GAME DEV PROJECTS]</h1>
          <div className="text-sm mt-2 opacity-80">INTERACTIVE ENTERTAINMENT // WASTELAND EDITION</div>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="border-2 border-primary p-6 bg-background/50">
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs opacity-70">#{project.id}</span>
                  <h2 className="text-2xl md:text-3xl font-bold">{project.name}</h2>
                </div>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="border border-primary px-2 py-1">{project.type}</span>
                  <span
                    className={`border px-2 py-1 ${
                      project.status === "COMPLETED"
                        ? "border-primary bg-primary/20"
                        : project.status === "IN DEVELOPMENT"
                          ? "border-primary bg-primary/10"
                          : "border-primary/50"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span>DEVELOPMENT PROGRESS:</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="border border-primary h-4 bg-background">
                  <div className="h-full bg-primary transition-all" style={{ width: `${project.progress}%` }} />
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4 opacity-90">{project.description}</p>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="text-xs font-bold mb-2 opacity-70">TECHNOLOGY:</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs border border-primary/50 px-2 py-1 bg-background/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <div className="text-xs font-bold mb-2 opacity-70">KEY FEATURES:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">▸</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Game Dev Stats */}
        <div className="border border-primary p-6 bg-background/50">
          <div className="text-xl font-bold mb-4 border-b border-primary pb-2">[DEVELOPMENT STATISTICS]</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-xs opacity-70">TOTAL PROJECTS</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">1</div>
              <div className="text-xs opacity-70">COMPLETED</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">2</div>
              <div className="text-xs opacity-70">IN DEVELOPMENT</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">5K+</div>
              <div className="text-xs opacity-70">LINES OF CODE</div>
            </div>
          </div>
        </div>
      </div>
    </PipBoyLayout>
  )
}
