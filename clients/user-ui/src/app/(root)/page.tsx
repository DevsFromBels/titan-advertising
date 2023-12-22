'use client'
import React from 'react'
import useUser from "@/shared/hooks/useUser";
import DashboardPage from "@/pages/dashboard.page";
import DefaultPage from "@/pages/default.page";

const Home = () => {
    const { user, loading } = useUser();

    if(loading) {
        return <h2>Loading...</h2>
    }

    if(user) {
        return <DashboardPage/>
    }

    return <DefaultPage/>
}
export default Home
