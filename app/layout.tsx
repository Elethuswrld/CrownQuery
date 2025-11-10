import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/app/AuthContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { products } from "@/app/lib/products";
import { db } from "@/lib/firebase/server"; // Import from the new reliable singleton module

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "CrownQuery",
  description: "Find your perfect crown",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // The database seeding logic is the only thing that needs the db object in the layout.
  try {
    const productsSnapshot = await db.collection("products").get();
    if (productsSnapshot.empty) {
      const batch = db.batch();
      products.forEach(product => {
        const docRef = db.collection("products").doc();
        batch.set(docRef, product);
      });
      await batch.commit();
      console.log("Database seeded with initial products.");
    }
  } catch (error) {
    console.error("Error during database seeding:", error);
    // We don't want to block the entire app if seeding fails, so we just log the error.
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <AuthProvider>
          <Navbar />
          <main className="pt-16">{children}</main> {/* Add padding to avoid overlap */}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
