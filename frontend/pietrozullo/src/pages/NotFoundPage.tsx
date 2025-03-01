import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export function NotFoundPage() {
  return (
    <div className="container flex h-[calc(100vh-16rem)] flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">404</h1>
        <h2 className="text-3xl font-semibold tracking-tight">Page Not Found</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/contact">Contact Me</Link>
        </Button>
      </div>
    </div>
  );
} 