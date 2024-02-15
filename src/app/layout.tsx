import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Modules } from "@/components/Course/Modules/Modules";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-5">
          <div className="col">
            <Modules />
          </div>
          <div className="col-span-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
