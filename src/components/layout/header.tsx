import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';
import Image from 'next/image';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/events', label: 'Events' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/team', label: 'Team' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image src="https://i.postimg.cc/MKCt3k26/udaan-1.png" alt="UDAAN Logo" width={40} height={40} className="h-10 w-10" />
          <span className="font-headline text-lg font-bold">UDAAN</span>
        </Link>
        
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="outline" asChild>
            <Link href="https://www.isro.gov.in/" target="_blank" rel="noopener noreferrer">
              ISRO
            </Link>
          </Button>
          <ThemeToggleButton />
        </div>

        <div className="ml-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <Image src="https://i.postimg.cc/MKCt3k26/udaan-1.png" alt="UDAAN Logo" width={24} height={24} className="h-6 w-6" />
                  <span className="sr-only">UDAAN</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
