import './app.scss';
import {Routes, Route} from "react-router-dom";
import NotFound from '../../pages/404';
import ShowCase from '../../pages/showcase';
import Trash from '../../pages/trash';
import About from '../../pages/about';
import Auth from '../../pages/authorization';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowCase/>} />
        <Route path="/trash" element={<Trash/>} />
        <Route path="/about/:id" element={<About/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
