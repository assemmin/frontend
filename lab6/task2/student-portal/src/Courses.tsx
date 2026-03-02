import { Course, getCourseById } from "./data";
import { useParams, useLoaderData } from "react-router-dom";

export default function CourseDetail() {
  const { course } = useLoaderData() as { course: Course };
  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}