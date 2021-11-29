import { createContext, useState } from "react";

import db from '../courses.json';
import { Course } from "../types";

interface CoursesProviderProps {
  children: JSX.Element;
}

interface CoursesContextData {
  course: Course;
  courses: Course[];
  setCourse(course: Course): void;
  setCourses(courses: Course[]): void;
}

const emptyCourse: Course = {
  id: 0,
  title: "",
  description: "",
  image: null,
  teacher: "",
  created_at: 0,
  updated_at: 0,
  classes: [],
}

export const CoursesContext = createContext({} as CoursesContextData);

export function CoursesProvider({
  children,
}: CoursesProviderProps): JSX.Element {
  const [courses, setCourses] = useState<Course[]>(db.courses);
  const [course, setCourse] = useState<Course>(emptyCourse)

  return (
    <CoursesContext.Provider value={{ course, courses, setCourses, setCourse }}>
      { children }
    </CoursesContext.Provider>
  )
}