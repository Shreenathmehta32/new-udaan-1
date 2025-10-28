import ContactSection from '@/components/sections/contact-section';
import HeroSection from '@/components/sections/hero-section';
import OurWorkSection from '@/components/sections/our-work-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <OurWorkSection />
      <ContactSection />
    </div>
  );
}
