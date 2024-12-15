import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Banner />
        <div className="w-full flex flex-col min-h-screen bg-[#ECEBDE]">
        
          <main className="flex flex-1 justify-center p-4">
            <Routes>
              <Route path="/" element={<Home />} />     
              <Route path="/movies/:id" element={<MovieDetailsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
