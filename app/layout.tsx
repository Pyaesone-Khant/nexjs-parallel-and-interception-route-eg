import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Parallel Routes",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <main
                    className=" mx-auto min-h-screen bg-amber-50 flex flex-col"
                >
                    <Navbar />
                    <section
                        className=" flex-1 grid grid-cols-1"
                    >
                        {children}
                    </section>
                </main>
                {modal}
            </body>
        </html>
    );
}
