import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
  HomeIcon,
} from "@radix-ui/react-icons";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const renderSuccessMessage = () => (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <div className="rounded-full bg-primary/10 p-3">
        <EnvelopeClosedIcon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold">Message Sent!</h3>
      <p className="text-muted-foreground">
        Thank you for reaching out. I'll get back to you soon.
      </p>
    </div>
  );

  const renderContactForm = () => (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Subject of your message"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" className="mt-2" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );

  const renderSocialLink = (
    href: string,
    Icon: typeof GitHubLogoIcon,
    title: string,
    handle: string
  ) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
    >
      <Icon className="h-5 w-5" />
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{handle}</p>
      </div>
    </a>
  );

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl font-bold tracking-tighter">Get in Touch</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>{isSubmitted ? renderSuccessMessage() : renderContactForm()}</CardContent>
          </Card>

          {/* Contact Information */}
          <div className="flex flex-col gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here are the ways you can reach me directly.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border">
                      <EnvelopeClosedIcon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Email</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border">
                      <HomeIcon className="h-5 w-5 text-muted-foreground" />
                    </div>
                      <p className="text-sm font-medium leading-none">Location</p>
                      <p className="text-sm text-muted-foreground">Zurich, Switzerland</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links Card */}
            <Card>
              <CardHeader>
                <CardTitle>Connect with Me</CardTitle>
                <CardDescription>Follow me on social media or check out my work.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a
                    href="https://github.com/pietrozullo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg transition-colors hover:bg-muted p-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border">
                      <GitHubLogoIcon className="h-5 w-5" />
                    </div>
                      <p className="text-sm font-medium leading-none">GitHub</p>
                      <p className="text-sm text-muted-foreground">github.com/pietrozullo</p>
                  </a>

                  <a
                    href="https://linkedin.com/in/pietrozullo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg transition-colors hover:bg-muted p-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border">
                      <LinkedInLogoIcon className="h-5 w-5" />
                    </div>
                      <p className="text-sm font-medium leading-none">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">linkedin.com/in/pietrozullo</p>
                  </a>

                  <a
                    href="https://twitter.com/pietrozullo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg transition-colors hover:bg-muted p-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border">
                      <TwitterLogoIcon className="h-5 w-5" />
                    </div>
                      <p className="text-sm font-medium leading-none">Twitter</p>
                      <p className="text-sm text-muted-foreground">twitter.com/pietrozullo</p>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
