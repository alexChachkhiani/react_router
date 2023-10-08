import { Routes, Route, Link } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import SportPage from "./Pages/SportPage";
import TheatrePage from "./Pages/TheatrePage";
import AboutPage from "./Pages/AboutPage";
import MovieProfilePage from "./Pages/MovieProfilePage";
import './App.css'

function App() {
  return (
    <>
      <ul className="header-container">
        <Link to={"/"}>
          <li>
            <button>Home Page</button>
          </li>
        </Link>
        <Link to={"movies"}>
          <li>
            <button>Movies</button>
          </li>
        </Link>
        <Link to={"sport"}>
          <li>
            <button>Sport</button>
          </li>
        </Link>
        <Link to={"theatre"}>
          <li>
            <button>Theatre</button>
          </li>
        </Link>
        <Link to={"about-page"}>
          <li>
            <button>About Page</button>
          </li>
        </Link>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="movies" element={<MoviesPage />}/>
        <Route path="sport" element={<SportPage />}/>
        <Route path="theatre" element={<TheatrePage />}/>
        <Route path="about-page" element={<AboutPage />}/>
        <Route path="movies/:moviesName" element={<MovieProfilePage />}/>
      </Routes>
    </>
  )
}

export default App
