import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl">Pietro Zullo</Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/resume" className={navigationMenuTriggerStyle()}>
                  Resume
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/projects" className={navigationMenuTriggerStyle()}>
                  Projects
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/skills" className={navigationMenuTriggerStyle()}>
                  Skills
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
              <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          About Me
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Learn more about my background, skills, and interests.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link
                      to="/skills"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Skills</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Technical skills and expertise
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/education"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Education</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Academic background and certifications
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hobbies"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Hobbies</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Personal interests and activities
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/projects" className={navigationMenuTriggerStyle()}>
                  Projects
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/experience" className={navigationMenuTriggerStyle()}>
                  Experience
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/blog" className={navigationMenuTriggerStyle()}>
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div>
          <Button asChild variant="outline">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 