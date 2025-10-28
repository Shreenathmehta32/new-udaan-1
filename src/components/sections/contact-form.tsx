"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactForm = () => {
    return (
        <div className="text-center">
             <Button asChild style={{ boxShadow: '0 0 20px -5px hsl(var(--primary))' }} size="lg">
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=udaan@poornima.org" target="_blank" rel="noopener noreferrer">Send Message</Link>
            </Button>
        </div>
    )
}

export default ContactForm;
