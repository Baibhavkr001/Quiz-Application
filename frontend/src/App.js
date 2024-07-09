import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import QuizCreator from './pages/QuizCreator';
import QuizTaker from './pages/QuizTaker';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quiz-taker" element={<Signup />} />
        <Route path="/quiz-creator" element={<QuizCreator />} />
        <Route path="/Login" element={<Login />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
