import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const { login, error: authError } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setLocalError(err.message);
      setLoading(false);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLocalError('');
    setGoogleLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      setLocalError(err.message);
    }
    setGoogleLoading(false);
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
          <p className="text-cyan-200 text-sm">Sign in to your account</p>
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
              disabled={loading || googleLoading}
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
              disabled={loading || googleLoading}
            />
          </div>
          {(localError || authError) && <div className="text-red-400 text-sm text-center font-medium">{localError || authError}</div>}
          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:from-cyan-400 hover:to-blue-400 transition disabled:opacity-60"
            disabled={loading || googleLoading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <div className="flex flex-col gap-2 justify-center mt-4">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-cyan-500 bg-transparent text-cyan-200 font-semibold shadow hover:bg-cyan-900/30 transition disabled:opacity-60"
            onClick={handleGoogleSignIn}
            disabled={googleLoading || loading}
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path d="M44.5 20H24v8.5h11.7C34.6 33.7 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.2 5.5 29.4 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5c10.5 0 19.1-8.1 19.1-19.1 0-1.3-.1-2.1-.3-3.4z" fill="#FFC107"/><path d="M6.3 14.7l7 5.1C15.1 17.1 19.2 14 24 14c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.2 5.5 29.4 3.5 24 3.5c-6.6 0-12.2 2.7-16.2 7.1z" fill="#FF3D00"/><path d="M24 44.5c5.6 0 10.7-1.9 14.7-5.2l-6.8-5.6c-2 1.4-4.5 2.3-7.9 2.3-5.7 0-10.5-3.8-12.2-9.1l-7 5.4C7.8 40.2 15.3 44.5 24 44.5z" fill="#4CAF50"/><path d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.7 8.5-11.7 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.2 5.5 29.4 3.5 24 3.5c-6.6 0-12.2 2.7-16.2 7.1z" fill="none"/><path d="M6.3 14.7l7 5.1C15.1 17.1 19.2 14 24 14c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.2 5.5 29.4 3.5 24 3.5c-6.6 0-12.2 2.7-16.2 7.1z" fill="none"/><path d="M24 44.5c5.6 0 10.7-1.9 14.7-5.2l-6.8-5.6c-2 1.4-4.5 2.3-7.9 2.3-5.7 0-10.5-3.8-12.2-9.1l-7 5.4C7.8 40.2 15.3 44.5 24 44.5z" fill="none"/></g></svg>
            {googleLoading ? 'Signing in with Google...' : 'Sign in with Google'}
          </button>
          <button
            type="button"
            className="text-cyan-300 hover:underline text-sm"
            onClick={() => navigate('/signup')}
            disabled={loading || googleLoading}
          >
            Create Account
          </button>
        </div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm opacity-70"></div>
      </div>
    </div>
  );
};

export default Login; 