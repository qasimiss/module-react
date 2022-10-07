import './app.scss';
import Header from '../app-header/header';
import Cards from '../cards';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Cards />
      </div>
    </div>
  );
}

export default App;
