import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home.js"
import SearchPage from "./Pages/SearchPage/SearchPage.js"
import UserProfile from "./Pages/UserProfile/UserProfile.js"
import GetInTouch from "./Pages/GetInTouch/GetInTouch.js"
import Opportunity from "./Pages/Opportunity/Opportunity.js"
import Require from "./Pages/mentoringRequire/Require.js"
import Reqinfo from "./Pages/Reqinfo/Reqinfo.js"
import Mentoring from "./Pages/Mentoring/Mentoring.js"
import NotFound from "./Pages/NotFound/NotFound.js"
import Mentor from './Pages/Mentor/Mentor.js';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/getInTouch" element={<GetInTouch />} />
        <Route path="/opportunity" element={<Opportunity />} />
        <Route path="/require" element={<Require />} />
        <Route path="/reqinfo" element={<Reqinfo />} />
        <Route path="/mentoring" element={<Mentoring />} />
        <Route path='/mentor' element={<Mentor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
