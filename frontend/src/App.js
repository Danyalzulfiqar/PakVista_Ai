import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Saved from './pages/Saved';
import Inspiration from './pages/Inspiration';
import Create from './pages/Create';
import StoryDetail from './components/inspiration/StoryDetail';
import DestinationDetail from './components/inspiration/DestinationDetail';
import AddStory from './pages/AddStory';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Seed from './seed';
import { AuthProvider, useAuth } from './context/AuthContext';
// import './App.css';

function PrivateRoute({ children }) {
  const { isLoggedIn, loading } = useAuth();
  if (loading) {
    // Show a loading spinner or nothing while checking auth state
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <span className="text-cyan-300 text-xl font-semibold">Checking session...</span>
      </div>
    );
  }
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <AuthProvider>
      {/* <Seed /> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
          {/* <Route path="/explore" element={<PrivateRoute><Explore /></PrivateRoute>} /> */}
          <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
          <Route path="/saved" element={<PrivateRoute><Saved /></PrivateRoute>} />
          <Route path="/inspiration" element={<PrivateRoute><Inspiration /></PrivateRoute>} />
          <Route path="/add-story" element={<PrivateRoute><AddStory /></PrivateRoute>} />
          <Route path="/create" element={<PrivateRoute><Create /></PrivateRoute>} />
          <Route path="/story/:id" element={<PrivateRoute><StoryDetail /></PrivateRoute>} />
          <Route path="/destination/:id" element={<PrivateRoute><DestinationDetail /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
