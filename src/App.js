import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './React/Home.js'
import CV from './React/CV/CV.jsx';
import LoginForm from './React/Login Form/Login.jsx';
import NewsWebsite from './React/News Website/NewsWebsite.jsx';
import NewsWebsiteWithApi from './React/News Website with Api/Home/NewsHome.jsx'
import DarkLightMode from './React/DarkLightMode/DarkLightMode.jsx';
import Facebook from './React/Facebook Post/Facebook.jsx';
import FacebookLoginSignup from './React/Facebook Login Signup with Posting/FacebookLoginSignup.jsx'
import FacebookLoginSignupHome from './React/Facebook Login Signup with Posting/components/Home.jsx'
import FacebookLoginSignupSignup from './React/Facebook Login Signup with Posting/components/Signup.jsx'


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
          <Route path='/darklightmode' element={<DarkLightMode />} exact />
          <Route path='/facebookpost' element={<Facebook />} exact />
          <Route path='/facebookloginsignupwithposting' element={<FacebookLoginSignup />} exact />
          <Route path="/facebookloginsignupwithposting/home" element={<FacebookLoginSignupHome />} />
          <Route path="/facebookloginsignupwithposting/signup" element={<FacebookLoginSignupSignup />} />
          <Route path='/facebookwithfirebaseauthentication' element={<Home />} exact />
          <Route path='/hackathonattendanceapp' element={<Home />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
