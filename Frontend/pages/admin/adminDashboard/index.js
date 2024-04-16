import * as React from 'react';
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import AdminSideBar from '@/components/AdminSideBar';
export default function adminDashboard() {
    const router = useRouter();
    useEffect(() => {
        let token = localStorage.getItem("adminToken");
        if (token) {
            const option = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            try {
                fetch("http://localhost/adminDashboard", option).then(async (response) => {
                    let adminTokenCheckResponse = await response.json();
                    if (!adminTokenCheckResponse.response) {
                        router.push('/admin');
                    }
                }).catch((err) => {
                    router.push("/admin")
                })
            } catch (err) {
                console.log(err);
            }
        } else {
            router.push('/admin');
        }
    }, [])

    return (
        <>
            <AdminSideBar/>
        </>
    )
}