import { Card } from "../ui/card";
import { ReactNode } from "react";

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
}

export function CardWrapper({ children, className = "" }: CardWrapperProps) {
  return <Card className={`overflow-hidden group ${className}`}>{children}</Card>;
}
