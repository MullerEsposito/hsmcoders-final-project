import { Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { CoursesProvider } from "./context/CoursesProvider";
import { CourseDetails } from "./views/CourseDetails";
import { Home } from './views/Home';

function App() {
  return (
    <div>
      <Header />
      <CoursesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </CoursesProvider>
    </div>
  );
}

export default App;
