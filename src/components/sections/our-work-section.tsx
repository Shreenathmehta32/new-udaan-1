import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const workItems = [
  {
    title: 'RC Plane',
    description: 'Designing and building radio-controlled aircraft for various competitions and research purposes.',
    imageId: 'work-rc-plane',
  },
  {
    title: 'Hovercraft',
    description: 'Developing amphibious vehicles that can travel over land, water, mud, and ice.',
    imageId: 'work-hovercraft',
  },
  {
    title: 'Drone',
    description: 'Working with multi-rotor systems for autonomous flight, surveillance, and aerial photography.',
    imageId: 'work-drone',
  },
  {
    title: 'Workshops',
    description: 'Conducting hands-on workshops to spread knowledge about aerospace engineering and related technologies.',
    imageId: 'work-workshop',
  },
];

const workItemsWithImages = workItems.map(item => {
  const image = PlaceHolderImages.find(img => img.id === item.imageId);
  return { ...item, imageUrl: image?.imageUrl, imageHint: image?.imageHint };
});

const OurWorkSection = () => {
  return (
    <section id="our-work" className="py-20 bg-background/50">
      <div className="container">
        <h2 className="font-headline mb-12 text-center text-4xl font-bold">Our Work</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {workItemsWithImages.map((item) => (
            <Card key={item.title} className="group overflow-hidden bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
               {item.imageUrl && (
                <div className="aspect-video overflow-hidden border-b">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={item.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
