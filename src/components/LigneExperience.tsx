import type { Experience } from "@/types/portfolio";

interface LigneExperienceProps {
  experience: Experience;
}

export default function LigneExperience({ experience }: LigneExperienceProps) {
  return (
    <div className="experience">
      <p className="eyebrow">{experience.date}</p>
      <h3>{experience.titre}</h3>
      <p className="role">{experience.role}</p>
      <p>{experience.description}</p>
    </div>
  );
}
