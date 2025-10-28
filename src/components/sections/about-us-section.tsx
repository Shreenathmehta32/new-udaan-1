import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Target, Users } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold">About UDAAN</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            UDAAN is a student-led club dedicated to the advancement of aerospace technology. We are a passionate community of innovators, engineers, and enthusiasts committed to pushing the boundaries of flight.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader className="items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary" style={{boxShadow: '0 0 15px -2px hsl(var(--primary))'}}>
                <Rocket className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline mt-4">8+ Times Winners</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>We are proud to announce that our team has triumphed in 8 Aeromodelling Events across IITs and NITs!</p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader className="items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary" style={{boxShadow: '0 0 15px -2px hsl(var(--primary))'}}>
                <Target className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline mt-4">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>To be a center of excellence in collegiate aerospace engineering, recognized for our innovative projects, competitive success, and our contribution to the broader aerospace community.</p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader className="items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary" style={{boxShadow: '0 0 15px -2px hsl(var(--primary))'}}>
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline mt-4">Our Community</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>We are a diverse group of students united by a shared passion for flight. We believe in teamwork, mentorship, and creating an inclusive environment where every member can learn, grow, and contribute.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
