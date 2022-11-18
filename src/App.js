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
import FacebookAuth from './React/Facebook with Firebase Authentication/FacebookAuth.jsx';
import FacebookAuthNav from './React/Facebook with Firebase Authentication/components/Navbar.jsx'
import FacebookAuthAddPost from './React/Facebook with Firebase Authentication/components/AddPosts.jsx'
import FacebookAuthSignup from './React/Facebook with Firebase Authentication/components/Signup.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cv' element={<CV />} />
          <Route path='/loginform' element={<LoginForm />} />
          <Route path='/newswebsite' element={<NewsWebsite />} />
          <Route path='/newswebsitewithapi' element={<NewsWebsiteWithApi />} />
          <Route path='/darklightmode' element={<DarkLightMode />} />
          <Route path='/facebookpost' element={<Facebook />} />
          <Route path='/facebookloginsignupwithposting' element={<FacebookLoginSignup />} />
          <Route path="/facebookloginsignupwithposting/home" element={<FacebookLoginSignupHome />} />
          <Route path="/facebookloginsignupwithposting/signup" element={<FacebookLoginSignupSignup />} />
          <Route path='/facebookwithfirebaseauthentication' element={<FacebookAuth />} />
          <Route path="/facebookwithfirebaseauthentication/home" element={<><FacebookAuthNav /><FacebookAuthAddPost /></>} />
          <Route path="/facebookwithfirebaseauthentication/signup" element={<FacebookAuthSignup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
