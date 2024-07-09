import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import QuizCreator from './pages/QuizCreator';
import QuizTaker from './pages/QuizTaker';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quiz-taker" element={<QuizTaker />} />
        <Route path="/quiz-creator" element={<QuizCreator />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
