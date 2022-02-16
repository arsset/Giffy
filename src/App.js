import './App.css';
import { Route } from "wouter";
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import StaticContext  from './context/StaticContext';
import Detail from './pages/Detail';
import { GifsContextProvider } from './context/GifsContext';

function App() {


  return (
    <StaticContext.Provider value={ {
      name: 'AndresDev',
      suscribeteAlCanal: true
    }}>
      <div className="App">
        <section className="App-content">
         
          <GifsContextProvider>
            <Route 
              component={Home} 
              path='/'
            />

            <Route 
              path="/search/:keyword" 
              component={SearchResults} 
            />
            <Route 
              path="/gif/:id" 
              component={Detail} 
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
