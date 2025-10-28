import { achievements } from '@/lib/mock-data';
import { Trophy } from 'lucide-react';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="bg-background/50 py-20">
      <div className="container">
        <h2 className="font-headline mb-16 text-center text-4xl font-bold">Our Milestones</h2>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {achievements.map((item, index) => (
            <div key={item.id} className="relative mb-12">
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                <div className="w-1/2 px-6">
                  <div className="rounded-lg border border-border/60 bg-card/80 p-6 shadow-md backdrop-blur-sm">
                    <p className="mb-1 text-sm text-muted-foreground">{item.year}</p>
                    <h3 className="font-headline mb-2 text-lg font-semibold">{item.achievement}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-8 ring-background" style={{boxShadow: '0 0 10px hsl(var(--primary))'}}>
                  <Trophy className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
