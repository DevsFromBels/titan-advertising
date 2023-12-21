'use client'
import React from 'react'
import useUser from "@/shared/hooks/useUser";
import { useRouter } from "next/navigation";

const Home = () => {
    const { user, loading } = useUser();
    const router = useRouter();

    return (
        <main>
            
        </main>
    )
}
export default Home
