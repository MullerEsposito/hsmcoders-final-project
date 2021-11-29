import { ChangeEvent, useContext } from "react";
import _ from 'lodash';
import { Button } from "react-bootstrap";

import { Input } from "../Input";

import { Course } from "../../types";
import { Container } from "./styles";
import { CoursesContext } from "../../context/CoursesProvider";

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

interface CreateCourseFormProps {
  isEditMode: boolean;
  setIsEditMode(status: boolean): void;
}

export const CreateCourseForm: React.FC<CreateCourseFormProps> = ({ isEditMode, setIsEditMode }) => {
  const { 
    course,
    courses,
    setCourse,
    setCourses } = useContext(CoursesContext);

  const createCourse = (course: Course) => {
    if (!_.isEmpty(course)) {
      if (isEditMode) {
        const updatedCourses = courses.map(c => (
          c.id === course.id 
            ? { ...course, updated_at: new Date().getTime() } 
            : c)
        );
        setCourses(updatedCourses);
        setIsEditMode(false);
      } else {
        course.id = courses.length + 1;
        course.created_at = new Date().getTime();
        courses.push(course);
        setCourses(courses);
      }
      setCourse(emptyCourse);
    }
  }

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target?.files[0]);
      setCourse({
        ...course,
        image: e.target?.files[0]
      })
    }
  }

  return (
    <Container>
      <Input value={course?.title} onChange={e => setCourse({
        ...course, 
        title: e.currentTarget.value
      })}>
        Título
      </Input>
      <Input value={course.description} onChange={e => setCourse({
        ...course,
        description: e.currentTarget.value
      })}>
        Descrição
      </Input>
      <Input type="file" onChange={onImageChange}>
        Imagem
      </Input>
      <Input value={course.teacher} onChange={e => setCourse({
        ...course,
        teacher: e.currentTarget.value
      })}>
        Professor
      </Input>
      <Button 
        variant="success" 
        size="sm"
        onClick={() => createCourse(course)}
        style={{ margin: "10px 10px 10px 0" }}
      >
        {isEditMode 
          ? "Atualizar"
          : "Criar curso"
        }
      </Button>
      <Button 
        variant="warning" 
        size="sm"
        onClick={() => {
          setCourse(emptyCourse);
          setIsEditMode(false);
        }}
        style={{ margin: "10px 0" }}
      >
        Limpar
      </Button>
    </Container>
  )
}