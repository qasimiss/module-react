import './app.scss';
import {Routes, Route} from "react-router-dom";
import NotFound from '../../pages/404';
import ShowCase from '../../pages/showcase';
import Trash from '../../pages/trash';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowCase/>} ></Route>
        <Route path="/trash" element={<Trash/>} ></Route>
        <Route path="*" element={<NotFound/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
