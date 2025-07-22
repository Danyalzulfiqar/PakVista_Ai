# PakVista.Ai Frontend Development Plan

## Project Vision

PakVista.Ai aims to be the go-to platform for planning trips across Pakistan. Users can:
- Discover popular and hidden travel spots via an interactive map and lists.
- Learn about destinations, see upcoming trips, and design custom itineraries.
- Review, comment, and share experiences.
- Save locations for future trips ("watch later").
- Engage with a travel-focused community.

**Current Focus:**  
Frontend (GUI) only, using JSON files for mock data. Backend and real data integration will come later.

---

## Current Progress

### Completed/Implemented
- [x] Project Setup: React (Create React App), Tailwind CSS ✅
- [x] Navigation: Sidebar and Navbar components ✅
- [x] Pages:
  - [x] Explore: Split view with a list/grid of places (left) and a Google Map (right) showing markers for Lahore ✅
  - [x] Home: Hero banner and navigation ✅
  - [x] Chat: UI skeleton for chat (with columns for chat list and chat details) ✅
  - [x] Create, Inspiration, Saved, Notifications: Pages exist with "Coming Soon" placeholders ✅
- [x] Reusable Components: Sidebar, Navbar, HeroBanner, etc. ✅
- [x] Map Integration: Google Maps with static markers for Lahore ✅

### Not Yet Implemented / To Do
- [ ] Dynamic Data: All data is currently hardcoded or static. Need to use JSON files for:
  - [ ] Destinations/places
  - [ ] Trips
  - [ ] User reviews/comments
  - [ ] Saved items
- [ ] Interactivity: Most "Coming Soon" pages need real UI and logic
- [ ] User Flows: No real user actions (save, comment, review, plan trip, etc.)
- [ ] State Management: No global state or context for user/session data
- [ ] UI Polish: Responsive design, error handling, loading states, etc.
- [ ] No authentication, profile, or backend logic yet

---

## Step-by-Step Frontend Plan

### 1. Data Layer (using JSON)
- [ ] Create JSON files for:
  - [ ] `places.json` (destinations, spots, hotels, etc.)
  - [ ] `trips.json` (upcoming/group trips, custom plans)
  - [ ] `reviews.json` (user reviews/comments)
  - [ ] `users.json` (for mock user data, saved items, etc.)
- [ ] Implement utility functions to fetch and update data from these files (simulate API calls)

---

### 2. Core Pages & Features

#### A. Explore Page
- [x] UI skeleton with tabs and map ✅
- [ ] Load places dynamically from `places.json`
- [ ] Filter/sort/search places by type, city, popularity, etc.
- [ ] Clicking a place shows details (modal or side panel)
- [ ] Map markers update based on filters/search
- [ ] "Save" button functionality (update saved items in user JSON)

#### B. Home Page
- [x] Hero banner and navigation ✅
- [ ] Add featured destinations/trips (from JSON)
- [ ] Add "Get Inspired" section (link to Inspiration page)

#### C. Create Page
- [ ] UI for creating a new trip/plan (form, drag-and-drop, etc.)
- [ ] Save new plans to `trips.json`
- [ ] Option to share or preview created plans

#### D. Inspiration Page
- [ ] Show curated stories, itineraries, or user experiences (from JSON)
- [ ] Allow users to submit their own stories (UI only, save to JSON)

#### E. Saved Page
- [ ] List of user's saved places/trips (from user JSON)
- [ ] Option to remove from saved

#### F. Notifications Page
- [ ] Show mock notifications (trip reminders, comments, etc.)

#### G. Chat Page
- [ ] List of conversations (from JSON)
- [ ] Chat UI for messages (mock data)

---

