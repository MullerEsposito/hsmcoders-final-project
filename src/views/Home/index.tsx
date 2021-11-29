import { useContext, useState } from 'react';

import { Container } from './styles';
import { CoursesList } from '../../components/CoursesList';
import { CoursesContext } from '../../context/CoursesProvider';
import { CreateCourseForm } from '../../components/CreateCourseForm';

export function Home(): JSX.Element {
  const { 
    courses,
    setCourse,
    setCourses } = useContext(CoursesContext);
  const [isEditMode, setIsEditMode] = useState(false);
  

  const editCourse = (id: number) => {
    const courseToEdit = courses.find(course => course.id === id);
    if (courseToEdit) {
      setCourse(courseToEdit);
      setIsEditMode(true);
    } 
  }

  const deleteCourse = (id: number) => {
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses);
  }  

  return (
    <Container>
      <CoursesList courses={courses} onEdit={editCourse} onDelete={deleteCourse} />
      
      <CreateCourseForm isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
    </Container>
  );
}