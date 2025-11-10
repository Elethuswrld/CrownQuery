# CrownQuery Application Blueprint

## Overview

CrownQuery is a sophisticated e-commerce and styling platform designed to provide a personalized and empowering experience for discovering, selecting, and purchasing wigs. The core of the application is a 'Style Quiz' that uses user preferences to generate a personalized catalog of recommended wigs. The platform also aims to build a community through features like a loyalty program, booking services for consultations, and a blog with style tips and inspiration.

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
*   **Linting:** Fixed an unescaped entity error in the contact page.

### Style Quiz & Personalized Catalog

*   **Style Quiz Page:** Built the UI for the quiz at `/style-quiz`.
*   **Quiz Logic:** Implemented questions and answer processing.
*   **Personalized Catalog:** Created a results page to display recommended products.
*   **Updated About Page:** Link the "Style Quiz" text to the new quiz page.

### Footer & Legal Pages

*   **Privacy Policy:** Created a `privacy-policy` page with detailed information about data collection, usage, and user rights.
*   **FAQ Page:** Created a `faq` page to answer common customer questions.
*   **Footer:** Added a comprehensive footer to the main layout, including links to the new `privacy-policy` and `faq` pages, as well as contact information and social media links.

### Order & Checkout

*   **Order Page:** Created an `order` page with a checkout form to collect customer information for manual delivery.
*   **Checkout Form:** The form collects the customer's full name, address, phone number, and email address.
*   **Firebase Integration:** The form is integrated with Firebase to store order information in the `orders` collection.

### Homepage Enhancements

*   **"Why CrownQuery?" Section:** Added a new section to the homepage (`app/components/home/WhyCrownQuery.tsx`) that highlights the key benefits of the platform, such as expert curation, quality assurance, and a personalized experience.
*   **Featured Products Carousel:**
    *   Replaced the static `ProductGrid` with a dynamic `FeaturedProducts` carousel (`app/components/home/FeaturedProducts.tsx`).
    *   Installed and configured `embla-carousel-react` and `embla-carousel-autoplay` for the carousel functionality.
    *   Added custom styles to `app/globals.css` to ensure the carousel is responsive and visually appealing.

## Current Plan: Homepage Refinement

**Status:** Completed.

**Goal:** Enhance the homepage by adding a "Why CrownQuery?" section and converting the featured products grid into an autoplaying carousel.

**Steps Taken:**

1.  **Created "Why CrownQuery?" Component:** A new component was created to showcase the brand's value propositions.
2.  **Installed Carousel Dependencies:** Added `embla-carousel-react` and `embla-carousel-autoplay` to the project.
3.  **Created FeaturedProducts Component:** A new carousel component was built to display featured products, replacing the old grid.
4.  **Updated Homepage:** The main page was updated to include the new "Why CrownQuery?" section and the `FeaturedProducts` carousel.
5.  **Styled Carousel:** Added responsive styles for the Embla carousel in `globals.css`.
6.  **Fixed Linting Error:** Resolved an unescaped entity error on the contact page.

**Next Step:** Awaiting the next user request.
