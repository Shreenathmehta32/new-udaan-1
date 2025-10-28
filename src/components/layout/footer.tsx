import { Github, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/udaan_aeromodelling_club?igsh=ZGhhMWdnMjNldDA=', name: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@udaanaeromodelingclub?si=Lkut5ysBWjH97F19', name: 'Youtube' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/udaan-aeromodelling-club/', name: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 py-8">
      <div className="container flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
           <Image src="https://i.postimg.cc/MKCt3k26/udaan-1.png" alt="UDAAN Logo" width={20} height={20} className="h-5 w-5" />
          <p className="text-center text-sm leading-loose text-muted-foreground">
            &copy; {new Date().getFullYear()} UDAAN. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
