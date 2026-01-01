import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Layout from './pages/home/Layout.jsx';
import About from './pages/about/About.jsx';
import Shop from './pages/shop/Shop.jsx';
import Pages from './pages/pages/Pages.jsx';
import Blog from './pages/blog/Blog.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);