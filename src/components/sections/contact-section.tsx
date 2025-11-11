"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ContactForm from "./contact-form";

export function ContactSection() {
    return (
        <section id="contact" className="py-20">
            <div className="container">
                <div className="mx-auto max-w-2xl">
                    <Card className="bg-card/80 backdrop-blur-sm">
                        <CardHeader className="text-center">
                            <CardTitle className="font-headline text-4xl font-bold">Contact Us</CardTitle>
                            <CardDescription>
                                Have a question or want to collaborate? Drop us a message!
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
