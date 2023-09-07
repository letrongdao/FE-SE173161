import ListOfFilms from "./components/films/ListOfFilms";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/others/ThemeContext";
import NotFound from "./components/others/NotFound";
import FilmDetails from "./components/films/FilmDetails";
import About from './components/others/About'
import News from './components/others/News'
import Contact from './components/contacts/Contact'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/">
          <Route index element={<ListOfFilms />} />
          <Route path=':id' element={<FilmDetails />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
