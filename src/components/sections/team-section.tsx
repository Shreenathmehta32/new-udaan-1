import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { teamMembers } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const teamMembersWithImages = teamMembers.map(member => {
  const image = PlaceHolderImages.find(img => img.id === member.imageId);
  return { ...member, imageUrl: image?.imageUrl, imageHint: image?.imageHint };
});


const TeamSection = () => {
  return (
    <section id="team" className="py-20">
      <div className="container">
        <h2 className="font-headline mb-12 text-center text-4xl font-bold">Core Team</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembersWithImages.map((member) => (
            <Card key={member.id} className="bg-card/80 pt-6 text-center backdrop-blur-sm">
              <CardContent className="flex flex-col items-center">
                {member.imageUrl && (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="mb-4 h-32 w-32 rounded-full border-2 border-primary object-cover"
                    style={{boxShadow: '0 0 15px -2px hsl(var(--primary))'}}
                    data-ai-hint={member.imageHint}
                  />
                )}
                <h3 className="font-headline text-lg font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <div className="mt-4 flex gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5"/></Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5"/></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
