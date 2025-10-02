import { PipBoyLayout } from "@/components/pip-boy-layout"

export default function HomePage() {
  return (
    <PipBoyLayout>
      <div className="space-y-8">
        {/* Terminal Header */}
        <div className="border-b-2 border-primary pb-4">
          <div className="text-xs mb-2 opacity-70">&gt; ACCESSING PERSONAL DATA...</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">VAULT DWELLER</h1>
          <div className="text-xl md:text-2xl opacity-80">SOFTWARE ENGINEER // WASTELAND SURVIVOR</div>
        </div>

        {/* Stats Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-primary p-4 bg-background/50">
            <div className="text-lg font-bold mb-3 border-b border-primary pb-2">[S.P.E.C.I.A.L.]</div>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span>STRENGTH:</span>
                <span>▮▮▮▮▮▮▮▯▯▯</span>
              </div>
              <div className="flex justify-between">
                <span>PERCEPTION:</span>
                <span>▮▮▮▮▮▮▮▮▯▯</span>
              </div>
              <div className="flex justify-between">
                <span>ENDURANCE:</span>
                <span>▮▮▮▮▮▮▮▯▯▯</span>
              </div>
              <div className="flex justify-between">
                <span>CHARISMA:</span>
                <span>▮▮▮▮▮▮▮▮▮▯</span>
              </div>
              <div className="flex justify-between">
                <span>INTELLIGENCE:</span>
                <span>▮▮▮▮▮▮▮▮▮▮</span>
              </div>
              <div className="flex justify-between">
                <span>AGILITY:</span>
                <span>▮▮▮▮▮▮▮▮▯▯</span>
              </div>
              <div className="flex justify-between">
                <span>LUCK:</span>
                <span>▮▮▮▮▮▮▮▯▯▯</span>
              </div>
            </div>
          </div>

          <div className="border border-primary p-4 bg-background/50">
            <div className="text-lg font-bold mb-3 border-b border-primary pb-2">[STATUS]</div>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>&gt; OCCUPATION: Full-Stack Developer</p>
              <p>&gt; SPECIALIZATION: React, Next.js, TypeScript</p>
              <p>&gt; LOCATION: The Commonwealth</p>
              <p>&gt; MISSION: Building pixel-perfect interfaces for the wasteland</p>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="border border-primary p-6 bg-background/50">
          <div className="text-lg font-bold mb-4 border-b border-primary pb-2">[PERSONAL LOG]</div>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              &gt; Day 2,847: Another successful deployment to the wasteland. The settlers are pleased with the new
              trading interface I built. Performance optimizations reduced load times by 40%.
            </p>
            <p>
              &gt; I specialize in crafting accessible, pixel-perfect digital experiences that blend thoughtful design
              with robust engineering. My favorite work lies at the intersection of design and development, creating
              experiences that not only look great but are meticulously built for performance and usability.
            </p>
            <p>
              &gt; When I'm not coding, you'll find me exploring the wasteland, collecting bottle caps, and occasionally
              fighting off radroaches. The post-apocalyptic life of a developer is never boring.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-primary p-4 bg-background/50 text-center hover:bg-primary/10 transition-colors cursor-pointer">
            <div className="text-3xl mb-2">▣</div>
            <div className="text-xs">VIEW PROJECTS</div>
          </div>
          <div className="border border-primary p-4 bg-background/50 text-center hover:bg-primary/10 transition-colors cursor-pointer">
            <div className="text-3xl mb-2">♦</div>
            <div className="text-xs">HOBBIES</div>
          </div>
          <div className="border border-primary p-4 bg-background/50 text-center hover:bg-primary/10 transition-colors cursor-pointer">
            <div className="text-3xl mb-2">▲</div>
            <div className="text-xs">GAME DEV</div>
          </div>
          <div className="border border-primary p-4 bg-background/50 text-center hover:bg-primary/10 transition-colors cursor-pointer">
            <div className="text-3xl mb-2">■</div>
            <div className="text-xs">RESUME</div>
          </div>
        </div>
      </div>
    </PipBoyLayout>
  )
}
