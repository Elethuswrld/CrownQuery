# CrownQuery Application Blueprint

## Overview

CrownQuery is a web application for an AI analytics platform. It provides users with tools to analyze brand reputation and extract valuable insights. The application features a modern, visually appealing landing page to attract users and showcase its features.

## Implemented Features, Styles, and Design

### Initial Setup & Landing Page

*   **Framework:** Next.js with App Router.
*   **Styling:** Tailwind CSS for styling.
*   **Landing Page (`app/page.tsx`):**
    *   A hero section with the headline "Unlock the Power of Your Online Presence" and a call-to-action button.
    *   A navigation bar (`components/navbar.tsx`).
*   **Typography:** Uses "Poppins", "Inter", and "Montserrat" fonts.
*   **Color Palette:** A vibrant color palette including blush pink, lavender mist, and accent colors.
*   **Visual Effects:** Includes soft shadows, lifted card effects, and a noise texture background.

### Hydration Error Fix and UI Refactoring

The following changes were implemented to resolve a persistent hydration error and improve the UI component architecture.

*   **UI Component Library:** Integrated `shadcn/ui` for more robust and standardized components.
*   **Button Component:** Replaced the custom button with the `shadcn/ui` `Button` component (`components/ui/button.tsx`).
*   **Styling & Theming:**
    *   Updated `tailwind.config.ts` to use a CSS variable-based theming system compatible with `shadcn/ui`.
    *   Added a comprehensive color palette with primary, secondary, destructive, muted, and accent colors to `app/globals.css`.
    *   Installed and configured `tailwindcss-animate` for animations.
*   **Navbar (`components/navbar.tsx`):**
    *   Converted the `Navbar` to a Client Component (`"use client"`).
    *   Implemented a strategy to delay rendering of UI elements that might be affected by browser extensions to prevent hydration mismatches. This is done using `useState` and `useEffect` to render the buttons only on the client-side.
    *   Added `suppressHydrationWarning` to the buttons as an additional measure.
*   **Utility Functions:** Created `lib/utils.ts` with the `cn` function for merging Tailwind CSS classes.
*   **Dependencies:** Added the following npm packages:
    *   `class-variance-authority`
    *   `clsx`
    *   `tailwind-merge`
    *   `@radix-ui/react-slot`
    *   `tailwindcss-animate`

### Authentication Improvements

*   **Popup Blocker Fix:** Switched the Firebase authentication method from `signInWithPopup` to `signInWithRedirect` in `app/AuthContext.tsx` to resolve browser popup blocking issues in the development environment.
*   **Sign Out Functionality:**
    *   Added a `signOut` function to the `AuthContext` (`app/AuthContext.tsx`).
    *   Integrated a "Sign Out" button into the `Navbar` (`app/components/layout/Navbar.tsx`) that appears for authenticated users, providing a complete login/logout cycle.

### Contact Page

*   **New Route:** Created a dedicated contact page at `app/contact/page.tsx`.
*   **Contact Form:**
    *   Built a user-friendly contact form with fields for name, email, and message.
    *   The form provides real-time validation feedback to the user.
*   **New UI Component:** Created a reusable `Textarea` component at `app/components/ui/textarea.tsx` for multi-line text input.
*   **Server Action:** Implemented a Server Action at `app/contact/actions.ts` to process the form submission. This includes server-side validation using Zod.
*   **Updated Navigation:** The "Contact" links in the `Navbar` (`app/components/layout/Navbar.tsx`) now correctly navigate to the new contact page.
*   **Design:** The contact page is designed to be consistent with the site's modern aesthetic, featuring a clean layout, clear typography, and contact information with icons.

## Current Plan: Implement Contact Page & Fix Auth

**Status:** Completed.

**Goal:** Add a functional contact page and fix the authentication popup error.

**Steps Taken:**

1.  **Fix Auth Flow:**
    *   Modified `app/AuthContext.tsx` to use `signInWithRedirect` instead of `signInWithPopup`.
    *   Added `signOut` functionality to the auth context and the main navbar.
2.  **Create `Textarea` Component:**
    *   Built a new `textarea.tsx` component in `app/components/ui`.
3.  **Build Contact Page:**
    *   Created the server action `app/contact/actions.ts` with Zod validation.
    *   Constructed the UI for the contact page at `app/contact/page.tsx` using the new server action and UI components.
4.  **Update Navigation:**
    *   Modified `app/components/layout/Navbar.tsx` to link to the new `/contact` page.

**Next Step:** Awaiting the next user request.
