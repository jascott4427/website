import { PipBoyLayout } from "@/components/pip-boy-layout"

export default function HobbiesPage() {
  const hobbies = [
    {
      icon: "♠",
      name: "WASTELAND EXPLORATION",
      description:
        "Discovering pre-war ruins and collecting artifacts. Mapping uncharted territories and documenting findings.",
      level: 9,
    },
    {
      icon: "♣",
      name: "TERMINAL HACKING",
      description:
        "Bypassing security systems and recovering lost data from abandoned facilities. Specializing in RobCo terminals.",
      level: 10,
    },
    {
      icon: "♥",
      name: "WEAPON MODIFICATION",
      description:
        "Crafting and upgrading firearms with custom attachments. Experimenting with energy weapon conversions.",
      level: 7,
    },
    {
      icon: "♦",
      name: "SETTLEMENT BUILDING",
      description:
        "Designing and constructing fortified settlements. Optimizing resource production and defense systems.",
      level: 8,
    },
    {
      icon: "◆",
      name: "RADIO BROADCASTING",
      description:
        "Operating Radio Freedom. Curating playlists of pre-war music and broadcasting news across the Commonwealth.",
      level: 6,
    },
    {
      icon: "▲",
      name: "COOKING & CHEMISTRY",
      description:
        "Preparing wasteland cuisine and brewing chems. Experimenting with new recipes and radiation-free ingredients.",
      level: 7,
    },
    {
      icon: "▼",
      name: "POWER ARMOR MAINTENANCE",
      description: "Repairing and customizing power armor suits. Collecting fusion cores and rare armor modifications.",
      level: 8,
    },
    {
      icon: "●",
      name: "PHOTOGRAPHY",
      description:
        "Documenting life in the wasteland through photography. Capturing moments of beauty in the post-apocalypse.",
      level: 5,
    },
  ]

  const interests = [
    "Pre-war technology restoration",
    "Vault-Tec history and lore",
    "Robotics and AI development",
    "Wasteland survival tactics",
    "Energy weapon research",
    "Post-apocalyptic architecture",
    "Radio communication systems",
    "Nuka-Cola collecting",
  ]

  return (
    <PipBoyLayout>
      <div className="space-y-8">
        <div className="border-b-2 border-primary pb-4">
          <div className="text-xs mb-2 opacity-70">&gt; ACCESSING RECREATIONAL DATA...</div>
          <h1 className="text-3xl md:text-5xl font-bold">[HOBBIES & INTERESTS]</h1>
          <div className="text-sm mt-2 opacity-80">LIFE OUTSIDE THE CODE // WASTELAND ACTIVITIES</div>
        </div>

        {/* Hobbies Grid */}
        <div>
          <div className="text-xl font-bold mb-4 border-b border-primary pb-2">[PRIMARY HOBBIES]</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hobbies.map((hobby) => (
              <div
                key={hobby.name}
                className="border-2 border-primary p-4 bg-background/50 hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">{hobby.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{hobby.name}</h3>
                    <div className="flex items-center gap-2 text-xs mb-2">
                      <span>SKILL LEVEL:</span>
                      <div className="flex gap-1">
                        {[...Array(10)].map((_, i) => (
                          <span key={i} className={i < hobby.level ? "opacity-100" : "opacity-30"}>
                            ▮
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed opacity-90">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div className="border border-primary p-6 bg-background/50">
          <div className="text-xl font-bold mb-4 border-b border-primary pb-2">[AREAS OF INTEREST]</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="text-primary">▸</span>
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="border border-primary p-6 bg-background/50">
          <div className="text-xl font-bold mb-4 border-b border-primary pb-2">[WASTELAND ACHIEVEMENTS]</div>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>&gt; Discovered 47 unique locations across the Commonwealth</p>
            <p>&gt; Successfully hacked 200+ terminals without triggering lockouts</p>
            <p>&gt; Built and maintained 12 thriving settlements</p>
            <p>&gt; Collected complete set of Nuka-Cola variants (including Quantum!)</p>
            <p>&gt; Survived 3 rad storms without RadAway</p>
            <p>&gt; Restored 5 suits of T-60 power armor to full functionality</p>
          </div>
        </div>
      </div>
    </PipBoyLayout>
  )
}
