import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { CardContent } from "../../ui/card";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface Link {
  url: string;
  label: string;
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string[];
  period: string;
  badgeLabel?: string;
  imageSrc: string;
  achievements?: string[];
  skills: string[];
  links?: Link[];
  isImageRight?: boolean;
  isVideo?: boolean;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  period,
  badgeLabel,
  imageSrc,
  achievements = [],
  skills = [],
  links = [],
  isImageRight = false,
  isVideo = false,
}: ProjectCardProps) {
  return (
    <div className="md:grid md:grid-cols-2">
      {!isImageRight && (
        <div className="bg-muted relative">
          <div className="absolute inset-0 z-0">
            {isVideo ? (
              <video
                src={imageSrc}
                className="w-full h-full object-cover opacity-40 filter sepia 
                transition-all duration-300 group-hover:opacity-100 group-hover:filter-none"
                autoPlay
                muted
                loop
              />
            ) : (
              <img
                src={imageSrc}
                className="w-full h-full object-cover opacity-30 filter grayscale 
                transition-all duration-300 group-hover:opacity-100 group-hover:filter-none"
              />
            )}
          </div>
          <div
            className="relative z-10 flex flex-col items-center justify-center h-full p-6 
            transition-opacity duration-300 group-hover:opacity-0"
          >
            <Badge className="mb-4">{badgeLabel || period}</Badge>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
        </div>
      )}

      <CardContent className={`p-6 space-y-4 ${isImageRight ? "order-2 md:order-1" : ""}`}>
        <h3 className="text-2xl font-bold">{title}</h3>

        {description.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}

        {achievements.length > 0 && (
          <div className="space-y-2">
            <p className="font-medium">Key achievements:</p>
            <ul className="list-disc list-inside space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {skills.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-4">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        )}

        {links.length > 0 && (
          <div className="flex gap-3 pt-2">
            {links.map((link, index) => (
              <Button key={index} variant="outline" size="sm" asChild>
                <a href={link.url} className="inline-flex items-center gap-1">
                  <ExternalLinkIcon className="h-4 w-4" /> {link.label}
                </a>
              </Button>
            ))}
          </div>
        )}
      </CardContent>

      {isImageRight && (
        <div className="bg-muted relative order-1 md:order-2">
          <div className="absolute inset-0 z-0">
            {isVideo ? (
              <video
                src={imageSrc}
                className="w-full h-full object-cover opacity-40 filter sepia 
                transition-all duration-300 group-hover:opacity-100 group-hover:filter-none"
                autoPlay
                muted
                loop
              />
            ) : (
              <img
                src={imageSrc}
                className="w-full h-full object-cover opacity-40 filter sepia 
                transition-all duration-300 group-hover:opacity-100 group-hover:filter-none"
              />
            )}
          </div>
          <div
            className="relative z-10 flex flex-col items-center justify-center h-full p-6 
            transition-opacity duration-300 group-hover:opacity-0"
          >
            <Badge className="mb-4">{badgeLabel || period}</Badge>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}
