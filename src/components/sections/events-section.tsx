import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { upcomingEvents, pastEvents } from '@/lib/mock-data';

type Event = {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
}

const EventCard = ({ event }: { event: Event }) => (
  <Card className="bg-card/80 backdrop-blur-sm">
    <CardHeader>
      <CardTitle>{event.title}</CardTitle>
      <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-2">
        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {event.date}</span>
        <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {event.location}</span>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{event.description}</p>
    </CardContent>
  </Card>
);

const EventsSection = () => {
  return (
    <section id="events" className="py-20">
      <div className="container">
        <h2 className="font-headline mb-12 text-center text-4xl font-bold">Club Activities</h2>
        <Tabs defaultValue="upcoming" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-8">
            <div className="grid gap-6">
              {upcomingEvents.map(event => <EventCard key={event.id} event={event} />)}
            </div>
          </TabsContent>
          <TabsContent value="past" className="mt-8">
            <div className="grid gap-6">
              {pastEvents.map(event => <EventCard key={event.id} event={event} />)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EventsSection;
