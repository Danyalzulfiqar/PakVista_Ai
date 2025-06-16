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