import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

import { Course } from "../../types";
import { Container } from "./styles";

interface CoursesListProps {
  courses: Course[];
  onEdit(id: number): void;
  onDelete(id: number): void;
}

export const CoursesList: React.FC<CoursesListProps> = ({ courses, onEdit, onDelete }) => {
  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Descrição</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            courses.map( course => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>
                  <Link to={`/course/${course.id}`}>{course.title}</Link>
                </td>
                <td>{course.description}</td>
                <td>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    onClick={ () => onEdit(course.id) }
                    style={{ marginRight: "3px" }}
                  >
                    editar
                  </Button>
                  <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={ () => onDelete(course.id) }
                  >
                    deletar
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  )
}