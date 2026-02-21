import { Course, getCourseById } from "./data";
import { useParams, useLoaderData } from "react-router-dom";

const CourseDetail: React.FC = () => {
  const { id } = useParams();

  const { course } = useLoaderData() as {
    course: Course;
  };

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>{course.description}</p>
      <p>Route ID parameter: {id}</p>
    </div>
  );
};

export default CourseDetail;