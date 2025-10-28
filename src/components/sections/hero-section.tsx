import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="container flex flex-col items-center py-20 text-center md:py-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-headline mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
          Soaring Beyond the Skies
        </h1>
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          Welcome to UDAAN, where innovation takes flight. Explore our groundbreaking projects, join our events, and become part of a community that's shaping the future of aerospace.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild style={{ boxShadow: '0 0 20px -5px hsl(var(--primary))' }}>
            <Link href="/about">
              About Us <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/events">Upcoming Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
