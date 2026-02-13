// Interface for user data
export interface User {
    name: string;
    email: string;
    age: number;
  }
  
  // Union type alias
  export type SkillLevel = "Beginner" | "Intermediate" | "Expert";
  
  // Interface for skill data
  export interface Skill {
    id: number;
    name: string;
    level: SkillLevel;
  }