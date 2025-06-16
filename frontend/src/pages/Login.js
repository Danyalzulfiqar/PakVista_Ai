import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        login();
        navigate('/');
      } else {
        setError('Login failed: Invalid credentials.');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900">
      <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl bg-gray-800/80 backdrop-blur-md border border-cyan-900/40 relative">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="PakVista Logo" className="h-16 w-16 rounded-full mb-2 shadow-lg" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">PakVista.Ai</h2>
          <p className="text-cyan-200 text-sm">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-cyan-300 text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-xl bg-gray-900/70 border border-cyan-700 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoFocus
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
              autoComplete="current-password"
              placeholder="Enter password"
              disabled={loading}
            />
          </div>
          {error && <div className="text-red-400 text-sm text-center font-medium">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:from-cyan-400 hover:to-blue-400 transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm opacity-70"></div>
      </div>
    </div>
  );
};

export default Login; 