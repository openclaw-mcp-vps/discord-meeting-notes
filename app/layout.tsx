import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Meeting Notes – Auto-generate meeting notes from Discord voice",
  description: "Transcribes Discord voice channels and generates structured meeting notes with action items for communities and remote teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d424531f-81ba-45cc-9246-2d253d6c6169"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
