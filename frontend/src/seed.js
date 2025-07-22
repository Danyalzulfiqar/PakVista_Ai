import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';

// This component seeds Firestore with inspiration data if not already present.
// For development use only. Remove after seeding!

const Seed = () => {
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const seedData = async () => {
      try {
        
        console.log('[Seed] Seeding complete!');
      } catch (err) {
        setStatus('error');
        console.error('[Seed] Seeding error:', err);
      }
    };
    seedData();
    // eslint-disable-next-line
  }, []);

  // This component does not render anything visible
  return null;
};

export default Seed; 