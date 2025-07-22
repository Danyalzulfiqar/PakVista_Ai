import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

// Helper to create user doc if not exists
export async function createUserDocIfNotExists(user, displayName) {
  if (!user) return;
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email || '',
      displayName: displayName || user.displayName || '',
      role: 'user',
    });
    // Optionally log
    // console.log('[Auth] Created user doc for', user.email);
  }
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setIsLoggedIn(!!user);
      setLoading(false);
      if (user) {
        await createUserDocIfNotExists(user);
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setError(null);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      await createUserDocIfNotExists(cred.user);
    } catch (err) {
      setError(err.message);
      setIsLoggedIn(false);
      throw err;
    }
  };

  // Accept displayName for signup
  const signup = async (email, password, displayName) => {
    setError(null);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      await createUserDocIfNotExists(cred.user, displayName);
    } catch (err) {
      setError(err.message);
      setIsLoggedIn(false);
      throw err;
    }
  };

  const logout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, signup, logout, error, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 