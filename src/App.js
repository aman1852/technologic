import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import CourseDetail from './components/Courses/CourseDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/courses' element={<Courses />} />
          <Route exact path='/courses/:id' element={<CourseDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
