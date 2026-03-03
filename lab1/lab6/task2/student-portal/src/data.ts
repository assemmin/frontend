
export interface Course {
    id: number;
    title: string;
    description: string;
  }
  
  export const courses: Course[] = [
    { id: 1, title: "React Basics", description: "Learn React from scratch" },
    { id: 2, title: "TypeScript", description: "Learn TypeScript" },
    { id: 3, title: "Vite + React", description: "Learn Vite with React" },
  ];
  
  export function getCourseById(id: number): Course | undefined {
    return courses.find(course => course.id === id);
  }