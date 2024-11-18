import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './pages/Home';
    import JobsBoard from './pages/JobsBoard';
    import OrganizationProfiles from './pages/OrganizationProfiles';
    import ExpertProfiles from './pages/ExpertProfiles';
    import Login from './pages/Login';
    import Navbar from './components/Navbar';
    import './App.css';

    function App() {
      return (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobsBoard />} />
            <Route path="/organizations" element={<OrganizationProfiles />} />
            <Route path="/experts" element={<ExpertProfiles />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      );
    }

    export default App;
