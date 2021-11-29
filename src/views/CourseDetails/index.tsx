// import { isNumber } from "lodash";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { CoursesContext } from "../../context/CoursesProvider";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { formatDate } from "../../util";

export function CourseDetails(): JSX.Element {
  // const navigate = useNavigate();
  const { courses } = useContext(CoursesContext);
  const { id = "" } = useParams<"id">();

  // if (!isNumber(id)) {
  //   console.log(`redirect`);
  //   navigate("/");
  // } 

  const course = id ? courses.find(course => course.id === +id) : null;
  console.log(course?.created_at);
  return (
    <Container>
      <section>
        <fieldset>
          <legend>Detalhes do Curso</legend>

          <h3>{`${course?.title}`}</h3>
          <p>
            {`Criado em ${ course ? formatDate(new Date(course.created_at)) : ""} `}
            <span style={{ fontSize: "0.6rem" }}>{`(Última atualização: ${ course ? formatDate(new Date(course.updated_at)) : ""}) `}</span>
          </p>
          {course?.image 
            ? <img src={URL.createObjectURL(course.image)} alt="" />
            : <img src="https://ru-screwd.com/wp-content/uploads/2019/07/Courses-in-Finance0.jpg" alt="" />
          }
          <fieldset>
            <legend>Descrição</legend>
            <p>{course?.description}</p>
          </fieldset>
          <fieldset>
            <legend>Professor</legend>
            <p>{`${course?.teacher}`}</p>
          </fieldset>
          <ul>
            {course?.classes.map(lesson => (
              <li key={lesson}>
                <a href={lesson}>
                  {lesson}
                </a>
              </li>
            ))}
          </ul>
        </fieldset>
        <Link to="/">
          <Button typeButton="return" />
        </Link>
      </section>
    </Container>
  );

}