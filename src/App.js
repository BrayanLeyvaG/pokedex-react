import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Welcome } from './components/Welcome';
import ProtectedRoutes from './components/ProtectedRoutes';
import {Pokemons} from './components/Pokemons'
import {PokemonsInfo} from './components/PokemonsInfo'
import { Header } from './components/Header';
import { useSelector } from 'react-redux';


function App() {

  const userName = useSelector(state => state.userName)

  return (
    <HashRouter>
      <div className="App">
        {userName && <Header/>}
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokemons' element={<Pokemons/>}/>
            <Route path='/pokemons/:id' element={<PokemonsInfo/>}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
