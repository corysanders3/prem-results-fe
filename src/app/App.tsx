import './App.css';
import { useEffect, useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { getPremData } from '../util/apiCalls';
import { PremResults } from '../util/interface';
import Nav from '../nav/Nav';
import Form from '../form/Form';
import Home from '../home/Home';
import Standings from '../standings/Standings';
import Gameboard from '../gameboard/Gameboard';
import Error from '../error/Error';
import About from '../about/About';

function App() {
  const [results, setResults] = useState<PremResults[] | []>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setError('');
    getPremData('premresults')
      .then(data => setResults(data))
      .catch(err => setError(err.message))
  }, [])

  return (
    <div className="app">
      <Nav />
      <Form results={results}/>
      { error && <p className='api-error'>{error}</p>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/standings/:club/:year' element={<Standings results={results} />} />
        <Route path='/goalsgame' element={<Gameboard />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <footer className='bottom'></footer>
    </div>
  );
}

export default App;
