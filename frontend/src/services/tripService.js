import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, query, where, orderBy } from 'firebase/firestore';

class TripService {
  // Create a new trip plan
  static async createTrip(tripData, userId) {
    try {
      const tripWithUser = {
        ...tripData,
        userId: userId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      const docRef = await addDoc(collection(db, 'tripPlans'), tripWithUser);
      console.log('Trip plan created with ID:', docRef.id);
      return { id: docRef.id, ...tripWithUser };
    } catch (error) {
      console.error('Error creating trip plan:', error);
      throw error;
    }
  }

  // Get all trip plans for a specific user
  static async getUserTrips(userId) {
    try {
      const q = query(
        collection(db, 'tripPlans'),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const trips = [];
      
      querySnapshot.forEach((doc) => {
        trips.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      console.log('Fetched user trips:', trips.length);
      return trips;
    } catch (error) {
      console.error('Error fetching user trips:', error);
      throw error;
    }
  }

  // Delete a trip plan
  static async deleteTrip(tripId) {
    try {
      await deleteDoc(doc(db, 'tripPlans', tripId));
      console.log('Trip plan deleted:', tripId);
      return true;
    } catch (error) {
      console.error('Error deleting trip plan:', error);
      throw error;
    }
  }

  // Get popular/previous trip plans (dummy data for now)
  static async getPopularTrips() {
    try {
      const q = query(
        collection(db, 'tripPlans'),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const trips = [];
      
      querySnapshot.forEach((doc) => {
        trips.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      // Return only first 5 trips as popular
      return trips.slice(0, 5);
    } catch (error) {
      console.error('Error fetching popular trips:', error);
      throw error;
    }
  }
}

export default TripService; 