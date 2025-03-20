'use client';

import { useRouter } from "next/navigation";
import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {

    const router = useRouter()

    return (
        <section
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/20 "
        >
            <div
                className=" bg-amber-100 rounded-md p-4 space-y-4 "
            >
                <div
                    className="flex items-center justify-end"
                >
                    <button
                        onClick={() => router.back()}
                        className=" w-8 rounded-full aspect-square bg-black/10 hover:bg-black/50 transition cursor-pointer "
                    >
                        X
                    </button>
                </div>
                {
                    children
                }
            </div>
        </section>
    )
}
