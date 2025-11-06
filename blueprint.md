
# Project Blueprint

## Overview

A modern e-commerce application for a fictional company called "Crownquery". The application features a product catalog, user authentication, and a unique quiz-based product recommendation system.

## Design and Features

### Implemented (V4):

*   **User Authentication:**
    *   **Firebase Setup:** Added Firebase to the project and configured Firebase Authentication.
    *   **Authentication UI:** Created new sign-up (`/signup`) and login (`/login`) pages with a modern design.
    *   **Authentication Logic:** Implemented sign-up, login, and logout functionality using Firebase Authentication.
    *   **Session Management:** A client-side `AuthContext` manages the user's session.
    *   **Dynamic Header:** The header now dynamically displays login/logout/signup buttons based on the user's authentication state.

### Implemented (V3):

*   **Product Recommendation Logic:** A simple recommendation algorithm has been implemented to suggest a product to the user based on their quiz answers.
*   **Reusable Product Card:** A generic `ProductCard.tsx` component has been created to display products consistently across the application.
*   **Dynamic Home Page:** The home page now dynamically displays products from the `products.ts` file.

### Implemented (V2.2):

*   **Quiz Results Page:** A results page at `/quiz/results` to display the user's quiz answers.
*   **Quiz to Results Navigation:** The quiz page now seamlessly navigates to the results page upon completion.

### Implemented (V2.1):

*   **Interactive Quiz Page:** A fully interactive quiz page at `/quiz`.

### Implemented (V2):

*   **Home Page Redesign:** A modern, visually stunning home page.

### Implemented (Initial Version):

*   **Core Framework:** Next.js with App Router.
*   **Styling:** Tailwind CSS.

## Current Plan: User Profile & Protected Routes

*   **Objective:** Create a protected user profile page that is only accessible to authenticated users.
*   **Steps:**
    *   [ ] **Create Profile Page:**
        *   [ ] Create a new page at `/profile`.
        *   [ ] Design the page to display user information (e.g., email).
    *   [ ] **Implement Route Protection:**
        *   [ ] Create a Higher-Order Component (HOC) named `withAuth` to wrap protected pages.
        *   [ ] This HOC will check for an authenticated user and redirect to `/login` if the user is not signed in.
    *   [ ] **Update Header:**
        *   [ ] Add a link to the `/profile` page in the header for authenticated users.
