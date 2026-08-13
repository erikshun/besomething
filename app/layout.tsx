import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://besomething.chatgpt.site"),
  title: "BeSomething | Independent Software Developer",
  description: "BeSomething creates focused, privacy-conscious tools for everyday work.",
  openGraph: { title: "BeSomething", description: "Useful technology for everyday work.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "BeSomething", description: "Useful technology for everyday work.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