### 3. Community & Social Features
- [ ] User profile page (view own and others' profiles, mock data)
- [ ] Reviews/comments on places and trips
- [ ] "Watch later"/save for future
- [ ] Like/upvote places, trips, or reviews

---

### 4. UI/UX Enhancements
- [ ] Responsive/mobile-first design
- [ ] Loading and error states for data fetching
- [ ] Skeleton loaders/placeholders
- [ ] Consistent theming and branding

---

### 5. Unique/Advanced Features (Frontend Only)
- [ ] "Trip Builder" wizard (step-by-step custom plan creation)
- [ ] Map-based trip planning (select spots on map, auto-generate route)
- [ ] "Trending" or "Hidden Gems" sections
- [ ] Gamification: badges for saving, reviewing, or planning trips

---

### 6. Documentation & Developer Experience
- [ ] Update README with project purpose, setup, and usage
- [ ] Document JSON data structure and how to add/edit mock data
- [ ] Add comments and structure code for easy backend integration later

---

## Example Scenarios to Cover

- [ ] User browses and filters places on the Explore page, views details, and saves a spot
- [ ] User creates a custom trip plan and previews it
- [ ] User reads and writes reviews for a destination
- [ ] User views and manages their saved items
- [ ] User gets inspired by reading travel stories
- [ ] User interacts with the map to discover new places

---

**Note:**  
All features should be built with mock data and designed for easy backend/API integration in the future. 

---

## Firebase Integration Plan for PakVista.Ai Frontend

### 1. Firebase Project Setup
- [ ] Create a Firebase Project in the [Firebase Console](https://console.firebase.google.com/).
- [ ] Register your app (add your web app to the Firebase project).
- [ ] Get Firebase Config (API keys, project ID, etc.).

### 2. Install Firebase SDK
- [ ] In your React project, run:
  ```bash
  npm install firebase
  ```
- [ ] (Optional) Install additional packages if you plan to use Firebase UI or other helpers.

### 3. Initialize Firebase in Your App
- [ ] Create a file (e.g., `src/firebase.js`) and add your Firebase config and initialization code:
  ```js
  import { initializeApp } from 'firebase/app';
  import { getAuth } from 'firebase/auth';
  import { getFirestore } from 'firebase/firestore';
  import { getStorage } from 'firebase/storage';

  const firebaseConfig = {
    // ...your config here
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  ```
- [ ] Import and use these exports in your components/services.

### 4. Replace/Integrate Authentication
- [ ] Replace your current hardcoded login logic with **Firebase Authentication**.
- [ ] Update your `AuthContext` to use Firebase Auth methods:
  - `signInWithEmailAndPassword`
  - `signOut`
  - `onAuthStateChanged` for persistent login
- [ ] (Optional) Add social login (Google, Facebook, etc.) if desired.

### 5. Migrate Data to Firestore
- [ ] Identify all data currently stored in JSON files (`create.json`, `inspiration.json`, `saved.json`, `notifications.json`).
- [ ] Design Firestore collections for:
  - Users
  - Trips/Plans
  - Destinations
  - Reviews/Comments
  - Saved Items
  - Notifications
- [ ] Write migration scripts or manually add initial data to Firestore via the Firebase Console.

### 6. Update Data Fetching and Writing
- [ ] Replace all static JSON imports with Firestore queries:
  - Use `getDocs`, `addDoc`, `updateDoc`, `deleteDoc` from `firebase/firestore`.
- [ ] Update components to fetch data from Firestore (e.g., trip lists, destinations, user plans).
- [ ] Update forms to write data to Firestore (e.g., creating a new trip plan).

### 7. Integrate Cloud Storage (for Images/Files)
- [ ] For any user-uploaded images (e.g., travel stories, destination photos), use Firebase Storage.
- [ ] Update forms/components to upload files to Storage and save the file URLs in Firestore.

### 8. Secure Data with Firestore Rules
- [ ] Set up Firestore security rules to ensure users can only access their own data where appropriate.
- [ ] Test rules using the Firebase Emulator Suite or the Console.

### 9. (Optional) Add Cloud Functions for Custom Logic
- [ ] If you need backend logic (e.g., notifications, triggers), set up Firebase Cloud Functions.
- [ ] For now, your AI/ML will remain on the Flask server.

### 10. Test the Integration
- [ ] Test authentication flows (sign up, sign in, sign out, protected routes).
- [ ] Test data fetching, creation, editing, and deletion.
- [ ] Test file uploads and access.
- [ ] Test security rules.

### 11. Update Documentation
- [ ] Document the new data flow and architecture.
- [ ] Update your `plan.md` and/or `REQUIREMENTS.md` to reflect Firebase integration.

---

### Example: How a Component Changes

**Before (using JSON):**
```js
import dummyPlans from '../data/create.json';
// ... use dummyPlans in state
```

**After (using Firestore):**
```js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

useEffect(() => {
  const fetchPlans = async () => {
    const querySnapshot = await getDocs(collection(db, 'plans'));
    setPlans(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };
  fetchPlans();
}, []);
```

---

### Summary Table

| Step | Task                                      | Status  |
|------|-------------------------------------------|---------|
| 1    | Create Firebase project                   | [ ]     |
| 2    | Install Firebase SDK                      | [ ]     |
| 3    | Initialize Firebase in app                | [ ]     |
| 4    | Integrate Firebase Auth                   | [ ]     |
| 5    | Migrate data to Firestore                 | [ ]     |
| 6    | Update data fetching/writing              | [ ]     |
| 7    | Integrate Cloud Storage                   | [ ]     |
| 8    | Set up Firestore security rules           | [ ]     |
| 9    | (Optional) Add Cloud Functions            | [ ]     |
| 10   | Test all features                         | [ ]     |
| 11   | Update documentation                      | [ ]     | 




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRmYyj4l1K2PN0BxmPMwLIy1M5Y8Nzgjg",
  authDomain: "pakvista-6548c.firebaseapp.com",
  projectId: "pakvista-6548c",
  storageBucket: "pakvista-6548c.firebasestorage.app",
  messagingSenderId: "915273181968",
  appId: "1:915273181968:web:a667385829a7469f1e1395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);