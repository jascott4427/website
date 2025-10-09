import { PipBoyLayout } from "@/components/pip-boy-layout"
import Image from "next/image"

export default function HobbiesPage() {
  const hobbies = [
    {
      icon: "♠",
      name: "GUITAR",
      description:
        "Proficiency in the operation of a portable, non-powered audio-frequency generator. Used to replicate pre-War auditory patterns, a key factor in maintaining mental resilience during extended deployments.",
      level: 5,
      image: "/assets/photos/hobbies/guitar.jpg",
    },
    {
      icon: "♠",
      name: "GAME DEVELOPMENT",
      description:
        "Specializes in the fabrication of interactive digital environments using Unity and proprietary engine architectures. Focus: creating immersive wasteland simulations and automated entity behavior systems from first principles.",
      level: 2,
      image: "/assets/photos/hobbies/gamedev.jpg",
    },
    {
      icon: "♠",
      name: "VIDEO GAMES",
      description:
        "Engages in advanced cognitive conditioning through pre-War digital combat simulators. Maintains strategic readiness and problem-solving acuity by interfacing with complex virtual scenarios.",
      level: 10,
      image: "/assets/photos/hobbies/videogames.jpg",
    },
    {
      icon: "♠",
      name: "BAKING",
      description:
        "Expertise in the chemical transformation of unstable organic compounds into preserved, nutrient-dense sustenance. A vital skill for long-term survival in resource-scarce environments.",
      level: 7,
      image: "/assets/photos/hobbies/baking.jpg",
    },
    {
      icon: "♠",
      name: "SWIMMING",
      description:
        "Conducts regular endurance operations in hydro-environments. Enhances cardiopulmonary resilience and muscle group efficiency, essential for traversing flooded urban sectors and riverine territories.",
      level: 9,
      image: "/assets/photos/hobbies/swimming.jpg",
    },
  ]

  return (
    <PipBoyLayout>
      <div className="space-y-8">
        <div className="border-b-2 border-primary pb-4">
          <div className="text-xs mb-2 opacity-70">&gt; ACCESSING RECREATIONAL DATA...</div>
          <h1 className="text-3xl md:text-5xl font-bold">[HOBBIES & INTERESTS]</h1>
          <div className="text-sm mt-2 opacity-80">LIFE OUTSIDE OF WORK // WASTELAND ACTIVITIES</div>
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
                {hobby.image && (
                  <div className="mb-3 border border-primary overflow-hidden">
                    <Image
                      src={hobby.image || "/placeholder.svg"}
                      alt={hobby.name}
                      width={400}
                      height={250}
                      className="w-full h-auto object-cover"
                      style={{ filter: "sepia(0.3) contrast(1.1)" }}
                    />
                  </div>
                )}

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
