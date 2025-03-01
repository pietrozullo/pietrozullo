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
  MobileIcon
} from "@radix-ui/react-icons";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl font-bold tracking-tighter">Get in Touch</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <EnvelopeClosedIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
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
              )}
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="flex flex-col gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Here are the ways you can reach me directly.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <EnvelopeClosedIcon className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a 
                      href="mailto:contact@pietrozullo.com" 
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      contact@pietrozullo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MobileIcon className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <HomeIcon className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Connect with Me</CardTitle>
                <CardDescription>
                  Follow me on social media or check out my work.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <a 
                    href="https://github.com/pietrozullo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                  >
                    <GitHubLogoIcon className="h-5 w-5" />
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-sm text-muted-foreground">
                        github.com/pietrozullo
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/pietrozullo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                  >
                    <LinkedInLogoIcon className="h-5 w-5" />
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">
                        linkedin.com/in/pietrozullo
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://twitter.com/pietrozullo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                  >
                    <TwitterLogoIcon className="h-5 w-5" />
                    <div>
                      <h3 className="font-medium">Twitter</h3>
                      <p className="text-sm text-muted-foreground">
                        twitter.com/pietrozullo
                      </p>
                    </div>
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