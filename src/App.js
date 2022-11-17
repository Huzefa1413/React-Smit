import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './React/Home.js'
import CV from './React/CV/CV.jsx';
import LoginForm from './React/Login Form/Login.jsx';
import NewsWebsite from './React/News Website/NewsWebsite.jsx';
import NewsWebsiteWithApi from './React/News Website with Api/Home/NewsHome.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/cv' element={<CV />} exact />
          <Route path='/loginform' element={<LoginForm />} exact />
          <Route path='/newswebsite' element={<NewsWebsite />} exact />
          <Route path='/newswebsitewithapi' element={<NewsWebsiteWithApi />} exact />
          <Route path='/darklightmode' element={<Home />} exact />
          <Route path='/facebookpost' element={<Home />} exact />
          <Route path='/facebookloginsignupwithposting' element={<Home />} exact />
          <Route path='/facebookwithfirebaseauthentication' element={<Home />} exact />
          <Route path='/hackathonattendanceapp' element={<Home />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
