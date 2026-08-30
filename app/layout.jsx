import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { metadata } from "@/lib/metadata";

export { metadata };

export const viewport = {
  themeColor: "#0c1017",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-resilience-500 focus:px-4 focus:py-2 focus:text-white focus:no-underline"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
