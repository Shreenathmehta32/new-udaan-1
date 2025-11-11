import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'faq-1',
    question: 'What is Udaan Aeromodelling Club?',
    answer:
      'Udaan Aeromodelling Club is a community of students and enthusiasts passionate about designing, building, and flying model aircraft. We aim to promote aerospace creativity and hands-on learning.',
  },
  {
    id: 'faq-2',
    question: 'Do I need any prior experience to join?',
    answer:
      'Not at all! Beginners are always welcome. We provide mentorship and training sessions to help new members understand the basics of aerodynamics, electronics, and model construction.',
  },
  {
    id: 'faq-3',
    question: 'What kind of models does the club build?',
    answer:
      'The club works on fixed-wing aircraft, gliders, drones, and RC-powered models. We also experiment with autonomous and hybrid designs as part of research projects.',
  },
  {
    id: 'faq-4',
    question: 'How can I become a member?',
    answer:
      'You can join by clicking the “Join Us” button on the homepage and filling out the registration form. Once submitted, our team will contact you with onboarding details.',
  },
  {
    id: 'faq-5',
    question: 'Does the club participate in competitions?',
    answer:
      'Yes! We actively participate in national and international aeromodelling competitions such as SAE Aero Design, IIT Techfests, and other RC flight events.',
  },
  {
    id: 'faq-6',
    question: 'What facilities or resources are available for members?',
    answer:
      'Members get access to our workshop, 3D printers, simulation software, RC equipment, and guided training sessions by senior mentors and faculty advisors.',
  },
  {
    id: 'faq-7',
    question: 'How often does the club conduct workshops or flight sessions?',
    answer:
      'We organize regular workshops, flight training sessions, and model testing every month. These events help members gain practical experience and improve their aeromodelling skills.',
  },
];

const FaqsSection = () => {
  return (
    <section id="faqs" className="py-20 bg-background/50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">
            Frequently Asked Questions ✈️
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-border/60 bg-card/80 backdrop-blur-sm rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqsSection;
