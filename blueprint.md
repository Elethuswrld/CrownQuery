
# Project Blueprint

## Overview

A modern e-commerce application for a fictional company called "Crownquery". The application features a product catalog, user authentication, and a unique quiz-based product recommendation system.

## Design and Features

### Implemented (V6):

*   **Enhanced User Profile:**
    *   **Profile Updates:** Users can update their display name and photo URL.
    *   **Optimized Images:** Implemented `next/image` for better image performance.

### Implemented (V5):

*   **User Profile & Protected Routes:**
    *   **Profile Page:** Created a user profile page at `/profile`.
    *   **Route Protection:** Implemented a `withAuth` Higher-Order Component (HOC) to protect routes from unauthenticated access.
    *   **Header Link:** Added a link to the profile page in the header for authenticated users.

### Implemented (V4):

*   **User Authentication:**
    *   **Firebase Setup:** Added Firebase to the project and configured Firebase Authentication.
    *   **Authentication UI:** Created new sign-up (`/signup`) and login (`/login`) pages.
    *   **Authentication Logic:** Implemented sign-up, login, and logout functionality.
    *   **Session Management:** A client-side `AuthContext` manages the user's session.
    *   **Dynamic Header:** The header dynamically displays login/logout/signup buttons.

### Implemented (V3):

*   **Product Recommendation Logic:** Implemented a simple product recommendation algorithm.
*   **Reusable Product Card:** Created a generic `ProductCard.tsx` component.
*   **Dynamic Home Page:** The home page dynamically displays products.

### Implemented (V2.2):

*   **Quiz Results Page:** A results page at `/quiz/results`.
*   **Quiz to Results Navigation:** Seamless navigation from the quiz to the results page.

### Implemented (V2.1):

*   **Interactive Quiz Page:** A fully interactive quiz page at `/quiz`.

### Implemented (V2):

*   **Home Page Redesign:** A modern, visually stunning home page.

### Implemented (Initial Version):

*   **Core Framework:** Next.js with App Router.
*   **Styling:** Tailwind CSS.

## Current Plan: Advanced Account Management

*   **Objective:** Add password reset and account deletion functionality to the profile page.
*   **Steps:**
    *   [ ] **Add "Change Password" Feature:**
        *   [ ] Add a "Change Password" button to the profile page.
        *   [ ] Implement a function to send a password reset email using `sendPasswordResetEmail` from Firebase Authentication.
        *   [ ] Display a confirmation message to the user.
    *   [ ] **Add "Delete Account" Feature:**
        *   [ ] Add a "Delete Account" button to the profile page.
        *   [ ] Implement a function to delete the user's account using `deleteUser` from Firebase Authentication.
        *   [ ] Redirect the user to the home page after their account is deleted.
