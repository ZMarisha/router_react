import './App.css';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Posts } from './components/Blog/Posts/Posts';
import { Redact } from './components/Blog/Posts/Redact/Redact';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />}/>
          <Route path='blog/:id' element={<Posts />} />
          <Route path='blog/:id/redact' element={<Redact />} />
          <Route path='settings' element={<Settings />}/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
