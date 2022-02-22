import './App.css';
import { Route } from "wouter";

import SearchResults from './pages/SearchResults';
import StaticContext  from './context/StaticContext';
import Detail from './pages/Detail';
import { GifsContextProvider } from './context/GifsContext';
import React, { Suspense } from 'react';


const HomePage = React.lazy( () =>  import('./pages/Home') );

function App() {


  return (
    <StaticContext.Provider value={ {
      name: 'AndresDev',
      suscribeteAlCanal: true
    }}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
          
            <GifsContextProvider>
              <Route 
                component={HomePage} 
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
              <Route 
                component={()=> <h1>404 error :(</h1>}
                path="/404"
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
