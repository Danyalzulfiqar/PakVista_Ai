import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup, error: authError } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    if (password !== confirmPassword) {
      setLocalError('Passwords do not match.');
      return;
    }
    if (!username.trim()) {
      setLocalError('Username is required.');
      return;
    }
    setLoading(true);
    try {
      await signup(email, password, username);
      navigate('/');
    } catch (err) {
      setLocalError(err.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg?crop=1xw:1xh;center,top&resize=980:*')`
        }}
      ></div>
      
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl shadow-2xl bg-gray-800/80 backdrop-blur-md border border-cyan-900/40">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="PakVista Logo" className="h-16 w-16 rounded-full mb-2 shadow-lg" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">PakVista.Ai</h2>
          <p className="text-cyan-200 text-sm">Create your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-cyan-300 text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-xl bg-gray-900/70 border border-cyan-700 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
              autoComplete="email"
              placeholder="Enter email"
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-cyan-300 text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-xl bg-gray-900/70 border border-cyan-700 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
              placeholder="Enter username"
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-cyan-300 text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-xl bg-gray-900/70 border border-cyan-700 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="new-password"
              placeholder="Enter password"
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-cyan-300 text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-xl bg-gray-900/70 border border-cyan-700 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              placeholder="Confirm password"
              disabled={loading}
            />
          </div>
          {(localError || authError) && <div className="text-red-400 text-sm text-center font-medium">{localError || authError}</div>}
          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:from-cyan-400 hover:to-blue-400 transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="text-cyan-300 hover:underline text-sm"
            onClick={() => navigate('/login')}
            disabled={loading}
          >
            Already have an account? Sign In
          </button>
        </div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm opacity-70"></div>
      </div>
    </div>
  );
};

export default Signup; 