import { ReactNode } from "react";
import StarryBackground from "../components/StarryBackground";
import "./globals.css";

export const metadata = {
  title: "Just for TAN TAN",
  description: "Fulfilling the desire of TAN TAN",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Debug: Wrapper for starry background */}
        <div
          className="fixed inset-0 z-[-1]" // Ensure it sits behind everything else
        >
          <StarryBackground />
        </div>

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
