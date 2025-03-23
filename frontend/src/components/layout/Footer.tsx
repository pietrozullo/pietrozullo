import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { 
  GitHubLogoIcon, 
  LinkedInLogoIcon, 
  TwitterLogoIcon, 
  EnvelopeClosedIcon 
} from "@radix-ui/react-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Pietro Zullo</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Software engineer and web developer passionate about creating elegant solutions to complex problems.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">Projects</Link>
              <Link to="/experience" className="text-sm text-muted-foreground hover:text-foreground">Experience</Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link>
            </nav>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold">Resources</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/resume" className="text-sm text-muted-foreground hover:text-foreground">Resume</Link>
              <Link to="/skills" className="text-sm text-muted-foreground hover:text-foreground">Skills</Link>
              <Link to="/education" className="text-sm text-muted-foreground hover:text-foreground">Education</Link>
              <Link to="/hobbies" className="text-sm text-muted-foreground hover:text-foreground">Hobbies</Link>
            </nav>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold">Contact</h4>
            <Button asChild variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground">
              <a href="mailto:contact@pietrozullo.com">contact@pietrozullo.com</a>
            </Button>
            <div className="flex gap-2 mt-2">
              <Button size="icon" variant="ghost" asChild>
                <a href="https://github.com/pietrozullo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GitHubLogoIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="https://linkedin.com/in/pietrozullo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedInLogoIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="https://twitter.com/pietrozullo" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <TwitterLogoIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="mailto:contact@pietrozullo.com" aria-label="Email">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 border-t pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Pietro Zullo. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 