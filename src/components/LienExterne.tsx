import type { ReactNode } from "react";

interface LienExterneProps {
  href: string;
  children: ReactNode;
}

export default function LienExterne({ href, children }: LienExterneProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
