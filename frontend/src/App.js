import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import NewsForm from './components/NewsForm';
import NewsUpdateForm from './components/NewsUpdateForm';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<NewsList/>} />
          <Route path="/:id" element={<NewsDetail/>} />
          <Route path="/create" element={<NewsForm/>} />
          <Route path="/edit/:id" element={<NewsUpdateForm/>} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;





