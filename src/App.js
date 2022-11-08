import './App.css';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Posts } from './components/Blog/Posts/Posts';
import { Redact } from './components/Blog/Posts/Redact/Redact';
import { Login } from './components/Login/Login';
import { Private } from './components/HOC/Private';
import { NewPost } from './components/Blog/NewPost/NewPost';
import { AuthProvider } from './components/HOC/AuthProvider';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <AuthProvider>
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />}/>
          <Route path='blog/:id' element={<Posts />} />
          <Route path='blog/:id/redact' element={<Redact />} />
          <Route path='blog/newpost' element={
            <Private>
              <NewPost />
            </Private>
          } />
          <Route path='login' element={<Login />}/>
          <Route path='settings' element={<Settings />}/>
          <Route path='settings-app' element={<Navigate to='/settings' replace/>}/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
