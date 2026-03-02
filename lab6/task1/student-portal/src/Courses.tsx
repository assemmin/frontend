interface Course {
    id: number;
    title: string;
  }
  
  const courses: Course[] = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "TypeScript Fundamentals" },
    { id: 3, title: "Web Development" },
  ];
  
  const Courses: React.FC = () => {
    return (
      <div>
        <h1>Courses</h1>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>{course.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Courses;