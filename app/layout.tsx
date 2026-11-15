import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ScrollProgress, SmoothScroll } from "@/components/motion";
import { GridLines } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: "Brightstack Technologies | Technology Built for Real Business Growth",
    template: "%s | Brightstack Technologies",
  },
  description: site.description,
};

// Applies a saved theme before first paint so the page does not flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative flex min-h-full flex-col">
        <SmoothScroll>
          <ScrollProgress />
          <GridLines />
          <Header />
          <main className="relative z-10 flex-1 pt-[var(--header-height)]">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
