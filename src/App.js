import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';

export const BlogConext=createContext();


function App() {
  const [blogs, setBlogs]=useState([]);
 
  return (
   <BlogConext.Provider value={[blogs, setBlogs]}>
      <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog/:idName' element={<BlogDetails></BlogDetails>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
   </BlogConext.Provider>

  );
}

export default App;
